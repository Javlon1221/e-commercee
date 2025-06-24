import React from 'react';
import { motion } from 'framer-motion';
import AboutHero from './AboutHero';
import vite from '../../assets/vite.svg';

const team = [
  { name: "Avazbek", role: "Founder & CEO" },
  { name: "Sevinch", role: "Product Manager" },
  { name: "Jamshid", role: "Frontend Developer" }
];

// Fade in variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  return (
    <div>
      <AboutHero />

      {/* Intro Text */}
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          We are a leading e-commerce platform, committed to providing customers with a seamless shopping experience.
          Our mission is to connect people with the best products at the best prices through innovative solutions and a user-friendly interface.
        </p>
        <p className="text-gray-600 text-base sm:text-lg mt-4 leading-relaxed">
          From electronics to fashion, we aim to make shopping easy, reliable, and enjoyable for everyone.
          Thank you for choosing us as your trusted online shopping destination.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {["Our Mission", "Our Vision"].map((title, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-lg shadow-md p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
            <p className="text-gray-600 text-base">
              {title === "Our Mission"
                ? "To deliver top-quality products and exceptional service through innovation and dedication."
                : "To become the most customer-loved e-commerce platform in Central Asia and beyond."}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        className="bg-gray-100 py-10"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center px-4 sm:px-6 lg:px-8">
          {[
            { value: "1000+", label: "Products" },
            { value: "5000+", label: "Happy Customers" },
            { value: "5+", label: "Years of Experience" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-blue-600">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Team Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow p-4 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <img src={vite} alt="Avatar" className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">How We Work</h2>
        <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SA7QvFq1Zmk?si=KCYIfP7N_HyrwYvH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow"
          ></iframe>
        </div>
      </motion.div>

      {/* Social Section */}
      <motion.div
        className="text-center py-10 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-700 mb-4">Follow us on social media</p>
        <div className="flex flex-wrap justify-center gap-4 text-blue-600 text-lg">
          <a href="https://t.me/jalilov_j21" target="_blank" rel="noreferrer" className="hover:underline">Telegram</a>
          <a href="https://www.instagram.com/p/C2WEf3XI7NP/?igsh=MW1qd25xNzZxZ3llYg==" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
          <a href="mailto:info@yourshop.uz" className="hover:underline">Email</a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
