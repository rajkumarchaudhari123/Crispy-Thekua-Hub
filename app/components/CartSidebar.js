"use client";
import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, CreditCard, Wallet, Smartphone } from 'lucide-react';
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

  const [paymentMethod, setPaymentMethod] = useState('cash'); // 'cash' or 'online'
  const [selectedUpiApp, setSelectedUpiApp] = useState('paytm'); // 'paytm', 'googlepay', 'phonepay'

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value
    });
  };

  const generateWhatsAppMessage = () => {
    const itemsText = cart.map(item =>
      `${item.productName} - ${item.variant.qty} x ${item.quantity} = ₹${item.variant.price * item.quantity}`
    ).join('\n');

    const paymentText = paymentMethod === 'cash'
      ? 'Cash on Delivery'
      : `Online Payment (${selectedUpiApp.toUpperCase()})`;

    const message = `*New Order Received!*\n\n*Customer Details:*\nName: ${customerInfo.name}\nPhone: ${customerInfo.phone}\nAddress: ${customerInfo.address}\n\n*Order Items:*\n${itemsText}\n\n*Total: ₹${getTotalPrice()}*\n*Payment Method: ${paymentText}*\n\nNotes: ${customerInfo.notes || 'None'}`;

    return encodeURIComponent(message);
  };

  const getUpiUrl = () => {
    const upiId = '9315153604@paytm';
    const amount = getTotalPrice();

    const upiUrls = {
      paytm: `paytmmp://pay?pa=${upiId}&pn=Merchant&am=${amount}&cu=INR`,
      googlepay: `tez://upi/pay?pa=${upiId}&pn=Merchant&am=${amount}&cu=INR`,
      phonepay: `phonepe://pay?pa=${upiId}&pn=Merchant&am=${amount}&cu=INR`
    };

    return upiUrls[selectedUpiApp] || upiUrls.paytm;
  };

  const handlePlaceOrder = () => {
    if (!customerInfo.name || !customerInfo.address || !customerInfo.phone) {
      alert('Please fill in all required fields (Name, Phone, Address)');
      return;
    }

    if (paymentMethod === 'online') {
      // For online payment - open selected UPI app
      const upiUrl = getUpiUrl();

      // Open UPI payment app
      window.location.href = upiUrl;

      // Also send WhatsApp message after a short delay
      setTimeout(() => {
        const phoneNumber = '9667048566';
        const message = generateWhatsAppMessage();
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
      }, 2000);

    } else {
      // For cash on delivery - just send WhatsApp message
      const phoneNumber = '9667048566';
      const message = generateWhatsAppMessage();
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    }

    clearCart();
    setCustomerInfo({ name: '', address: '', phone: '', notes: '' });
    setPaymentMethod('cash');
    setSelectedUpiApp('paytm');
    setIsCartOpen(false);
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

          {/* Customer Info & Checkout */}
          {cart.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="text-xl font-bold text-orange-600 text-center">
                Total: ₹{getTotalPrice()}
              </div>

              {/* Payment Method */}
              <div className="space-y-3">
                <h3 className="font-semibold">Payment Method</h3>

                <div className="grid grid-cols-2 gap-3">
                  {/* Cash on Delivery Option */}
                  <button
                    onClick={() => setPaymentMethod('cash')}
                    className={`p-3 border-2 rounded-lg flex flex-col items-center justify-center transition-all ${paymentMethod === 'cash'
                        ? 'border-orange-500 bg-orange-50 text-orange-600'
                        : 'border-gray-300 hover:border-orange-300'
                      }`}
                  >
                    <Wallet size={24} className="mb-2" />
                    <span className="font-medium">Cash on Delivery</span>
                  </button>

                  {/* Online Payment Option */}
                  <button
                    onClick={() => setPaymentMethod('online')}
                    className={`p-3 border-2 rounded-lg flex flex-col items-center justify-center transition-all ${paymentMethod === 'online'
                        ? 'border-green-500 bg-green-50 text-green-600'
                        : 'border-gray-300 hover:border-green-300'
                      }`}
                  >
                    <CreditCard size={24} className="mb-2" />
                    <span className="font-medium">Pay Online</span>
                    <span className="text-xs mt-1">UPI Apps</span>
                  </button>
                </div>

                {paymentMethod === 'online' && (
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Choose Payment App:</h4>

                    <div className="grid grid-cols-3 gap-2">
                      {/* Paytm */}
                      <button
                        onClick={() => setSelectedUpiApp('paytm')}
                        className={`p-3 border-2 rounded-lg flex flex-col items-center justify-center transition-all ${selectedUpiApp === 'paytm'
                            ? 'border-blue-500 bg-blue-50 text-blue-600'
                            : 'border-gray-300 hover:border-blue-300'
                          }`}
                      >
                        <Smartphone size={20} className="mb-1" />
                        <span className="text-xs font-medium">Paytm</span>
                      </button>

                      {/* Google Pay */}
                      <button
                        onClick={() => setSelectedUpiApp('googlepay')}
                        className={`p-3 border-2 rounded-lg flex flex-col items-center justify-center transition-all ${selectedUpiApp === 'googlepay'
                            ? 'border-teal-500 bg-teal-50 text-teal-600'
                            : 'border-gray-300 hover:border-teal-300'
                          }`}
                      >
                        <Smartphone size={20} className="mb-1" />
                        <span className="text-xs font-medium">Google Pay</span>
                      </button>

                      {/* PhonePe */}
                      <button
                        onClick={() => setSelectedUpiApp('phonepay')}
                        className={`p-3 border-2 rounded-lg flex flex-col items-center justify-center transition-all ${selectedUpiApp === 'phonepay'
                            ? 'border-purple-500 bg-purple-50 text-purple-600'
                            : 'border-gray-300 hover:border-purple-300'
                          }`}
                      >
                        <Smartphone size={20} className="mb-1" />
                        <span className="text-xs font-medium">PhonePe</span>
                      </button>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-700 text-center">
                        <strong>Pay to:</strong> 9315153604<br />
                        <strong>UPI ID:</strong> 9315153604@paytm<br />
                        <strong>Amount:</strong> ₹{getTotalPrice()}
                      </p>
                      <p className="text-xs text-blue-600 text-center mt-2">
                        You'll be redirected to {selectedUpiApp === 'paytm' ? 'Paytm' : selectedUpiApp === 'googlepay' ? 'Google Pay' : 'PhonePe'} app
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Customer Information */}
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
              </div>

              {/* Order Button */}
              <button
                onClick={handlePlaceOrder}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${paymentMethod === 'online'
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-orange-600 hover:bg-orange-700 text-white'
                  }`}
              >
                {paymentMethod === 'online'
                  ? `Pay with ${selectedUpiApp === 'paytm' ? 'Paytm' : selectedUpiApp === 'googlepay' ? 'Google Pay' : 'PhonePe'}`
                  : 'Place Order (Cash on Delivery)'}
              </button>

              {paymentMethod === 'online' && (
                <p className="text-xs text-center text-gray-600">
                  You'll be redirected to {selectedUpiApp === 'paytm' ? 'Paytm' : selectedUpiApp === 'googlepay' ? 'Google Pay' : 'PhonePe'} app for payment
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}