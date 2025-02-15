import { motion } from 'framer-motion';

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
  return (
    <section className="min-h-screen pt-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
        >
          Our Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
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
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-xl shadow-xl hover:shadow-green-500/20 transform-gpu transition-all duration-300"
            >
              <motion.h3 
                className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {project.title}
              </motion.h3>
              <motion.p 
                className="text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {project.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}