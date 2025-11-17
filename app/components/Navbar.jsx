"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "../context/CartContext";
import CartSidebar from "./CartSidebar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { getTotalItems, setIsCartOpen } = useCart();

  return (
    <>
      <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-orange-600">
            Crispy Thekua Hub
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-lg font-medium">
            <li><Link className="hover:text-orange-600" href="/">Home</Link></li>
            <li><Link className="hover:text-orange-600" href="/products">Products</Link></li>
            <li><Link className="hover:text-orange-600" href="/about">About</Link></li>
            <li><Link className="hover:text-orange-600" href="/contact">Contact</Link></li>
          </ul>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <ShoppingCart 
                className="w-6 h-6 cursor-pointer text-orange-600" 
                onClick={() => setIsCartOpen(true)}
              />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden bg-white py-4 shadow-md">
            <ul className="flex flex-col gap-4 px-6 text-lg">
              <li><Link className="hover:text-orange-600" href="/">Home</Link></li>
              <li><Link className="hover:text-orange-600" href="/products">Products</Link></li>
              <li><Link className="hover:text-orange-600" href="/about">About</Link></li>
              <li><Link className="hover:text-orange-600" href="/contact">Contact</Link></li>
            </ul>
          </div>
        )}
      </nav>
      
      <CartSidebar />
    </>
  );
}