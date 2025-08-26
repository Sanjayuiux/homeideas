"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // ✅ for active route

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname(); // ✅ current path

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact-us", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b
               border-gray-100 transition-all duration-700
               ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="/">
              <div className="flex-shrink-0">
                <img
                  src="/assets/images/logo.svg"
                  alt="Home Ideas Logo"
                  className="w-[120px] sm:w-[150px]"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative pb-1 transition-colors ${
                    pathname === link.href
                      ? "text-[#B59F0E] font-medium after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-[#B59F0E] after:rounded-full"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Get Started Button */}
            <div className="hidden md:block">
              <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-100">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`block px-3 py-2 rounded-md transition-colors ${
                    pathname === link.href
                      ? "text-[#B59F0E] font-medium bg-gray-100"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-2">
                <button
                  onClick={closeMobileMenu}
                  className="w-full bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
}
