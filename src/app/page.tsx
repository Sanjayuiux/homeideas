'use client'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import { ChevronRight, Play, Star, Users, Zap, Shield, Smartphone, Code, Database } from 'lucide-react'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      
      <div className="min-h-screen bg-white font-[!Manrope] overflow-x-hidden">
        {/* Navigation */}
        <nav className={`fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b
           border-gray-100 transition-all duration-700 px-[180px]
           ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <img src="/assets/images/homeideas_logo.jpg" alt="" className='w-[150px]' />
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Services</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
              </div>
              <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1
                className={`font-bold text-gray-900 mb-6 transition-all duration-1000 delay-300 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
              >
                <span className="block text-[50px] leading-tight">
                  Innovating the Future of Business with Smart
                </span>
                <span className="block text-[62px] leading-tight text-[#B59F0E]">
                  Home Tech Apps
                </span>
              </h1>
              <p className={`text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                Unlock business potential with cutting-edge solutions that are designed to make your workflow smarter, faster, and more efficient than ever before.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center">
                  Get Started Today
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="relative inline-block">
                  <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900">
                    About Us
                  </h2>
                  {/* underline brush vector */}
                  <img
                    src="/assets/images/underline-brush.png"
                    alt="underline"
                    className="absolute -bottom-2 left-0 w-[220px] md:w-[260px] -z-0"
                    style={{ filter: 'brightness(0) saturate(100%) invert(92%) sepia(30%) saturate(633%) hue-rotate(358deg) brightness(103%) contrast(104%)' }}
                  />
                </div>

                <h3 className="text-2xl font-semibold text-gray-700">
                  Who We Are: Innovators in Digital Solutions for Design and Construction
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We are a team of passionate innovators dedicated to revolutionizing the way businesses operate through cutting-edge technology solutions. Our expertise spans across digital transformation, smart applications, and innovative workflow optimization.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With years of experience in the industry, we understand the challenges modern businesses face and have developed comprehensive solutions that drive real results.
                </p>
              </div>

              <div className="relative">
                <img src="/assets/images/About_us.jpg" alt="About Us" />
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img src='/assets/images/Innovate.jpg'/>
              </div>
              <div className="space-y-6">
                <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Innovate
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Transforming Workflows with Innovative Applications
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our innovative applications are designed to streamline your business processes, increase productivity, and drive growth. Experience the future of business management today.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  From project management to customer relations, our solutions integrate seamlessly with your existing workflows while providing advanced features that set you apart from the competition.
                </p>
                <div className="flex gap-4">
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Learn More
                  </button>
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 transition-colors">
                    View Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We Do</h2>
              <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                Empowering Professionals with Innovative, Scalable Technology Solutions
              </h3>
            </div>
            
            <div className="relative">
              {/* Central Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="w-12 h-12 text-white" />
                </div>
              </div>
              
              {/* Floating Icons */}
              <div className="relative h-96">
                {[
                  { icon: Users, color: 'bg-blue-500', position: 'top-0 left-1/4' },
                  { icon: Code, color: 'bg-green-500', position: 'top-0 right-1/4' },
                  { icon: Shield, color: 'bg-purple-500', position: 'top-1/2 left-0' },
                  { icon: Database, color: 'bg-red-500', position: 'top-1/2 right-0' },
                  { icon: Smartphone, color: 'bg-indigo-500', position: 'bottom-0 left-1/3' },
                  { icon: Play, color: 'bg-pink-500', position: 'bottom-0 right-1/3' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`absolute w-16 h-16 ${item.color} rounded-full flex items-center justify-center ${item.position} animate-pulse`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Smart Solutions Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Smart Solutions, Real Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Why Professionals Choose HomeIdeas for Their Business Solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Experience Seamless Integration of Technology in Your Workflow",
                  image: "/assets/images/b1.jpg",
                  description: "Streamline your processes with our cutting-edge solutions."
                },
                {
                  title: "Harness Advanced Responsive Technology for Your Business",
                  image: "/assets/images/b2.jpg",
                  description: "Mobile-first approach ensuring accessibility everywhere."
                },
                {
                  title: "Future-Ready Technology That Grows with Your Business",
                  image: "/assets/images/b3.jpg",
                  description: "Scalable solutions designed for sustainable growth."
                }
              ].map((item, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-full h-48 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                      <img src={`${item.image}`}/>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhance Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Enhance</h2>
              <h3 className="text-2xl font-semibold text-gray-700">
                Smarter Tools for Industry Professionals
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "/assets/icons/App_icon.svg",
                  title: "Engineering and Projects",
                  subtitle: "without Cutting-Edge Solutions Applications",
                  color: "bg-orange-500"
                },
                {
                  icon: "/assets/icons/mobile.svg",
                  title: "Our Comprehensive Apps",
                  subtitle: "Combined with Design and Control and Innovation",
                  color: "bg-purple-500"
                },
                {
                  icon: "/assets/icons/dropbox.svg",
                  title: "Unmatched Apps to Increase Your Digital Transformation and Efficiency",
                  subtitle: "",
                  color: "bg-blue-500"
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className={`flex items-center justify-center mx-auto mb-4`}>
                    <img src={item.icon} alt="" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  {item.subtitle && <p className="text-gray-600">{item.subtitle}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">

                <img src='/assets/images/testimonial.jpg'/>
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">Testimonials</h2>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 leading-relaxed">
                  "HomeIdeas Technology has transformed the way we approach our projects. Their innovative solutions have streamlined our processes and significantly improved our efficiency."
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-gray-600">CEO, TechCorp Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Join the Future of Home Tech
                </h2>
                <p className="text-xl text-gray-300">
                  Ready to transform your business with our innovative solutions? Get started today and experience the difference.
                </p>
                <div className="flex gap-4">
                  <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Get Started
                  </button>
                  <button className="bg-transparent text-white px-8 py-4 rounded-full font-semibold border-2 border-white hover:bg-white hover:text-gray-900 transition-colors">
                    Contact Us
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full object-cover h-full bg-gray-700 rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">
                    <img src='/assets/images/cta.jpg' className='rounded-[18px]'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <img src="/assets/images/homeideas_logo.jpg" className='w-[200px] lg:w-[330px]' alt="" />
                <p className="text-gray-600">
                  Innovating the future of business with smart technology solutions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-gray-900">About</a></li>
                  <li><a href="#" className="hover:text-gray-900">Services</a></li>
                  <li><a href="#" className="hover:text-gray-900">Contact</a></li>
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
      </div>
    </>
  )
}