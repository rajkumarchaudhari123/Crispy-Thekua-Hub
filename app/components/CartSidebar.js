"use client";
import React, { useState } from "react";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartSidebar() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen,
    clearCart,
  } = useCart();

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    address: "",
    phone: "",
    notes: "",
    paymentMethod: "COD",
    transactionId: "",
    screenshot: null,
    screenshotURL: "",
  });

  const [isOrderProcessing, setIsOrderProcessing] = useState(false);

  const handleInputChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleScreenshotUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomerInfo({
          ...customerInfo,
          screenshot: file,
          screenshotURL: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePaymentMethod = (e) => {
    const value = e.target.value;

    setCustomerInfo({
      ...customerInfo,
      paymentMethod: value,
      screenshot: null,
      screenshotURL: "",
      transactionId: "",
    });

    if (value === "UPI") {
      alert(
        `Please pay ₹${getTotalPrice()} on this UPI Number: 9315153604\nAfter payment, please upload the screenshot to place your order.`
      );
    }
  };

  const generateWhatsAppMessage = () => {
    const itemsText = cart
      .map(
        (item) =>
          `${item.productName} - ${item.variant.qty} x ${item.quantity} = ₹${item.variant.price * item.quantity
          }`
      )
      .join("\n");

    const paymentText =
      customerInfo.paymentMethod === "UPI"
        ? `*Payment Method:* Online (UPI)
*Transaction ID:* ${customerInfo.transactionId || "Not provided"}`
        : `*Payment Method:* Cash On Delivery`;

    const message = `*New Order Received!*

*Customer Details:*
Name: ${customerInfo.name}
Phone: ${customerInfo.phone}
Address: ${customerInfo.address}

*Order Items:*
${itemsText}

*Total:* ₹${getTotalPrice()}

${paymentText}

Notes: ${customerInfo.notes || "None"}`;

    return encodeURIComponent(message);
  };

  const handlePlaceOrder = async () => {
    if (!customerInfo.name || !customerInfo.address || !customerInfo.phone) {
      alert("Please fill all required fields");
      return;
    }

    // UPI payment के लिए screenshot required है
    if (customerInfo.paymentMethod === "UPI" && !customerInfo.screenshot) {
      alert("Please upload payment screenshot for UPI payment");
      return;
    }

    setIsOrderProcessing(true);

    try {
      const phoneNumber = "9667048566";
      const message = generateWhatsAppMessage();

      // WhatsApp URL बनाएं
      let whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

      // अगर screenshot है तो उसे भेजें
      if (customerInfo.screenshot) {
        // File को Blob में convert करें
        const blob = await fetch(customerInfo.screenshotURL).then(r => r.blob());
        const file = new File([blob], "payment_screenshot.jpg", { type: "image/jpeg" });

        // WhatsApp के साथ image share करने का alternative तरीका
        // Note: WhatsApp web API directly files नहीं ले सकता, इसलिए हम user को manually share करने के लिए कहेंगे
        alert("Please share the payment screenshot manually in the WhatsApp chat that will open.");
      }

      // WhatsApp window खोलें
      window.open(whatsappUrl, "_blank");

      // Success message
      setTimeout(() => {
        alert("Order placed successfully! Please complete the payment screenshot sharing if required.");
        clearCart();
        setIsCartOpen(false);
        setIsOrderProcessing(false);

        // Reset form
        setCustomerInfo({
          name: "",
          address: "",
          phone: "",
          notes: "",
          paymentMethod: "COD",
          transactionId: "",
          screenshot: null,
          screenshotURL: "",
        });
      }, 1000);

    } catch (error) {
      console.error("Error placing order:", error);
      alert("Error placing order. Please try again.");
      setIsOrderProcessing(false);
    }
  };

  // UPI payment के लिए place order button disable करने की condition
  const isPlaceOrderDisabled =
    isOrderProcessing ||
    !customerInfo.name ||
    !customerInfo.address ||
    !customerInfo.phone ||
    (customerInfo.paymentMethod === "UPI" && !customerInfo.screenshot);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setIsCartOpen(false)}
      />

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
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-3 border rounded-lg"
                  >
                    <img
                      src={item.img}
                      alt={item.productName}
                      className="w-16 h-16 object-cover rounded"
                    />

                    <div className="flex-1">
                      <h3 className="font-semibold">{item.productName}</h3>
                      <p className="text-sm text-gray-600">{item.variant.qty}</p>
                      <p className="text-orange-600 font-bold">
                        ₹{item.variant.price}
                      </p>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.variant.qty,
                            item.quantity - 1
                          )
                        }
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="w-8 text-center">{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.variant.qty,
                            item.quantity + 1
                          )
                        }
                        className="p-1 rounded-full hover:bg-gray-100"
                      >
                        <Plus size={16} />
                      </button>

                      <button
                        onClick={() =>
                          removeFromCart(item.productId, item.variant.qty)
                        }
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

              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={customerInfo.name}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={customerInfo.phone}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg"
                required
              />

              <textarea
                name="address"
                placeholder="Delivery Address *"
                value={customerInfo.address}
                onChange={handleInputChange}
                rows="3"
                className="w-full p-3 border rounded-lg"
                required
              />

              <textarea
                name="notes"
                placeholder="Additional Notes (optional)"
                value={customerInfo.notes}
                onChange={handleInputChange}
                rows="2"
                className="w-full p-3 border rounded-lg"
              />

              <select
                name="paymentMethod"
                value={customerInfo.paymentMethod}
                onChange={handlePaymentMethod}
                className="w-full p-3 border rounded-lg"
              >
                <option value="COD">Cash on Delivery</option>
                <option value="UPI">UPI Online Payment</option>
              </select>

              {customerInfo.paymentMethod === "UPI" && (
                <div className="space-y-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800 font-semibold">
                    Please pay ₹{getTotalPrice()} to UPI: 9315153604
                  </p>

                  <input
                    type="text"
                    name="transactionId"
                    placeholder="UPI Transaction ID (optional)"
                    value={customerInfo.transactionId}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg"
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Payment Screenshot *
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleScreenshotUpload}
                      className="w-full p-3 border rounded-lg"
                      required
                    />
                    {customerInfo.screenshotURL && (
                      <div className="mt-2">
                        <img
                          src={customerInfo.screenshotURL}
                          alt="Payment Screenshot"
                          className="w-32 h-32 mx-auto rounded border object-cover"
                        />
                        <p className="text-xs text-green-600 text-center mt-1">
                          Screenshot uploaded successfully
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <button
                onClick={handlePlaceOrder}
                disabled={isPlaceOrderDisabled}
                className={`w-full py-3 rounded-lg font-semibold text-white ${isPlaceOrderDisabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-orange-600 hover:bg-orange-700"
                  }`}
              >
                {isOrderProcessing ? "Processing..." : "Place Order via WhatsApp"}
              </button>

              {customerInfo.paymentMethod === "UPI" && !customerInfo.screenshot && (
                <p className="text-sm text-red-600 text-center">
                  Please upload payment screenshot to place order
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}