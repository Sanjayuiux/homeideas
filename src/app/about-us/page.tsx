'use client'

import { useState, useEffect } from 'react'
import Head from 'next/head'
import { ChevronRight, Play, Star, Users, Zap, Shield,
   Smartphone, Code, Database, Globe, Cloud, Cpu, Target, BarChart3 } from 'lucide-react'
import Navigation from '../components/Nav'
import Footer from '../components/Footer'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const orbitingIcons = [
      // Inner orbit - 4 icons at cardinal positions (0°, 90°, 180°, 270°)
      { icon: Code, color: 'bg-green-500', position: 'inner', angle: 0 },     // Top
      { icon: Database, color: 'bg-blue-500', position: 'inner', angle: 90 },  // Right
      { icon: Shield, color: 'bg-red-400', position: 'inner', angle: 180 },   // Bottom
      { icon: Globe, color: 'bg-blue-400', position: 'inner', angle: 270 },   // Left
      
      // Outer orbit - 5 icons at plus positions (45°, 135°, 225°, 315°) + one extra
      { icon: Users, color: 'bg-orange-400', position: 'outer', angle: 45 },
      { icon: BarChart3, color: 'bg-red-500', position: 'outer', angle: 135 },
      { icon: Target, color: 'bg-green-400', position: 'outer', angle: 225 },
      { icon: Smartphone, color: 'bg-orange-500', position: 'outer', angle: 315 },
      { icon: Play, color: 'bg-blue-400', position: 'outer', angle: 0 }  // Extra icon
    ];
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <div className="min-h-screen bg-white font-[!Manrope] overflow-x-hidden">
        {/* Navigation */}
        <Navigation/>

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
                  About Home Ideas Technologies
                </span>
                {/* <span className="block text-[62px] leading-tight text-[#B59F0E]">
                  Home Tech Apps
                </span> */}
              </h1>
              <p className={`text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                Transforming the home and furnishing industry with AI-powered visualization tools, digital marketplaces, and professional networking platforms.
              </p>
              {/* <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center">
                  Get Started Today
                  <ChevronRight className="ml-2 w-5 h-5" />
                </button>
                <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 transition-colors">
                  Watch Demo
                </button>
              </div> */}
            </div>
          </div>
        </section>

        {/* Who we are */}
        <section className="py-20" id='about'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="relative inline-block">
                  <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900">
                    Who We Are
                  </h2>
                  {/* underline brush vector
                  <img
                    src="/assets/icons/underline.svg"
                    alt="underline"
                    className="absolute -bottom-4 left-0 w-[220px] md:w-[260px] -z-0"
                    // style={{ filter: 'brightness(0) saturate(100%) invert(92%) sepia(30%) saturate(633%) hue-rotate(358deg) brightness(103%) contrast(104%)' }}
                  /> */}
                </div>

                {/* <h3 className="text-2xl font-semibold text-gray-700">
                  Who We Are: Innovators in Digital Solutions for Design and Construction
                </h3> */}
                <p className="text-gray-600 leading-relaxed">
                  Home Ideas Technologies is a Bangalore-based innovation company transforming the home and furnishing industry with AI-powered visualization tools, digital marketplaces, and professional networking platforms. Our mission is to bridge the gap between end customers, shop owners, and professionals by providing smart software solutions that make designing, sourcing, and executing home projects easier, faster, and more transparent.
                </p>
              </div>

              <div className="relative">
                <img src="/assets/images/About_us.jpg" alt="About Us" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our vision */}
        <section className="py-20" id='about'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                <img src="/assets/images/About_us.jpg" alt="About Us" />
              </div>
              <div className="space-y-6">
                <div className="relative inline-block">
                  <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900">
                    Our Vision
                  </h2>
                  {/* underline brush vector
                  <img
                    src="/assets/icons/underline.svg"
                    alt="underline"
                    className="absolute -bottom-4 left-0 w-[220px] md:w-[260px] -z-0"
                    // style={{ filter: 'brightness(0) saturate(100%) invert(92%) sepia(30%) saturate(633%) hue-rotate(358deg) brightness(103%) contrast(104%)' }}
                  /> */}
                </div>

                {/* <h3 className="text-2xl font-semibold text-gray-700">
                  Who We Are: Innovators in Digital Solutions for Design and Construction
                </h3> */}
                <p className="text-gray-600 leading-relaxed">
                  We aim to become the world’s most comprehensive digital platform for the home industry, uniting millions of shop owners, professionals, and customers under one ecosystem. By combining SaaS tools, AI innovation, and lead generation, we empower small and medium businesses to compete in the digital era—while giving customers the confidence to “See Before You Buy.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Section */}
        <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img src="/assets/images/Innovate.jpg" />
              </div>
              <div className="space-y-6">
                {/* Innovate heading with underline */}
                <div className="relative inline-block">
                  <span className="relative z-10 text-[40px] font-semibold text-gray-900">
                    Our Ecosystem
                  </span>
                  {/* <img
                    src="/assets/icons/underline.svg"
                    alt="underline"
                    className="absolute -bottom-2 left-0 w-[120px] -z-0"
                  /> */}
                </div>

                {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Transforming Workflows with Innovative Applications
                </h2> */}
                <p className="text-gray-600 leading-relaxed">
                  We operate through a suite of specialized products and platforms that work seamlessly together:
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Hit Furnish – The world’s first AI curtain & furnishing visualizer that lets shop owners and customers preview fabrics, wallpapers, blinds, and flooring in real room photos.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Hit Flooring, Hit Furniture, Hit Lights, Hit Windows & Doors, Hit Security Systems – A growing suite of apps built to empower shop owners across categories with software + lead generation tools.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Each Hit app gives vendors digital catalogs, customer engagement tools, and AI visualizers—helping them modernize their business while staying connected to local buyers.
                </p>
              </div>
            </div>
          </div>
        </section>
        
    
        {/* <section className="py-20" id='about'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="">
              <div className="space-y-6">
                <div className="relative inline-block">
                  <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900">
                    HomeIdeas.in
                  </h2>
                  underline brush vector
                  <img
                    src="/assets/icons/underline.svg"
                    alt="underline"
                    className="absolute -bottom-4 left-0 w-[220px] md:w-[260px] -z-0"
                    // style={{ filter: 'brightness(0) saturate(100%) invert(92%) sepia(30%) saturate(633%) hue-rotate(358deg) brightness(103%) contrast(104%)' }}
                  />
                </div>
                      
                <p className="text-gray-600 leading-relaxed">
                  Our flagship marketplace that connects end customers with local vendors, manufacturers, and suppliers in furnishing, furniture, flooring, lighting, and more.
                </p>
                <div className="space-y-4">
                {[
                  "Video-first platform (like Instagram for the home industry)",
                  "City-based vendor chapters to help customers discover local shops",
                  "New arrivals, clearance sales, and discounts from trusted vendors",
                  "Lead generation system that turns online browsing into real business"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
              </div>

            </div>
          </div>
        </section> */}
                  
        {/* <section className="py-20" id='about'>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="">
              <div className="space-y-6">
                <div className="relative inline-block">
                  <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900">
                    Professionals App (Professional Bay)
                  </h2>
                  underline brush vector
                  <img
                    src="/assets/icons/underline.svg"
                    alt="underline"
                    className="absolute -bottom-4 left-0 w-[220px] md:w-[260px] -z-0"
                    // style={{ filter: 'brightness(0) saturate(100%) invert(92%) sepia(30%) saturate(633%) hue-rotate(358deg) brightness(103%) contrast(104%)' }}
                  />
                </div>
                      
                <p className="text-gray-600 leading-relaxed">
                  A dedicated app for architects, interior designers, engineers, and builders, enabling them to:
                </p>
                <div className="space-y-4">
                {[
                  "Video-first platform (like Instagram for the home industry)",
                  "Discover and source materials and vendors quickly.",
                  "Access AI-powered tools for design and visualization.",
                  "Get qualified leads directly from end customers."
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">{feature}</p>
                  </div>
                ))}
              </div>
              </div>

            </div>
          </div>
        </section> */}

        <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <div className="relative inline-block">
                <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900 mb-4 inline-block">
                Explore Our Innovative Homeldeas.in Marketplace and Professionals App
                </h2>
                {/* <img
                src="/assets/icons/underline.svg"
                alt="underline"
                className="absolute top-full left-0 w-full mt-1 z-0"
                /> */}
            </div>
            </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
            {
                title: "Empowering Professionals with the Professional Bay App",
                image: "/assets/images/b1.jpg",
                description: "HomeIdeas.in connects customers with local vendors,making home project sourcing seamless"
            },
            {
                title: "Professional Bay: Your Portfolio and Networking Hub",
                image: "/assets/images/b2.jpg",
                description: "Showcase your work, connect with clients, and access powerful AI tools"
            },
            {
                title: "Unlock Opportunities with Our Comprehensive Vendor Network",
                image: "/assets/images/b3.jpg",
                description: "Collaborate with local vendors and expand your business reach effortlessly."
            }
            ].map((item, index) => (
            <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-full h-48 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                    <img src={item.image} alt={item.title}/>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                    {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                </div>
            </div>
            ))}
        </div>
        </section>

        <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <div className="relative inline-block">
                <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900 mb-4 inline-block">
                Our Values
                </h2>
                {/* <img
                src="/assets/icons/underline.svg"
                alt="underline"
                className="absolute top-full left-0 w-full mt-1 z-0"
                /> */}
            </div>
            </div>

            <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            At Home Ideas Technologies, we believe in innovation as the cornerstone of our solutions. Our commitment to empowering businesses and fostering community growth shapes everything we do
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
            {
                title: "Innovation First: Our Driving Force",
                image: "/assets/images/b1.jpg",
                description: "We leverage AI driven tools to tackle real Industry challenges"
            },
            {
                title: "Empowering Businesses: Leveling the Playing Field",
                image: "/assets/images/b2.jpg",
                description: "Our solutions provide equal digital opportunities for all professionals"
            },
            {
                title: "Customer-Centric: Building Trust and Transparency",
                image: "/assets/images/b3.jpg",
                description: "We prioritize customer needs to enhance their experience."
            }
            ].map((item, index) => (
            <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-full h-48 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                    <img src={item.image} alt={item.title}/>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
                    {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                </div>
            </div>
            ))}
        </div>
        <div className="flex gap-4 justify-center items-center mt-6">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Discover
            </button>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 transition-colors">
            Join 
            </button>
        </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800" id='contact'>
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

        <Footer/>
      </div>
    </>
  )
}