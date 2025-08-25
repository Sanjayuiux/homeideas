'use client'
import { motion } from "framer-motion";
import Head from "next/head";

// Placeholder images
const placeholder =
  "https://via.placeholder.com/600x400.png?text=Image+Placeholder";

export default function HomeIdeas() {
  return (
    <>
      <Head>
        <title>Home Ideas | Smart Tech for Construction</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="font-manrope text-gray-800 bg-gradient-to-b from-yellow-50 to-white min-h-screen">
        {/* Header */}
        <header className="px-4 sm:px-8 py-4 flex justify-between items-center bg-white shadow-sm">
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <span className="font-extrabold text-xl text-yellow-500">HOME IDEAS</span>
          </motion.div>
          <nav className="hidden sm:flex space-x-8 font-semibold text-sm">
            <a href="#home" className="hover:text-yellow-500 transition">Home</a>
            <a href="#apps" className="hover:text-yellow-500 transition">Apps</a>
            <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
          </nav>
          <motion.button
            whileHover={{ scale: 1.08 }}
            className="bg-yellow-400 text-white px-5 py-2 rounded shadow-md font-medium hover:bg-yellow-500 transition ml-4"
          >
            Get Started
          </motion.button>
        </header>

        {/* Hero Section */}
        <section className="relative z-0 flex flex-col items-center text-center py-16 px-4 bg-gradient-to-tr from-yellow-100 to-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-5xl font-bold leading-tight mb-3"
          >
            Innovating the Future of <br />
            Business with Smart
            <span className="block text-yellow-500 mt-2">Home Tech Apps</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="text-base sm:text-lg text-gray-700 mb-5 max-w-xl"
          >
            We simplify processes for architects, engineers, and interior designers, enabling them to focus on creativity and efficiency with cutting-edge digital solutions.
          </motion.p>
          <div className="flex space-x-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-yellow-500 text-white px-8 py-2 rounded font-semibold shadow-lg"
            >
              Explore the App
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 text-gray-700 px-8 py-2 rounded font-semibold border border-gray-200 shadow"
            >
              Get In Touch
            </motion.button>
          </div>
        </section>


        {/* About Us Section */}
        <section className="py-12 px-4 sm:px-12 grid md:grid-cols-2 gap-10 items-center bg-white" id="about">
          <div>
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-yellow-500 font-bold text-lg mb-2"
            >
              About Us
            </motion.h3>
            <h2 className="text-2xl font-semibold mb-2">
              Who We Are: Innovators in Digital Solutions for Design and Construction
            </h2>
            <p className="text-gray-600">
              HomeIdeas Technologies empowers professionals to achieve new productivity and design heights. By harnessing the power of mobile and cloud solutions, we make teamwork, project management, and design iteration seamless, efficient, and modern.
            </p>
          </div>
          <motion.img
            src={placeholder}
            alt="About Illustration"
            className="rounded-xl w-full shadow-lg object-cover"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            viewport={{ once: true }}
          />
        </section>

        {/* Innovate Section */}
        <section className="py-12 px-4 sm:px-12 bg-yellow-50 rounded-xl mx-2 sm:mx-8 my-6">
          <div className="flex flex-col md:flex-row items-center md:space-x-10">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex-1 mb-6 md:mb-0"
            >
              <img
                src={placeholder}
                alt="Mobile App Illustration"
                className="rounded-xl w-full shadow-md object-cover"
              />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-yellow-500 font-bold text-lg mb-2">Innovate</h3>
              <h2 className="text-2xl font-semibold mb-3">
                Transforming Workflows <br /> with Innovative Applications
              </h2>
              <p className="text-gray-700 mb-3">
                We empower professionals with top-quality applications to streamline daily operations, reduce delays, and improve collaboration. Our solutions are built for scalability, adaptability, and user delight.
              </p>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-yellow-500 text-white px-6 py-2 rounded font-semibold"
                >
                  Explore Our Apps
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-100 text-gray-800 px-6 py-2 rounded font-semibold border border-gray-200"
                >
                  Get in Touch
                </motion.button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-12 px-4 sm:px-12 grid md:grid-cols-2 gap-10 items-center" id="whatwedo">
          <div>
            <h3 className="text-yellow-500 font-bold text-lg mb-2">What We Do</h3>
            <h2 className="text-2xl font-semibold mb-2">
              Empowering Professionals with Innovative, Scalable Solutions for the Future
            </h2>
            <p className="text-gray-600">
              Our technology integrates effortlessly into professional workflows, saving time and fostering creativity through automation, seamless communication, and data-driven insights.
            </p>
          </div>
          <motion.img
            src={placeholder}
            alt="What We Do Illustration"
            className="w-full max-w-xs mx-auto md:mx-0 rounded-full"
            initial={{ rotate: -10, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            viewport={{ once: true }}
          />
        </section>

        {/* Solutions Section */}
        <section className="py-12 bg-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
              Smart Solutions, Real Impact
            </h2>
            <p className="text-gray-600 font-medium">
              Why Professionals Choose Homeideas<br />
              For Their Business Solutions
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 px-4 sm:px-12">
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 0 0 3px #fde68a44" }}
              className="bg-gray-50 p-6 rounded-xl flex-1 shadow-sm border border-yellow-50"
            >
              <img src={placeholder} alt="Seamless Integration" className="rounded mb-3 w-full h-32 object-cover" />
              <h3 className="font-bold text-lg mb-1">Experience Seamless Integration</h3>
              <p className="text-gray-600 text-sm">
                Incorporate technology into your workflow without disrupting your business.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 0 0 3px #fde68a44" }}
              className="bg-gray-50 p-6 rounded-xl flex-1 shadow-sm border border-yellow-50"
            >
              <img src={placeholder} alt="Tailored Solutions" className="rounded mb-3 w-full h-32 object-cover" />
              <h3 className="font-bold text-lg mb-1">Tailored Solutions</h3>
              <p className="text-gray-600 text-sm">
                Apps designed for your unique architectural and construction needs.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 0 0 3px #fde68a44" }}
              className="bg-gray-50 p-6 rounded-xl flex-1 shadow-sm border border-yellow-50"
            >
              <img src={placeholder} alt="Future Ready Technology" className="rounded mb-3 w-full h-32 object-cover" />
              <h3 className="font-bold text-lg mb-1">Future-Ready Technology</h3>
              <p className="text-gray-600 text-sm">
                Solutions that scale and evolve with your business, today and tomorrow.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Enhance Section */}
        <section className="py-12 bg-yellow-50">
          <div className="text-center mb-8">
            <h3 className="text-yellow-500 font-bold text-lg mb-2">Enhance</h3>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Smarter Tools for Industry Professionals
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-12">
            <motion.div
              whileHover={{ scale: 1.07 }}
              className="bg-white p-6 rounded-xl shadow-sm border text-center"
            >
              <h4 className="font-bold text-lg mb-2">Empowering Your Projects</h4>
              <p className="text-gray-600 text-sm">
                Cuting-edge mobile applications for project management.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.07 }}
              className="bg-white p-6 rounded-xl shadow-sm border text-center"
            >
              <h4 className="font-bold text-lg mb-2">Innovative Apps</h4>
              <p className="text-gray-600 text-sm">
                Streamline design and construction processes.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.07 }}
              className="bg-white p-6 rounded-xl shadow-sm border text-center"
            >
              <h4 className="font-bold text-lg mb-2">Upcoming Apps</h4>
              <p className="text-gray-600 text-sm">
                Enhance efficiency and project experience.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 px-4 sm:px-12 bg-white flex flex-col items-center">
          <motion.div
            className="rounded-full w-28 h-28 bg-gray-200 mb-4 overflow-hidden flex items-center justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
          >
            <img
              src={placeholder}
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <blockquote className="text-lg font-medium text-center max-w-2xl italic">
            "HomeIdeas Technologies has transformed the way we approach interior design projects, making collaboration seamless and efficient."
          </blockquote>
          <p className="mt-3 text-gray-500">— Aditi Sharma, Designer, Home Decor</p>
        </section>

        {/* Call to Action */}
        <section className="px-4 sm:px-12 py-12 flex flex-col lg:flex-row items-center justify-between bg-yellow-50">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold mb-1">
              Join the Future of Home Tech
            </h2>
            <p className="text-gray-700 mb-3">Download the app and stay updated with the latest innovations.</p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              className="bg-yellow-500 text-white px-7 py-2 rounded font-semibold shadow"
            >
              Explore the App
            </motion.button>
            <button className="bg-gray-100 text-gray-800 px-7 py-2 rounded font-semibold border border-gray-200 ml-2">
              Get in Touch
            </button>
          </div>
          <img
            src={placeholder}
            alt="Download Illustration"
            className="rounded w-full max-w-md shadow-lg"
          />
        </section>

        {/* Footer */}
        <footer className="bg-white pt-8 pb-3 border-t">
          <div className="flex flex-col md:flex-row md:justify-between items-center px-4 sm:px-12">
            <div className="mb-5 md:mb-0 md:w-1/2">
              <span className="font-extrabold text-lg text-yellow-500">HOME IDEAS</span>
              <form className="flex mt-3">
                <input
                  type="email"
                  placeholder="Join our newsletter"
                  className="py-1 px-3 border rounded-l focus:outline-none w-36 sm:w-56"
                />
                <button
                  type="submit"
                  className="bg-yellow-500 text-white px-3 rounded-r font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="flex space-x-10 text-sm text-gray-600 mb-4 md:mb-0">
              <div>
                <h5 className="font-semibold mb-1">Company</h5>
                <ul>
                  <li><a href="#about" className="hover:text-yellow-500">About</a></li>
                  <li><a href="#whatwedo" className="hover:text-yellow-500">Services</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-1">Follow Us</h5>
                <ul>
                  <li><a href="#" className="hover:text-yellow-500">Twitter</a></li>
                  <li><a href="#" className="hover:text-yellow-500">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="text-center text-xs text-gray-500 mt-6">
            &copy; {new Date().getFullYear()} HOME IDEAS. All rights reserved.
          </div>
        </footer>
        <style jsx global>{`
          body {
            font-family: 'Manrope', sans-serif;
          }
        `}</style>
      </main>
    </>
  );
}
