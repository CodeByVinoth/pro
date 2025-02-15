import { motion } from "framer-motion";
import bg from "../assets/bg.webp"; // Ensure this path is correct

interface HeroProps {
  onContactClick: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center pt-16 overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bg})` }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </motion.div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 space-y-6"
      >
        <motion.h1 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        >
          Welcome to Wattstrons
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl text-gray-300"
        >
          Innovating Embedded Systems & IoT Solutions
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0px 5px 20px rgba(0, 255, 150, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onContactClick}
          className="inline-block bg-gradient-to-r from-green-500 to-green-700 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-green-500/50 transition-all"
        >
          Inquiry Now
        </motion.button>
      </motion.div>
    </section>
  );
}
