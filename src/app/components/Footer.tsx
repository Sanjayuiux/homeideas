import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <img src="/assets/images/logo.svg" className='w-[200px] lg:w-[330px]' alt="" />
                <p className="text-gray-600">
                  Innovating the future of business with smart technology solutions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#about" className="hover:text-gray-900">About</a></li>
                  <li><a href="#services" className="hover:text-gray-900">Services</a></li>
                  <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                  <li><a href="#" className="hover:text-gray-900">Documentation</a></li>
                  <li><a href="#" className="hover:text-gray-900">Support</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
                  <li><a href="#" className="hover:text-gray-900">Terms</a></li>
                  <li><a href="#" className="hover:text-gray-900">Cookies</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
              <p>&copy; 2024 Home Ideas. All rights reserved.</p>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer