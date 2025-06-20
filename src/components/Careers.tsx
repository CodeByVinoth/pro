import { motion } from "framer-motion";
import bgImage from '../assets/bg.webp';

export function Careers() {
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
            <span className="inline-block">Work With</span>
            <br />
            <span className="inline-block mt-2">Wattstrons</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-100 max-w-2xl mx-auto"
          >
            Join our team or collaborate with us to build the future of <span className="text-green-400 font-medium">IoT</span> and <span className="text-blue-400 font-medium">automation</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <CareerCard />
          <CollaborationCard />
        </div>
      </div>
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
          </div>
          <a 
            href="https://forms.gle/8nbEsvSeRjDV33CM6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full font-medium text-white hover:shadow-lg transition-all"
          >
            Apply to Join
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function CollaborationCard() {
  return (
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-3">Project Collaboration</h3>
          <p className="text-gray-200 leading-relaxed mb-4">
            We're always looking for talented individuals and organizations to collaborate with on exciting IoT and automation projects.
          </p>
          <div className="p-4 bg-gray-700/30 rounded-lg mb-4">
            <h4 className="font-bold text-gray-100 mb-2">Collaboration Areas:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Industrial Automation Solutions</li>
              <li>Smart Home/City Projects</li>
              <li>Educational Content Development</li>
              <li>Research & Development</li>
            </ul>
          </div>
          <a 
            href="https://forms.gle/YOUR_GOOGLE_FORM_ID" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-medium text-white hover:shadow-lg transition-all"
          >
            Collaborate with Us
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
