import { motion } from 'framer-motion';
import { Server, Wifi, Home, Cog, Cpu, Notebook as Robot, Shield, Zap, Cloud, Monitor, Factory, Building } from 'lucide-react';

const services = [
  {
    icon: Server,
    title: "Embedded Systems",
    description: "We design and develop high-performance embedded systems for various applications, ranging from consumer electronics to industrial automation."
  },
  {
    icon: Wifi,
    title: "IoT Solutions",
    description: "Our IoT solutions provide smart, connected systems that enable real-time monitoring and automation for businesses and homes."
  },
  {
    icon: Home,
    title: "Home Automation",
    description: "Smart home systems with seamless control, real-time monitoring, and automation for efficient living."
  },
  {
    icon: Robot,
    title: "Robotics",
    description: "Advanced robotics solutions for industrial automation, including sorting robots, line followers, and specialized task robots."
  },
  {
    icon: Shield,
    title: "Security Systems",
    description: "Comprehensive security solutions including smart locks, fire detection, and emergency response systems."
  },
  {
    icon: Cpu,
    title: "Industrial Automation",
    description: "Smart industrial solutions for manufacturing, warehouse automation, and process control systems."
  },
  {
    icon: Zap,
    title: "Energy Management",
    description: "Innovative energy harvesting and management solutions for sustainable power generation and optimization."
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless cloud connectivity for IoT devices, enabling remote monitoring and control of systems."
  },
  {
    icon: Monitor,
    title: "Health Monitoring",
    description: "Advanced health monitoring systems for drivers, patients, and emergency detection."
  },
  {
    icon: Factory,
    title: "Smart Agriculture",
    description: "Automated farming solutions including greenhouse monitoring, poultry management, and agricultural robots."
  },
  {
    icon: Building,
    title: "Smart Buildings",
    description: "Intelligent building management systems for museums, offices, and commercial spaces."
  },
  {
    icon: Cog,
    title: "Custom Solutions",
    description: "Tailored solutions designed specifically for your unique requirements and challenges."
  }
];

export function Services() {
  return (
    <section className="min-h-screen pt-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="bg-gradient-to-br from-green-900 to-green-700 p-6 rounded-xl shadow-xl hover:shadow-green-500/20 transform-gpu"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-12 h-12 text-green-400" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-300"
                >
                  {service.title}
                </motion.h3>
                <motion.p className="text-gray-200">
                  {service.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}