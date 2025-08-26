'use client'
import { useState, useEffect } from 'react'
import { Shield, FileText, CreditCard, Users, Globe, Lock, AlertTriangle, Mail, Phone, MapPin } from 'lucide-react'
import Navigation from '../components/Nav'
import Footer from '../components/Footer'

export default function TermsConditionsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const termsSections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: "By registering an account, subscribing, or using the services of Home Ideas Technologies (\"we,\" \"us,\" or \"our\"), you agree to these Terms of Service (\"Terms\"). If you do not agree, you may not use our Services."
    },
    {
      icon: Globe,
      title: "Our Services",
      content: "Home Ideas Technologies provides cloud-based software solutions (\"Services\") through our platform. We may update or improve features over time."
    },
    {
      icon: Users,
      title: "Accounts & Responsibilities",
      content: "When creating an account with us, you must comply with the following requirements:",
      list: [
        "You must provide accurate information when creating an account",
        "You are responsible for maintaining the confidentiality of your login details",
        "You are responsible for all activity under your account"
      ]
    },
    {
      icon: CreditCard,
      title: "Subscriptions & Payments",
      content: "Our billing and payment terms are as follows:",
      list: [
        "Some Services require a paid subscription",
        "By subscribing, you agree to pay the applicable fees as per our pricing",
        "Fees are billed in advance and are non-refundable, unless required by law",
        "We may update our pricing with reasonable prior notice"
      ]
    },
    {
      icon: Shield,
      title: "Acceptable Use",
      content: "You agree not to engage in the following activities:",
      list: [
        "Use the Services for unlawful, fraudulent, or harmful purposes",
        "Attempt to hack, disrupt, or reverse-engineer our software",
        "Resell or sublicense the Services without written consent"
      ],
      note: "We may suspend or terminate accounts that violate these rules."
    },
    {
      icon: Lock,
      title: "Intellectual Property",
      content: "All content, software, and trademarks belong to Home Ideas Technologies. You are granted a limited, non-exclusive, non-transferable license to use the Services for your business or personal use."
    }
  ]

  const additionalSections = [
    {
      title: "Availability & Support",
      content: "We aim to provide reliable service but do not guarantee 100% uptime. Planned maintenance or unforeseen technical issues may cause downtime.",
      list: [
        "Support is available via [insert support email/channel]",
        "We strive to respond to support requests promptly",
        "Maintenance windows will be communicated in advance when possible"
      ]
    },
    {
      title: "Data & Privacy",
      content: "Your data ownership and privacy are important to us:",
      list: [
        "You own your data",
        "By using our Services, you grant us a license to process your data solely to provide the Services",
        "Your use of the Services is also subject to our Privacy Policy"
      ]
    },
    {
      title: "Termination",
      content: "Either party may terminate the service agreement:",
      list: [
        "You may cancel your subscription or account at any time",
        "We may suspend or terminate your access if you breach these Terms or fail to pay fees",
        "Upon termination, your access to Services and stored data may be restricted"
      ]
    },
    {
      title: "Disclaimers & Limitation of Liability",
      content: "Our Services are provided \"as is\" without warranties of any kind. We are not liable for indirect, incidental, or consequential damages. Our maximum liability to you will not exceed the amount you paid in the last 3 months."
    },
    {
      title: "Changes to Terms",
      content: "We may update these Terms of Service from time to time. Continued use of the Services means you accept the updated Terms."
    },
    {
      title: "Governing Law",
      content: "These Terms are governed by the laws of [Insert Country/State]. Any disputes will be handled in the courts of [Insert Location]."
    }
  ]

  return (
    <div className="min-h-screen bg-white font-[!Manrope] overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

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
                Terms of Service
              </span>
              <span className="block text-[32px] leading-tight text-[#B59F0E]">
                Your Agreement with Us
              </span>
            </h1>
            <p className={`text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              These terms govern your use of our cloud-based software solutions and define our mutual responsibilities.
            </p>
            <span className="text-gray-700 font-semibold">Effective Date: January 1, 2024</span>
          </div>
        </div>
      </section>

      {/* Main Terms Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {termsSections.map((section, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">{section.content}</p>
                    {section.list && (
                      <ul className="space-y-2">
                        {section.list.map((item, listIndex) => (
                          <li key={listIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.note && (
                      <div className="mt-4 p-3 bg-orange-50 rounded-lg border-l-3 border-orange-400">
                        <p className="text-gray-700 text-sm font-medium">{section.note}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {additionalSections.map((section, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-3">{section.content}</p>
                {section.list && (
                  <ul className="space-y-2">
                    {section.list.map((item, listIndex) => (
                      <li key={listIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-orange-400">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Important Notice</h3>
                <p className="text-gray-600 leading-relaxed">
                  Please read these terms carefully before using our services. By continuing to use Home Ideas Technologies' 
                  services, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. 
                  If you have any questions or concerns, please contact our legal team before proceeding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[url('/assets/images/homeideas_bg.jpg')] bg-cover bg-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <h2 className="relative z-10 text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <div className="w-16 h-1 bg-orange-400 mx-auto"></div>
            </div>
            <p className="text-xl text-gray-600 mt-4">
              Have questions about these Terms & Conditions? We're here to help.
            </p>
          </div>

          <a href="mailto:support@homeideastech.com" target='_blank'>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Mail className="w-8 h-8 text-orange-500 mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
                  <p className="text-gray-600">For terms-related inquiries</p>
                </div>
              </div>
              <a href="mailto:support@homeideastech.com" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                support@homeideastech.com
              </a>
            </div>

            <a href="tel:+919843044456">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Phone className="w-8 h-8 text-orange-500 mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
                  <p className="text-gray-600">Speak with our support team</p>
                </div>
              </div>
              <a href="tel:+919843044456" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                +91 98430 44456
              </a>
            </div>
            </a>
          </div>
          </a>

          <a href="https://maps.app.goo.gl/JU9XXXdJoKhLH2N76" target='_blank'>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <MapPin className="w-8 h-8 text-orange-500 mr-3" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Address</h3>
                <p className="text-gray-600">For legal correspondence</p>
              </div>
            </div>
            <address className="text-gray-600 not-italic">
              Home Ideas Technologies<br />
              102, 20, Eden Park, Vittal Mallya Rd, KG Halli, D' Souza Layout,<br />
               Ashok Nagar, Bengaluru, Karnataka - 560001,<br />
              India
            </address>
          </div>
          </a>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Support?</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you need clarification on any terms or have questions about using our services, 
                our support team is available to assist you. We're committed to transparency and providing excellent service.
              </p>
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Contact Support Team
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}