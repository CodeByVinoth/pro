import { motion } from "framer-motion";
import { Mail, Phone, Instagram, FileText } from "lucide-react";

const contactItems = [
  { icon: Mail, text: "wattstrons@gmail.com", href: "mailto:wattstrons@gmail.com" },
  { icon: Phone, text: "9790646104", href: "tel:+919790646104" },
  { icon: Instagram, text: "@wattstrons", href: "https://instagram.com/wattstrons" },
  { icon: FileText, text: "Order Your Project", href: "https://docs.google.com/forms/d/e/1FAIpQLSfA23HZlOoZygLTEbNKN8MXtmRN3G8OoNsTreEXnkKwkDNk8Q/viewform" }
];

export function Contact() {
  return (
    <section className="min-h-screen pt-24 bg-black flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        >
          Contact Us
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-6">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.1,
                y: -5,
                boxShadow: "0px 10px 20px rgba(0, 255, 150, 0.3)"
              }}
              className="flex items-center justify-center space-x-4 p-5 rounded-xl shadow-lg transition-all relative overflow-hidden"
              style={{
                backdropFilter: "blur(12px)",
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.3, rotate: 10 }}
                className="text-green-300"
              >
                <item.icon className="w-7 h-7" />
              </motion.div>
              <span className="text-lg font-semibold text-white">{item.text}</span>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-50"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1, scale: 1.5 }}
                style={{
                  background: "radial-gradient(circle, rgba(0,255,150,0.2) 10%, transparent 70%)",
                }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
