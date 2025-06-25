import { motion } from "framer-motion";
import bgImage from '../assets/bg.webp';
import React from 'react';

export function Careers() {
  return (
    <section 
      id="contact" 
      className="min-h-screen pt-0 pb-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 18, 37, 0.9), rgba(15, 23, 42, 0.9)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-900/80"></div>

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
            <span className="inline-block">Work With </span>&nbsp;
            <span className="inline-block mt-2">Wattstrons</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-100 max-w-2xl mx-auto"
          >
            Join our team to build the future of <span className="text-green-400 font-medium">IoT</span> and <span className="text-blue-400 font-medium">automation</span>
          </motion.p>
        </motion.div>

       <div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
    <CareerCard />
    <WhyJoinCard />
  </div>
</div>

      </div>
      <style>
        {`
          .button-85 {
            padding: 0.6em 2em;
            border: none;
            outline: none;
            color: rgb(255, 255, 255);
            background: #111;
            cursor: pointer;
            position: relative;
            z-index: 0;
            border-radius: 10px;
            user-select: none;
            touch-action: manipulation;
          }

          .button-85:before {
            content: "";
            background: linear-gradient(
              45deg,
              #ff0000,
              #ff7300,
              #fffb00,
              #48ff00,
              #00ffd5,
              #002bff,
              #7a00ff,
              #ff00c8,
              #ff0000
            );
            position: absolute;
            top: -2px;
            left: -2px;
            background-size: 400%;
            z-index: -1;
            filter: blur(5px);
            width: calc(100% + 4px);
            height: calc(100% + 4px);
            animation: glowing-button-85 20s linear infinite;
            transition: opacity 0.3s ease-in-out;
            border-radius: 10px;
          }

          @keyframes glowing-button-85 {
            0% {
              background-position: 0 0;
            }
            50% {
              background-position: 400% 0;
            }
            100% {
              background-position: 0 0;
            }
          }

          .button-85:after {
            z-index: -1;
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: #222;
            left: 0;
            top: 0;
            border-radius: 10px;
          }
        `}
      </style>
    </section>
  );
}

function CareerCard() {
  return (
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-green-400 mb-3">Current Openings</h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-700/30 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-gray-100">Embedded Systems Engineer</h4>
              <p className="text-sm text-gray-300">Full-time | Remote/Hybrid</p>
            </div>
            <div className="p-4 bg-gray-700/30 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-gray-100">IoT Developer Intern</h4>
              <p className="text-sm text-gray-300">Internship | 3-6 months</p>
            </div>
            <div className="p-4 bg-gray-700/30 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-gray-100">Technical Content Creator</h4>
              <p className="text-sm text-gray-300">Part-time | Remote</p>
            </div>
          </div><br></br>
          <a 
            href="https://forms.gle/8nbEsvSeRjDV33CM6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-85"
          >
            Apply to Join
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function WhyJoinCard() {
  const perks = [
    { icon: '💰', label: 'Competitive Pay' },
    { icon: '🕒', label: 'Flexible Hours' },
    { icon: '🔬', label: 'Innovative Projects' },
    { icon: '📈', label: 'Career Growth' },
    { icon: '📦', label: 'Stock Options' },
    { icon: '🎁', label: 'Gadget Allowance' },
    { icon: '🎓', label: 'Training Budget' },
    { icon: '🤝', label: 'Collaborative Culture' },
  ];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <h3 className="text-xl font-semibold text-purple-400 mb-6">✨ Why Join Us?</h3>
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-100">
        {perks.map(({ icon, label }) => (
          <div key={label} className="bg-purple-700/20 p-3 rounded-xl">
            <span className="block font-medium">{icon} {label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
