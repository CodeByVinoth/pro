import { motion } from "framer-motion";
import bgImage from '../assets/bg.webp';
import logoImage from '../assets/lab.png';
import { Lightbulb, BookOpen, Package } from "lucide-react";

export function About() {
  const features = [
    { icon: <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto mb-2" />, label: "Innovation" },
    { icon: <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-2" />, label: "Education" },
    { icon: <Package className="w-12 h-12 text-green-400 mx-auto mb-2" />, label: "Product" },
  ];

  return (
    <section
      className="min-h-screen pt-10 flex items-center relative overflow-hidden bg-gray-900"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950/80 via-gray-900/60 to-gray-900/80"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/20"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              opacity: 0
            }}
            animate={{
              x: Math.random() * 100,
              y: Math.random() * 100,
              opacity: [0, 0.3, 0],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
          />
        ))}
      </div>

      {/* Floating grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full pattern-grid-lg text-gray-600" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-purple-500"
          >
            <span className="inline-block">Empowering the Future</span>
            <br />
            <span className="inline-block mt-2">with IoT Intelligence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-100 max-w-2xl mx-auto"
          >
            Where <span className="text-green-400 font-medium">technology</span> meets <span className="text-blue-400 font-medium">education</span> to build the future of <span className="text-purple-400 font-medium">automation</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px]"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="absolute inset-0 rounded-3xl overflow-hidden border-2 border-gray-600/30 shadow-2xl shadow-green-500/20"
              animate={{
                boxShadow: [
                  '0 25px 50px -12px rgba(74, 222, 128, 0.1)',
                  '0 25px 50px -12px rgba(96, 165, 250, 0.2)',
                  '0 25px 50px -12px rgba(168, 85, 247, 0.1)',
                  '0 25px 50px -12px rgba(74, 222, 128, 0.1)'
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <img
                src={logoImage}
                alt="Wattstrons Lab"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Mission */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border border-gray-700 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-start">
                <div className="p-2 bg-green-500/20 rounded-lg mr-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-green-400 mb-3">Our Mission</h3>
                  <p className="text-gray-200 leading-relaxed">
                    To innovate tech solutions and build talent for tomorrow. We empower industries with cutting-edge embedded systems and IoT solutions that improve efficiency, enhance connectivity, and solve real-world challenges.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border border-gray-700 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-start">
                <div className="p-2 bg-blue-500/20 rounded-lg mr-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-3">Our Vision</h3>
                  <p className="text-gray-200 leading-relaxed">
                    To be a leader in embedded and IoT-based automation, revolutionizing industries through intelligent solutions that drive sustainable progress and shape a smarter, more connected future.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Unique Value */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border border-gray-700 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-start">
                <div className="p-2 bg-purple-500/20 rounded-lg mr-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 mb-3">Why Wattstrons is Unique</h3>
                  <p className="text-gray-200 leading-relaxed mb-6">
                    Our distinctive blend of product development, education, and innovation sets us apart in the tech landscape.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {features.map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="text-center p-4 bg-gray-700/50 rounded-xl border border-gray-600 hover:border-green-400/30 transition-all"
                      >
                        {item.icon}
                        <p className="mt-2 text-sm font-semibold">{item.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
