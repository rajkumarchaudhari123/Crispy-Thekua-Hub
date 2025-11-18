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
      <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-orange-600">
            Crispy Thekua Hub
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-lg font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className={`transition-colors duration-200 ${isActive(item.href)
                      ? "text-orange-600 font-semibold border-b-2 border-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                    }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <ShoppingCart
                className="w-6 h-6 cursor-pointer text-orange-600 hover:text-orange-700 transition-colors"
                onClick={() => setIsCartOpen(true)}
              />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-orange-600 transition-colors"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden bg-white py-4 shadow-lg border-t">
            <ul className="flex flex-col gap-3 px-6 text-lg">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    className={`block py-2 px-4 rounded-lg transition-all duration-200 ${isActive(item.href)
                        ? "bg-orange-100 text-orange-600 font-semibold border-l-4 border-orange-600"
                        : "text-gray-700 hover:bg-gray-100 hover:text-orange-600"
                      }`}
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <CartSidebar />
    </>
  );
}