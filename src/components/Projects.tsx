import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Wifi, 
  Bot, 
  Shield, 
  Settings, 
  Battery, 
  Heart, 
  Cpu, 
  Camera, 
  Car, 
  Flame, 
  Sprout, 
  Truck, 
  Building, 
  AlertTriangle, 
  Thermometer,
  Eye,
  Fish,
  Plug,
  Headphones,
  Wind,
  Activity,
  Home,
  ShoppingCart,
  Ambulance,
  Warehouse
} from 'lucide-react';
import bgImage from '../assets/bg.webp';

const projects = [
  {
    title: "Harvesting Energy from Bridge Using Piezo Elements",
    description: "This project focuses on harnessing energy from vibrations on bridges using piezoelectric elements, making use of wasted energy for powering small systems."
  },
  {
    title: "IoT-Based Fish Feeder",
    description: "Automated fish feeder system integrated with IoT, allowing remote control and monitoring for feeding fish at scheduled times."
  },
  {
    title: "Smart Plug",
    description: "A plug that can be controlled remotely via a mobile app or voice assistant to manage electrical devices, ensuring energy savings and automation."
  },
  {
    title: "Heavy Vehicle Reverse Control System",
    description: "A reverse control system for heavy vehicles that uses sensors to assist in reverse driving, improving safety and preventing accidents."
  },
  {
    title: "Gesture-Based Communication System",
    description: "A system that enables communication between individuals through gestures, designed to assist those with speech or hearing impairments."
  },
  {
    title: "Accident Detection and Fast Response System",
    description: "This system detects accidents in real-time and triggers an immediate response, notifying emergency services for quick help."
  },
  {
    title: "Gas Leak Auto Shutoff System",
    description: "An IoT-based system designed to automatically detect and shut off gas leaks, preventing hazards and ensuring safety in homes and industries."
  },
  {
    title: "Line Follower Robot Without Controller",
    description: "A line-following robot that autonomously navigates a predefined path without requiring a controller, based on sensor inputs."
  },
  {
    title: "Aves Cage Automation",
    description: "An automated system for birdcages, managing feeding, lighting, and temperature controls, all accessible via a mobile app."
  },
  {
    title: "Sorting Robot",
    description: "A robot designed to sort objects based on color, shape, or size, aimed at improving warehouse and manufacturing automation."
  },
  {
    title: "Balloon Bursting Robot",
    description: "A robot programmed to locate and burst balloons using sensors and a mechanical arm, typically used for fun and entertainment purposes."
  },
  {
    title: "Speed Passing Robot",
    description: "This robot detects obstacles and can pass through tight spaces at high speed, suitable for inspection and maintenance tasks in narrow areas."
  },
  {
    title: "Advanced Line Follower with Controller",
    description: "An advanced version of the line-following robot, featuring a controller for manual overrides and enhanced path-following accuracy."
  },
  {
    title: "Automatic Street Light Control Without Controller",
    description: "This project uses sensors to automatically control streetlights based on environmental factors like ambient light levels, without manual intervention."
  },
  {
    title: "IoT-Based Flood Alert System",
    description: "An IoT-based flood alert system that provides real-time notifications on flood risks by monitoring water levels and weather conditions."
  },
  {
    title: "Smart EV Monitoring System",
    description: "This system remotely monitors the status of electric vehicles, including battery life, charging status, and health, using IoT technology."
  },
  {
    title: "Smart Poultry Farm Using IoT",
    description: "A smart poultry farm using IoT to monitor and control temperature, humidity, and feeding schedules, ensuring better poultry management."
  },
  {
    title: "Rapid Rescue Helmet",
    description: "A helmet equipped with advanced sensors and communication features designed for quick rescue operations in emergencies."
  },
  {
    title: "Emergency Bus Rescue System",
    description: "This system detects emergencies in buses and takes automatic actions like alerting authorities and stopping the vehicle for safety."
  },
  {
    title: "Smart Trolley Using IoT",
    description: "A smart shopping trolley integrated with IoT sensors to automatically calculate the total price of items and provide shopping assistance."
  },
  {
    title: "Ambulance Priority Traffic Management",
    description: "This system manages traffic in real-time to give priority to ambulances, ensuring faster emergency response times."
  },
  {
    title: "Smart Museum Using IoT",
    description: "A smart museum that uses IoT to enhance visitor experience, with features like automatic lighting, temperature control, and information kiosks."
  },
  {
    title: "Cargo Transportation Safety System",
    description: "This system uses IoT and sensors to track cargo and ensure safe transportation by monitoring conditions like temperature and humidity."
  },
  {
    title: "Heart Attack Detection and Emergency Alert System",
    description: "This system monitors heart rate and detects anomalies, sending alerts to healthcare providers and emergency contacts if a heart attack is detected."
  },
  {
    title: "Greenhouse Monitoring and Control System",
    description: "A greenhouse system that uses sensors to monitor and control environmental conditions like temperature and humidity for optimized plant growth."
  },
  {
    title: "ESP32-CAM-Based Door Lock System",
    description: "A smart door lock system integrated with ESP32-CAM to provide secure access through facial recognition or a mobile app."
  },
  {
    title: "Smart Fire Detection System",
    description: "This system uses sensors to detect fire outbreaks and automatically alerts emergency services while activating fire suppression systems."
  },
  {
    title: "Agro Robot",
    description: "An automated agricultural robot designed to assist with tasks like seeding, weeding, and crop monitoring, improving efficiency in farming."
  },
  {
    title: "Bus Driver and Passenger Safety System",
    description: "A system that monitors the driver's health and passenger safety, providing alerts for health issues and unsafe behaviors."
  },
  {
    title: "Smart Driver Health Monitoring and Advanced Alert System",
    description: "This system monitors a driver's health parameters such as heart rate and provides real-time alerts in case of medical emergencies."
  },
  {
    title: "Low-Cost Window Cleaning Robot",
    description: "A robot designed to clean windows autonomously, reducing labor costs and providing a safer, efficient solution for high-rise buildings."
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const getProjectCategory = (title) => {
    if (title.includes("IoT") || title.includes("Smart")) return "IoT";
    if (title.includes("Robot")) return "Robotics";
    if (title.includes("Safety") || title.includes("Emergency")) return "Safety";
    if (title.includes("Automation") || title.includes("Automatic")) return "Automation";
    if (title.includes("Energy") || title.includes("Harvesting")) return "Energy";
    if (title.includes("Health") || title.includes("Heart")) return "Healthcare";
    return "Embedded System";
  };

  const getProjectIcon = (title) => {
    // Energy projects
    if (title.includes("Energy") || title.includes("Harvesting")) return Battery;
    
    // Fish/Aquarium related
    if (title.includes("Fish") || title.includes("Aves")) return Fish;
    
    // Smart Plug
    if (title.includes("Smart Plug")) return Plug;
    
    // Vehicle related
    if (title.includes("Heavy Vehicle") || title.includes("EV")) return Truck;
    if (title.includes("Bus")) return Car;
    if (title.includes("Ambulance")) return Ambulance;
    
    // Communication/Gesture
    if (title.includes("Gesture") || title.includes("Communication")) return Headphones;
    
    // Safety/Security/Emergency
    if (title.includes("Accident") || title.includes("Emergency") || title.includes("Safety")) return AlertTriangle;
    if (title.includes("Helmet") || title.includes("Rescue")) return Shield;
    
    // Gas/Fire related
    if (title.includes("Gas") || title.includes("Fire")) return Flame;
    
    // Robots
    if (title.includes("Robot")) return Bot;
    
    // Street Light
    if (title.includes("Street Light")) return Eye;
    
    // Flood
    if (title.includes("Flood")) return Wind;
    
    // Poultry/Farm
    if (title.includes("Poultry") || title.includes("Agro") || title.includes("Greenhouse")) return Sprout;
    
    // Shopping/Trolley
    if (title.includes("Trolley")) return ShoppingCart;
    
    // Museum
    if (title.includes("Museum")) return Building;
    
    // Transportation/Cargo
    if (title.includes("Cargo") || title.includes("Transportation")) return Warehouse;
    
    // Health/Heart related
    if (title.includes("Heart") || title.includes("Health")) return Heart;
    
    // Camera/Door Lock
    if (title.includes("Camera") || title.includes("Door Lock")) return Camera;
    
    // IoT/Smart systems
    if (title.includes("IoT") || title.includes("Smart")) return Wifi;
    
    // Default
    return Cpu;
  };

  const getIconColor = (category) => {
    switch (category) {
      case "IoT": return "text-blue-400";
      case "Robotics": return "text-purple-400";
      case "Safety": return "text-red-400";
      case "Automation": return "text-green-400";
      case "Energy": return "text-yellow-400";
      case "Healthcare": return "text-pink-400";
      default: return "text-indigo-400";
    }
  };

  return (
    <section 
      className="min-h-screen py-24 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.98)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: 0.3,
              scale: Math.random() * 0.3 + 0.7
            }}
            animate={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              rotate: Math.random() * 360,
              transition: {
                duration: Math.random() * 40 + 40,
                repeat: Infinity,
                repeatType: 'reverse'
              }
            }}
            className="absolute rounded-full mix-blend-overlay"
            style={{
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              background: `linear-gradient(45deg, 
                hsl(${Math.random() * 60 + 200}, 80%, 60%), 
                hsl(${Math.random() * 60 + 250}, 80%, 60%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
        
          <h2 className="text-4xl md:text-6xl font-bold mb-6 pb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 leading-tight">
            Cutting-Edge <br />Technology Projects
          </h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Explore our portfolio of advanced technological innovations designed to solve real-world challenges
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const category = getProjectCategory(project.title);
            const IconComponent = getProjectIcon(project.title);
            const iconColor = getIconColor(category);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onClick={() => setSelectedProject(project)}
                className="group relative overflow-hidden rounded-2xl cursor-pointer border border-gray-700 hover:border-blue-400 transition-all duration-300"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]"></div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 p-8 h-full flex flex-col" style={{ minHeight: '350px' }}>
                  {/* Category badge */}
                  <div className="mb-4 self-start">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full bg-blue-900/50 text-blue-300 border border-blue-500/30`}>
                      {category}
                    </span>
                  </div>
                  
                  {/* Project Icon - Clean Animated */}
                  <div className="flex justify-center mb-6">
                    <motion.div 
                      initial={{ scale: 0, rotate: -180, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      transition={{ 
                        delay: index * 0.1 + 0.3, 
                        duration: 0.8, 
                        type: "spring",
                        stiffness: 100
                      }}
                      className="relative"
                    >
                      {/* Main icon with floating animation */}
                      <motion.div
                        animate={{
                          y: [-2, 2, -2],
                          rotate: [-5, 5, -5],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 15,
                          transition: { duration: 0.3 }
                        }}
                        className="relative z-10"
                      >
                        <IconComponent className={`w-12 h-12 ${iconColor} drop-shadow-lg opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Project title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300 text-center">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 flex-grow line-clamp-3 text-center">
                    {project.description}
                  </p>
                  
                  {/* View button */}
                  <div className="flex justify-center items-center mt-auto">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative overflow-hidden px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium shadow-lg group/btn"
                    >
                      <span className="relative z-10 flex items-center">
                        View Details
                        <svg
                          className="w-4 h-4 ml-2 text-white transition-transform group-hover/btn:translate-x-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 bg-gray-800 rounded-full hover:bg-red-500 transition-colors z-10"
            >
              <svg
                className="w-5 h-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            
            <div className="p-10">
              {/* Icon, Category and title section */}
              <div className="mb-8 text-center">
                {/* Large Clean Animated Icon */}
                <div className="flex justify-center mb-6">
                  <motion.div 
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="relative"
                  >
                    {/* Main icon */}
                    <motion.div
                      animate={{
                        y: [-3, 3, -3],
                        rotate: [-8, 8, -8],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative z-10"
                    >
                      {(() => {
                        const IconComponent = getProjectIcon(selectedProject.title);
                        const iconColor = getIconColor(getProjectCategory(selectedProject.title));
                        return <IconComponent className={`w-20 h-20 ${iconColor} drop-shadow-2xl`} />;
                      })()}
                    </motion.div>
                  </motion.div>
                </div>
                
                <span className={`px-3 py-1 text-sm font-medium rounded-full bg-blue-900/50 text-blue-300 border border-blue-500/30 inline-block mb-4`}>
                  {getProjectCategory(selectedProject.title)}
                </span>
                <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
                  {selectedProject.title}
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6 mx-auto"></div>
              </div>
              
              {/* Main content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                {/* Description */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Project Overview
                  </h4>
                  <p className="text-gray-300 mb-6">
                    {selectedProject.description}
                  </p>
                  <p className="text-gray-400">
                    This innovative solution represents the cutting edge of {getProjectCategory(selectedProject.title).toLowerCase()} technology, designed to address real-world challenges with efficiency and precision.
                  </p>
                </div>
                
                {/* Features */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Key Features
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <span className="ml-3 text-gray-300">Advanced sensor integration for real-time monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <span className="ml-3 text-gray-300">Energy-efficient design with low power consumption</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <span className="ml-3 text-gray-300">Cloud connectivity for remote access and control</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <span className="ml-3 text-gray-300">Scalable architecture for various deployment scenarios</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Technical specs */}
              <div className="bg-gray-800/50 rounded-xl p-6 mb-10 border border-gray-700">
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <svg className="w-6 h-6 text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                  Technical Specifications
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">
                    <div className="text-sm text-gray-400 mb-1">Microcontroller</div>
                    <div className="text-white font-medium">ESP32/Arduino</div>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">
                    <div className="text-sm text-gray-400 mb-1">Connectivity</div>
                    <div className="text-white font-medium">WiFi/BLE</div>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">
                    <div className="text-sm text-gray-400 mb-1">Power Supply</div>
                    <div className="text-white font-medium">5V DC / Battery</div>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">
                    <div className="text-sm text-gray-400 mb-1">Sensors</div>
                    <div className="text-white font-medium">Custom configured</div>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">
                    <div className="text-sm text-gray-400 mb-1">Data Storage</div>
                    <div className="text-white font-medium">Cloud/Flash</div>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">
                    <div className="text-sm text-gray-400 mb-1">Interface</div>
                    <div className="text-white font-medium">Mobile App</div>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="text-center">
                <motion.a 
                  href={`https://wa.me/919025571824?text=Hi%20there,%20I'm%20interested%20in%20your%20project:%20${encodeURIComponent(selectedProject.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Request Detailed Information on WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}