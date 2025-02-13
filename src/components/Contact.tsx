import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, FileText } from 'lucide-react';

const contactItems = [
  {
    icon: Mail,
    text: "wattstrons@gmail.com",
    href: "mailto:wattstrons@gmail.com"
  },
  {
    icon: Phone,
    text: "9790646104",
    href: "tel:+919790646104"
  },
  {
    icon: Instagram,
    text: "@wattstrons",
    href: "https://instagram.com/wattstrons"
  },
  {
    icon: FileText,
    text: "Order Your Project",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfA23HZlOoZygLTEbNKN8MXtmRN3G8OoNsTreEXnkKwkDNk8Q/viewform"
  }
];

export function Contact() {
  return (
    <section className="min-h-screen pt-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        >
          Contact Us
        </motion.h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, x: 10 }}
              className="flex items-center justify-center space-x-4 bg-gradient-to-r from-green-700 to-green-600 p-4 rounded-lg shadow-lg hover:shadow-green-500/50 transition-all"
            >
              <item.icon className="w-6 h-6" />
              <span className="text-lg font-semibold">{item.text}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}