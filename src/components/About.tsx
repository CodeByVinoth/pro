import { motion } from "framer-motion";

export function About() {
  return (
    <section className="min-h-screen pt-24 bg-zinc-900 flex items-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        >
          About Us
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.p
            className="text-lg leading-relaxed text-gray-200 p-8 rounded-2xl shadow-xl bg-gradient-to-r from-green-400/10 to-blue-500/10 backdrop-blur-lg border border-green-400/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Wattstrons Automation is an innovative startup specializing in embedded systems, IoT, and custom technology
            solutions. With over 30 successful projects delivered, we are committed to providing cutting-edge, high-quality
            solutions that cater to a wide range of industries. Our expertise in smart automation, real-time monitoring, and
            seamless system integration empowers businesses and homes to function with unmatched efficiency and convenience.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
