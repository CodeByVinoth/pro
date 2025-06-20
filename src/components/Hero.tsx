import { motion } from "framer-motion";
import bg from "../assets/bg.webp";

interface HeroProps {
  onContactClick: () => void;
  onExploreClick: () => void;
  onAboutClick: () => void;
}

export function Hero({ onContactClick, onExploreClick, onAboutClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center pt-16 overflow-hidden">
      {/* Background Image with Tech/Circuits */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bg})` }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </motion.div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-4 max-w-6xl mx-auto space-y-8"
      >
        {/* Main Headline */}
        <motion.h1 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
        >
          Innovating with IoT & Embedded Tech for <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Industry and Education</span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
        >
          Wattstrons is a startup delivering smart devices and empowering future engineers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
         <div className="flex gap-4">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onExploreClick}
    className="relative px-8 py-3 font-bold rounded-xl text-white-500 bg-black/20 border border-white/20 backdrop-blur-lg shadow-[0_0_10px_rgba(59,130,246,0.8),0_0_20px_rgba(59,130,246,0.6)]"
  >
    <span className="drop-shadow-[0_0_4px_rgba(59,130,246,1)]">Explore Services</span>
  </motion.button>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onAboutClick}
    className="relative px-8 py-3 font-bold rounded-xl text-white-500 bg-black/20 border border-white/20 backdrop-blur-lg shadow-[0_0_10px_rgba(34,197,94,0.8),0_0_20px_rgba(34,197,94,0.6)]"
  >
    <span className="drop-shadow-[0_0_4px_rgba(34,197,94,1)]">About Us</span>
  </motion.button>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onContactClick}
    className="relative px-8 py-3 font-bold rounded-xl text-white-500 bg-black/20 border border-white/20 backdrop-blur-lg shadow-[0_0_10px_rgba(239,68,68,0.8),0_0_20px_rgba(239,68,68,0.6)]"
  >
    <span className="drop-shadow-[0_0_4px_rgba(239,68,68,1)]">Contact Us</span>
  </motion.button>
</div>


        </motion.div>
      </motion.div>
    </section>
  );
}