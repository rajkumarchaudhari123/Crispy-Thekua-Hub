"use client";
import React, { useState } from 'react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

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

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const handlePlaceOrder = () => {
    if (!customerInfo.name || !customerInfo.address || !customerInfo.phone) {
      alert('Please fill in all required fields (Name, Phone, Address)');
      return;
    }

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

    const whatsappUrl = `https://wa.me/9667048566?text=${encodeURIComponent(
      message.trim()
    )}`;

    window.open(whatsappUrl, '_blank');

    clearCart();
    setCustomerInfo({ name: '', address: '', phone: '', notes: '' });
    setIsCartOpen(false);
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute bg-black bg-opacity-50" onClick={() => setIsCartOpen(false)} />

      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex flex-col h-full">

          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold text-orange-600">Your Cart</h2>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={24} />
            </button>
          </div>

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

          {cart.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="text-xl font-bold text-orange-600 text-center">
                Total: ₹{getTotalPrice()}
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Customer Information</h3>

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <textarea
                  name="address"
                  placeholder="Delivery Address *"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <textarea
                  name="notes"
                  placeholder="Additional Notes (optional)"
                  value={customerInfo.notes}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

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

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
              >
                Place Order via WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
