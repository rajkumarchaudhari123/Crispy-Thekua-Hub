"use client";
import React, { useState } from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

// UPDATED WEB APP URL - YOUR NEW DEPLOYMENT
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzJN9w0f1ZTu9SaPPenEHqquNhQ6wNchXRmQH82pYp5JdooMeAkQbqrma_qT1AZzUi6/exec';

export default function CartSidebar() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen,
    clearCart
  } = useCart();

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    address: '',
    phone: '',
    notes: ''
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const saveOrderToGoogleSheet = async (orderData) => {
    return new Promise((resolve) => {
      try {
        const orderPayload = {
          customerInfo: customerInfo,
          orderData: orderData,
          totalPrice: getTotalPrice(),
          paymentMethod: paymentMethod
        };

        console.log('Sending order to Google Sheets:', orderPayload);

        // Simple GET request के through data send करें
        const params = new URLSearchParams();
        params.append('data', JSON.stringify(orderPayload));

        const trackingUrl = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;

        // Invisible image load करके request send करें (CORS bypass)
        const img = new Image();
        img.src = trackingUrl;
        img.onload = () => {
          console.log('Google Sheets request successful');
          resolve(true);
        };
        img.onerror = () => {
          console.log('Google Sheets request failed, but continuing...');
          resolve(true); // Error में भी continue
        };

        // Timeout के बाद automatically resolve
        setTimeout(() => {
          console.log('Google Sheets request timeout, continuing...');
          resolve(true);
        }, 2000);

      } catch (error) {
        console.error('Error in Google Sheets save:', error);
        resolve(true); // Always continue
      }
    });
  };

  const handlePlaceOrder = async () => {
    // Validation
    if (!customerInfo.name || !customerInfo.address || !customerInfo.phone) {
      alert('Please fill in all required fields (Name, Phone, Address)');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Google Sheet में save करें (background में)
      console.log('Starting order process...');
      await saveOrderToGoogleSheet(cart);

      // 2. WhatsApp message तैयार करें
      const itemsText = cart.map(item =>
        `${item.productName} — ${item.variant.qty} x ${item.quantity} = ₹${item.variant.price * item.quantity}`
      ).join('\n');

      const message = `
*New Order Received!*

*Customer Details:*  
Name: ${customerInfo.name}  
Phone: ${customerInfo.phone}  
Address: ${customerInfo.address}  

*Order Items:*  
${itemsText}

*Total:* ₹${getTotalPrice()}  

*Payment Method:* ${paymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}

Notes: ${customerInfo.notes || 'None'}
      `;

      // 3. WhatsApp खोलें
      const whatsappUrl = `https://wa.me/9667048566?text=${encodeURIComponent(message.trim())}`;
      window.open(whatsappUrl, '_blank');

      // 4. Success message
      alert('Order placed successfully! Check your order on WhatsApp.');

      // 5. Reset everything
      clearCart();
      setCustomerInfo({ name: '', address: '', phone: '', notes: '' });
      setIsCartOpen(false);

    } catch (error) {
      console.error('Order placement error:', error);
      alert('There was an error placing your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)} />

      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">

          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold text-orange-600">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={24} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg">
                    <img
                      src={item.img}
                      alt={item.productName}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.productName}</h3>
                      <p className="text-sm text-gray-600">{item.variant.qty}</p>
                      <p className="text-orange-600 font-bold">₹{item.variant.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.variant.qty, item.quantity - 1)}
                        className="p-1 rounded-full hover:bg-gray-100"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.variant.qty, item.quantity + 1)}
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Plus size={16} />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.productId, item.variant.qty)}
                        className="p-1 text-red-500 hover:bg-red-50 rounded-full ml-2"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Checkout Section */}
          {cart.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="text-xl font-bold text-orange-600 text-center">
                Total: ₹{getTotalPrice()}
              </div>

              {/* Customer Information Form */}
              <div className="space-y-3">
                <h3 className="font-semibold">Customer Information</h3>

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />

                <textarea
                  name="address"
                  placeholder="Delivery Address *"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />

                <textarea
                  name="notes"
                  placeholder="Additional Notes (optional)"
                  value={customerInfo.notes}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                {/* Payment Method */}
                <div className="pt-2">
                  <h3 className="font-semibold mb-2">Payment Method</h3>
                  <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                      />
                      <span>Cash on Delivery</span>
                    </label>

                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "online"}
                        onChange={() => {
                          setPaymentMethod("online");
                          alert("Please share your payment screenshot after opening WhatsApp!");
                        }}
                      />
                      <span>Pay Online</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handlePlaceOrder}
                disabled={isSubmitting}
                className={`w-full bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-700'
                  }`}
              >
                {isSubmitting ? 'Processing Order...' : 'Place Order via WhatsApp'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}