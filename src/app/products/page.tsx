'use client'
import React, { useState, useEffect } from 'react';
import { ChevronRight, Download, Play, Users, Database, Globe, Shield, Code, Smartphone, BarChart3, Target, ArrowRight, Check, Star } from 'lucide-react';
import Navigation from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link'

const ProductsPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      id: 'hit-furnish',
      title: 'HIT FURNISH™',
      subtitle: 'Your Project Management Partner',
      description: 'Manage client interactions and project workflows seamlessly with HIT FURNISH™.',
      icon: Code,
      color: 'bg-blue-500',
      status: 'Learn More',
      features: ['Manage tasks and client interactions seamlessly', 'Enhance collaboration with real-time updates and notifications', 'Start your journey to better project management today'],
      image: '/assets/images/hit-furnish.jpg'
    },
    {
      id: 'hit-furniture',
      title: 'HIT FURNITURE™',
      subtitle: 'Coming Soon for Design Professionals',
      description: 'Shaping ideas as seamlessly as furniture has a room – HIT FURNITURE™.',
      icon: Database,
      color: 'bg-green-500',
      status: 'Coming Soon',
      features: ['Design Simplified', 'Visualize your designs and collaborate effortlessly with clients in real-time', 'Stay tuned for the launch and elevate your design experience'],
      image: '/assets/images/hit-furniture.jpg'
    },
    {
      id: 'hit-flooring',
      title: 'HIT FLOORING™',
      subtitle: 'Smart Management for Engineers',
      description: 'From the ground up, manage progress and compliance with HIT FLOORING™.',
      icon: Shield,
      color: 'bg-orange-500',
      status: 'Coming Soon',
      features: ['Smart floor management solutions', 'Progress tracking and compliance monitoring', 'Engineering-focused workflow optimization'],
      image: '/assets/images/hit-flooring.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-[!Manrope] overflow-x-hidden">
      <Navigation/>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-[url('/assets/images/homeideas_bg.jpg')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`font-bold text-gray-900 mb-6 transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
              <span className="block text-[44px] leading-tight">
                Explore Our Innovative Solutions for
              </span>
              <span className="block text-[50px] leading-tight text-[#B59F0E]">
                Design and Engineering Professionals
              </span>
            </h1>
            <p className={`text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              Discover our comprehensive suite of applications designed specifically for architects, engineers, and design professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Products Overview Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={product.id} className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: `${index * 200}ms` }}>
                <div className={`w-12 h-12 ${product.color} rounded-xl flex items-center justify-center mb-4`}>
                  <product.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <h4 className="text-lg font-semibold text-gray-700 mb-3">{product.subtitle}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                {/* <button className={`${
                  product.status === 'Learn More' 
                    ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white' 
                    : 'bg-gray-100 text-gray-600'
                } px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-md flex items-center`}>
                  {product.status}
                  {product.status === 'Learn More' && <ChevronRight className="ml-2 w-4 h-4" />}
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product - HIT FURNISH */}
      <section className="py-20 bg-[url('/assets/images/homeideas_bg.jpg')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                Innovative
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Introducing HIT FURNISH™: Your Project Management Solution
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                HIT FURNISH™ is a powerful CRM designed specifically for engineers, architects, and designers. Streamline your client communications and project workflows effortlessly.
              </p>
              
              <div className="space-y-4">
                {products[0].features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Link
                href="/contact-us" 
                className="bg-gradient-to-r flex justify-center items-center from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  Get Started
                </Link>
                <Link
                href="https://play.google.com/store/apps/details?id=com.homeideastechnologies.hitfurnish" 
                target='_blank'
                className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 transition-colors flex items-center">
                  Download <Download className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="relative">
            <div className="w-full h-96 rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="/assets/images/products/product_1.png"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          </div>
        </div>
      </section>

      {/* Coming Soon Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Coming Soon Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay tuned for our upcoming innovative solutions that will revolutionize your workflow.
            </p>
          </div>

          <div className="space-y-20">
            {/* HIT FURNITURE */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="w-full h-96 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img
                      src="/assets/images/products/product_3.jpg"
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                  Innovative
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Introducing HIT FURNITURE™: Design Made Easy
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  HIT FURNITURE™ is an innovative app tailored for architects and interior designers. It streamlines the design process, enabling seamless collaboration and presentation of ideas.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900">Design Simplified</h4>
                    <p className="text-gray-600 text-sm">Visualize your designs and collaborate effortlessly with clients in real-time.</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900">Coming Soon</h4>
                    <p className="text-gray-600 text-sm">Stay tuned for the launch and elevate your design experience.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="bg-gray-100 text-gray-600 px-6 py-3 rounded-full font-semibold">
                    Coming Soon
                  </button>
                  {/* <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 transition-colors flex items-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button> */}
                </div>
              </div>
            </div>

            {/* Homeideas CRM */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                  Innovative
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Discover Homeideas CRM™ for Your Business
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Homeideas CRM™ is a powerful solution specifically designed for engineering and design firms. It streamlines project management, enhances client communication, and keeps deadlines on track.
                </p>

                <div className="flex gap-4">
                  {/* <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 transition-colors">
                    Get Started
                  </button> */}
                  <button className="bg-gray-100 text-gray-600 px-6 py-3 rounded-full font-semibold">
                    Coming Soon
                  </button>
                  {/* <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </button> */}
                </div>
              </div>

                <div className="relative">
                  <div className="w-full h-96 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img
                      src="/assets/images/products/product_2.jpg"
                      alt="Product"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-black/40 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who trust HomeIdeas Technology for their business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
              href="/contact-us"
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Contact Us 
              </Link>
              {/* <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 transition-colors">
                Contact Sales
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ProductsPage;