import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b
               border-gray-100 transition-all duration-700
               ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="/assets/images/logo.svg" alt="Home Ideas Logo" className='w-[120px] sm:w-[150px]' />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              <a href="/about-us" className="text-gray-600 hover:text-gray-900 transition-colors">About </a>
              <a href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">Products</a>
              <a href="/contact-us" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
            
            {/* Desktop Get Started Button */}
            <div className="hidden md:block">
              <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
            
            {/* Mobile Hamburger Menu Button */}
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
        
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-100">
              <a 
                href="/" 
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                Home
              </a>
              <a 
                href="/about-us" 
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                About Us
              </a>
              <a 
                href="/products" 
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                Products 
              </a>
              <a 
                href="/contact-us" 
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                Contact Us
              </a>
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