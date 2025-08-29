'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, Play, Star, Users, Zap, Shield,
   Smartphone, Code, Database, Globe, Cloud, Cpu, Target, BarChart3, Lightbulb, TrendingUp } from 'lucide-react'
import Navigation from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'

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
        <section className="pt-24 pb-16 bg-[url('/assets/images/homeideas_bg.jpg')] bg-cover bg-center">
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
        <section className="py-20" id="about">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Left content (first on mobile, left on desktop) */}
      <div className="space-y-6 order-1 lg:order-1 text-center md:text-center lg:text-left flex flex-col items-center lg:items-start">
        <div className="relative inline-block">
          <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900">
            Who We Are
          </h2>
        </div>

        <p className="text-gray-600 leading-relaxed max-w-2xl">
          Home Ideas Technologies is a Bangalore-based innovation company transforming the home and furnishing industry with AI-powered visualization tools, digital marketplaces, and professional networking platforms. Our mission is to bridge the gap between end customers, shop owners, and professionals by providing smart software solutions that make designing, sourcing, and executing home projects easier, faster, and more transparent.
        </p>
      </div>

      {/* Right image (below text on mobile, right on desktop) */}
      <div className="relative order-2 lg:order-2 h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden rounded-[20px] flex justify-center lg:justify-end">
        <img
          src="/assets/images/about_us/about_us_1.png"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover object-top rounded-[20px]"
        />
      </div>
    </div>
  </div>
</section>



        
        {/* Our vision */}
        <section className="pt-6 py-20 lg:py-20 " id="about">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Text content (first on mobile, right on desktop) */}
      <div className="space-y-6 order-1 lg:order-2 text-center md:text-center lg:text-left flex flex-col items-center lg:items-start">
        <div className="relative inline-block">
          <h2 className="relative z-10 text-4xl md:text-5xl font-bold text-gray-900">
            Our Vision
          </h2>
        </div>

        <p className="text-gray-600 leading-relaxed max-w-2xl">
          We aim to become the world’s most comprehensive digital platform for the home industry, uniting millions of shop owners, professionals, and customers under one ecosystem. By combining SaaS tools, AI innovation, and lead generation, we empower small and medium businesses to compete in the digital era—while giving customers the confidence to “See Before You Buy.”
        </p>
      </div>

      {/* Image (below text on mobile, left on desktop) */}
      <div className="relative order-2 lg:order-1 overflow-hidden rounded-[20px] flex justify-center lg:justify-start h-[300px] md:h-[400px] lg:h-[450px]">
        <img
          src="/assets/images/about_us/about_us_2.jpg"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover object-center rounded-[20px]"
        />
      </div>
    </div>
  </div>
</section>


        {/* Innovation Section */}
        <section className="py-20 bg-[url('/assets/images/homeideas_bg.jpg')] bg-cover bg-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Content first on mobile, left-aligned on desktop */}
      <div className="order-1 lg:order-1 space-y-6 text-center lg:text-left">
        {/* Heading */}
        <div className="relative inline-block">
          <span className="relative z-10 text-[32px] md:text-[40px] font-semibold text-gray-900">
            Our Ecosystem
          </span>
        </div>

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

      {/* Image second on mobile, left on desktop */}
      <div className="order-2 lg:order-2 relative flex justify-center">
        <img 
          src="/assets/images/Innovate.jpg" 
          className="rounded-tl-[40px] rounded-br-[40px] w-full max-w-md lg:max-w-full" 
          alt="Innovate"
        />
      </div>
    </div>
  </div>
</section>

        

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
      description:
        "HomeIdeas.in connects customers with local vendors,making home project sourcing seamless",
    },
    {
      title: "Professional Bay: Your Portfolio and Networking Hub",
      image: "/assets/images/b2.jpg",
      description:
        "Showcase your work, connect with clients, and access powerful AI tools",
    },
    {
      title: "Unlock Opportunities with Our Comprehensive Vendor Network",
      image: "/assets/images/b3.jpg",
      description:
        "Collaborate with local vendors and expand your business reach effortlessly.",
    },
  ].map((item, index) => (
    <div key={index} className="group h-full">
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full">
        <div className="w-full h-48 md:h-fit  rounded-xl flex items-center justify-center mb-6">
          <img src={item.image} alt={item.title} className="rounded-xl" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">{item.description}</p>
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
                icon: Lightbulb,
                description: "We leverage AI driven tools to tackle real Industry challenges"
              },
              {
                title: "Empowering Businesses: Leveling the Playing Field",
                icon: TrendingUp,
                description: "Our solutions provide equal digital opportunities for all professionals"
              },
              {
                title: "Customer-Centric: Building Trust and Transparency",
                icon: Users,
                description: "We prioritize customer needs to enhance their experience."
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="group text-center">
          <div className="bg-white rounded-2xl p-6 transition-all duration-300">
            {/* Small colored icon box */}
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 mb-4">
              <IconComponent size={24} className="text-orange-500" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        </div>

              );
            })}
          </div>
          {/* <div className="flex gap-4 justify-center items-center mt-6">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Discover
            </button>
            <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 transition-colors">
              Join 
            </button>
          </div> */}
        </section>
        
        {/* CTA Section */}
        <section className="py-20 " id='contact'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-black">
                    Join the Future of Home Tech
                  </h2>
                  <p className="text-xl text-black/40">
                    Ready to transform your business with our innovative solutions? Get started today and experience the difference.
                  </p>
                  <div className="flex gap-4">
                    <Link 
                    href="/contact-us"
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                      Contact Us
                    </Link>
                    {/* <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 transition-colors">
                      Contact Us
                    </button> */}
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