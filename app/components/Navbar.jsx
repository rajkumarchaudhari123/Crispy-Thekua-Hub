"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartSidebar from "./CartSidebar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <>
      {/* Outer subtle shadow layer for depth */}
      <div className="w-full h-2 bg-gradient-to-b from-gray-200/50 to-transparent fixed top-0 left-0 z-40 pointer-events-none"></div>

      <nav className="w-full bg-gradient-to-b from-white to-gray-50 fixed top-0 left-0 z-50">
        {/* Main 3D bar with multiple shadow layers */}
        <div className="relative">
          {/* Bottom shadow layer */}
          <div className="absolute inset-x-4 bottom-0 h-full bg-gradient-to-r from-amber-700/20 to-orange-700/20 rounded-bl-2xl rounded-br-2xl -skew-y-1 blur-md -z-10"></div>
          
          {/* Middle highlight layer */}
          <div className="absolute inset-x-2 -top-1 h-3 bg-gradient-to-r from-amber-300/40 to-orange-300/40 rounded-t-2xl blur-sm"></div>

          {/* Main nav content */}
          <div className="max-w-7xl mx-auto px-4 py-4 relative">
            <div className="flex justify-between items-center">
              
              {/* Logo with embossed effect */}
              <Link href="/" className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative px-4 py-2 bg-white rounded-lg shadow-[inset_0_2px_4px_0_rgba(0,0,0,0.05)] border border-gray-100">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text text-transparent">
                    Crispy Thekua Hub
                  </h1>
                  <div className="absolute inset-0 rounded-lg border border-white/50 pointer-events-none"></div>
                </div>
              </Link>

              {/* Desktop Menu with floating cards */}
              <ul className="hidden md:flex gap-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      className={`relative group block px-5 py-3 rounded-xl transition-all duration-300 ${isActive(item.href)
                        ? "shadow-[0_10px_30px_-10px_rgba(251,146,60,0.3)] transform -translate-y-0.5"
                        : "shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_-10px_rgba(251,146,60,0.4)] hover:-translate-y-0.5"
                        }`}
                      href={item.href}
                    >
                      {/* Button background */}
                      <div className={`absolute inset-0 rounded-xl ${isActive(item.href)
                        ? "bg-gradient-to-br from-amber-100 to-orange-50 border-2 border-amber-200/80"
                        : "bg-white border border-gray-100 group-hover:border-amber-200/60"
                        }`}></div>
                      
                      {/* Inner highlight */}
                      <div className={`absolute top-0 inset-x-0 h-1/2 rounded-t-xl ${isActive(item.href)
                        ? "bg-gradient-to-b from-white/70 to-transparent"
                        : "bg-gradient-to-b from-white/50 to-transparent"
                        }`}></div>
                      
                      {/* Text */}
                      <span className={`relative font-semibold tracking-wide ${isActive(item.href)
                        ? "text-transparent bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text"
                        : "text-gray-700 group-hover:text-amber-800"
                        }`}>
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Right Side Icons */}
              <div className="flex items-center gap-3">
                {/* Cart Button with 3D effect */}
                <div className="relative">
                  {/* Button shadow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-700/30 to-orange-700/30 rounded-full blur-sm group-hover:blur-md transition duration-300"></div>
                  
                  <button
                    className="relative p-3 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-[0_6px_16px_rgba(251,146,60,0.15),_inset_0_2px_4px_rgba(255,255,255,0.8)] border border-amber-200/50 hover:shadow-[0_10px_25px_-5px_rgba(251,146,60,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
                    onClick={() => setIsCartOpen(true)}
                  >
                    {/* Inner shine */}
                    <div className="absolute inset-2 rounded-full bg-gradient-to-b from-white/40 to-transparent"></div>
                    
                    <ShoppingCart className="relative w-5 h-5 text-amber-700" />
                    
                    {/* Cart item count */}
                    {getTotalItems() > 0 && (
                      <span className="absolute -top-1 -right-1 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-full w-6 h-6 text-xs flex items-center justify-center shadow-[0_3px_8px_rgba(220,38,38,0.4)] border border-red-300">
                        {getTotalItems()}
                      </span>
                    )}
                  </button>
                </div>

                {/* Mobile Menu Button - 3D style */}
                <button
                  className="md:hidden p-3 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-[0_4px_12px_rgba(0,0,0,0.05),_inset_0_1px_2px_rgba(255,255,255,0.8)] border border-gray-200 hover:shadow-[0_6px_20px_-5px_rgba(251,146,60,0.2)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  onClick={() => setOpen(!open)}
                >
                  <div className="relative">
                    {open ? <X size={20} className="text-amber-700" /> : <Menu size={20} className="text-amber-700" />}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/40 to-transparent"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown with 3D effect */}
        {open && (
          <div className="md:hidden relative">
            {/* Dropdown shadow */}
            <div className="absolute inset-x-4 -bottom-2 h-full bg-gradient-to-r from-amber-700/10 to-orange-700/10 rounded-bl-2xl rounded-br-2xl -skew-y-1 blur-md"></div>
            
            {/* Dropdown content */}
            <div className="relative bg-gradient-to-b from-white to-gray-50/95 py-5 shadow-2xl border-t border-amber-100/50 backdrop-blur-sm">
              <ul className="flex flex-col gap-2 px-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      className={`block relative py-4 px-6 rounded-xl transition-all duration-300 ${isActive(item.href)
                        ? "shadow-[0_8px_25px_-10px_rgba(251,146,60,0.4)]"
                        : "shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_-8px_rgba(251,146,60,0.3)]"
                        }`}
                      href={item.href}
                      onClick={() => setOpen(false)}
                    >
                      {/* Background */}
                      <div className={`absolute inset-0 rounded-xl ${isActive(item.href)
                        ? "bg-gradient-to-br from-amber-100 to-orange-50 border-2 border-amber-200/80"
                        : "bg-white border border-gray-100"
                        }`}></div>
                      
                      {/* Highlight */}
                      <div className={`absolute top-0 inset-x-0 h-1/2 rounded-t-xl ${isActive(item.href)
                        ? "bg-gradient-to-b from-white/70 to-transparent"
                        : "bg-gradient-to-b from-white/50 to-transparent"
                        }`}></div>
                      
                      {/* Text */}
                      <span className={`relative flex items-center justify-between font-medium ${isActive(item.href)
                        ? "text-transparent bg-gradient-to-r from-amber-700 to-orange-700 bg-clip-text"
                        : "text-gray-700"
                        }`}>
                        {item.label}
                        <div className={`w-2 h-2 rounded-full ${isActive(item.href)
                          ? "bg-gradient-to-r from-amber-500 to-orange-500"
                          : "bg-gray-300"
                          }`}></div>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20"></div>

      <CartSidebar />
    </>
  );
}