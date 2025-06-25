import { motion } from "framer-motion";
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { Send, User, MessageSquare } from "lucide-react";
import { useState } from "react";
import bgImage from "../assets/bg.webp";

const contactItems = [
  {
    icon: FaEnvelope,
    label: "Email Us",
    text: "wattstronsautomation@gmail.com",
    href: "mailto:wattstronsautomation@gmail.com",
    color: "bg-gradient-to-r from-red-500 to-pink-600"
  },
  {
    icon: FaPhoneAlt,
    label: "Call or WhatsApp",
    text: "+91 9025571824",
    href: "https://wa.me/919025571824?text=Hi%20Wattstrons",
    color: "bg-gradient-to-r from-green-500 to-teal-600"
  },
  {
    icon: FaInstagram,
    label: "Follow on Instagram",
    text: "@wattstrons",
    href: "https://instagram.com/wattstrons",
    color: "bg-gradient-to-r from-purple-500 to-pink-600"
  },
  {
    icon: FaLinkedin,
    label: "Connect on LinkedIn",
    text: "Wattstrons Automations",
    href: "https://www.linkedin.com/company/wattstrons-automations",
    color: "bg-gradient-to-r from-sky-600 to-blue-700"
  },
  {
    icon: FaMapMarkerAlt,
    label: "Visit Us",
    text: "Marathahalli, Bengaluru",
    href: "#",
    color: "bg-gradient-to-r from-blue-500 to-cyan-600"
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const fullMessage = `Hi Wattstrons, I am ${name}. My email is ${email}.\n\n${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappLink = `https://wa.me/919025571824?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 18, 37, 0.9), rgba(15, 23, 42, 0.9)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-dot-pattern"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              Contact Us
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or need expert consultation? Reach out to our team for innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="flex items-center p-5 rounded-xl bg-slate-800 bg-opacity-50 backdrop-blur-sm border border-slate-700 transition-all duration-300 group hover:shadow-lg"
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg ${item.color} mr-4`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                  <p className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">{item.text}</p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-slate-800 bg-opacity-70 backdrop-blur-sm border border-slate-700 shadow-xl"
          >
            <div className="mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mb-4">
                <Send className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-gray-400">Fill out the form below and we'll get back to you soon</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none text-white"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-500" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none text-white"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                <div className="relative">
                  <div className="absolute top-3 left-3">
                    <MessageSquare className="h-5 w-5 text-gray-500" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-700 border border-slate-600 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none text-white"
                    placeholder="Tell us about your requirement..."
                  ></textarea>
                </div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium shadow-md hover:shadow-lg transition-all group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
  
}
