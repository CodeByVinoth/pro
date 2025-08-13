import { motion } from "framer-motion";
import {
  Wifi,
  Home,
  Cpu,
  BookOpen,
  GraduationCap,
  Zap,
  Code2,
  CircuitBoard,
  Globe,
  Smartphone,
  Monitor,
  X
} from "lucide-react";
import { useState } from "react";

// Import images (replace with your actual asset paths)
import embeddedImg from "../assets/embedded.png";
import educationImg from "../assets/education1.jpg";
import homeImg from "../assets/home.jpg";
import embedded2Img from "../assets/embedded2.webp";
import sclImg from "../assets/scl.webp";
import clgImg from "../assets/clg2.jpg";
import pcbImg from "../assets/pcb.jpg";
import backgroundImg from "../assets/bg.webp";
import webDevImg from "../assets/web.jpg";
import appDevImg from "../assets/app.jpeg";
import softwareImg from "../assets/software.jpg";

// Service details for popups (extended)
const serviceDetails = {
  embedded: {
    id: "embedded",
    title: "Embedded System Devices",
    description: "We specialize in developing custom embedded solutions for industrial and consumer applications.",
    features: [
      "Custom microcontroller-based designs",
      "Real-time operating system integration",
      "Low-power consumption solutions",
      "Industrial-grade reliability",
      "Product lifecycle management"
    ],
    examples: [
      "Industrial control systems",
      "Medical devices",
      "Automotive electronics",
      "Consumer electronics",
      "Smart appliances"
    ],
    icon: CircuitBoard
  },
  iot: {
    id: "iot",
    title: "IoT Solution Devices",
    description: "End-to-end IoT solutions that connect your business to the future of smart technology.",
    features: [
      "Wireless connectivity (WiFi, Bluetooth, LoRa, Cellular)",
      "Cloud integration",
      "Data analytics dashboard",
      "Edge computing capabilities",
      "Secure device management"
    ],
    examples: [
      "Smart agriculture systems",
      "Industrial monitoring",
      "Asset tracking",
      "Smart city solutions",
      "Remote monitoring devices"
    ],
    icon: Wifi
  },
  homeAutomation: {
    id: "homeAutomation",
    title: "Home Automation Products",
    description: "Transform your living space with our intelligent home automation solutions.",
    features: [
      "Voice control integration",
      "Energy management",
      "Remote access via mobile",
      "Custom automation scenarios",
      "Interoperability with major platforms"
    ],
    examples: [
      "Smart lighting systems",
      "Climate control solutions",
      "Security and surveillance",
      "Entertainment systems",
      "Smart kitchen appliances"
    ],
    icon: Home
  },
  consumerDevices: {
    id: "consumerDevices",
    title: "Consumer Smart Devices",
    description: "Innovative smart devices designed for modern living and personalized experiences.",
    features: [
      "User-centric design",
      "Mobile app integration",
      "AI-powered features",
      "Regular firmware updates",
      "Eco-friendly materials"
    ],
    examples: [
      "Wearable technology",
      "Smart home assistants",
      "Health monitoring devices",
      "Personal entertainment",
      "Connected lifestyle products"
    ],
    icon: Cpu
  },
  PCBDesigning: {
    id: "PCBDesigning",
    title: "PCB Designing",
    description: "We design high-quality printed circuit boards tailored for your application needs.",
    features: [
      "Single & multi-layer PCB designs",
      "High-speed signal routing",
      "Thermal & power optimization",
      "Prototype to production-ready",
      "Compliance with industry standards"
    ],
    examples: [
      "Industrial automation boards",
      "Medical device PCBs",
      "IoT hardware boards",
      "Consumer electronics PCBs",
      "Custom R&D prototypes"
    ],
    icon: CircuitBoard
  },
  websiteDev: {
    id: "websiteDev",
    title: "Website Development",
    description: "Modern, responsive, and SEO-friendly website solutions tailored to your brand.",
    features: [
      "Responsive design",
      "SEO and performance optimization",
      "CMS integration",
      "E-commerce solutions",
      "Maintenance & support"
    ],
    examples: [
      "Company websites",
      "E-commerce stores",
      "Portfolio sites",
      "Landing pages",
      "Custom web apps"
    ],
    icon: Globe
  },
  appDev: {
    id: "appDev",
    title: "App Development",
    description: "Cross-platform and native mobile apps that deliver great UX and performance.",
    features: [
      "iOS & Android development",
      "Cross-platform frameworks",
      "Backend & API integration",
      "App store publishing support",
      "Performance & analytics"
    ],
    examples: [
      "Customer apps",
      "Enterprise mobility",
      "E-commerce apps",
      "Productivity tools",
      "Educational apps"
    ],
    icon: Smartphone
  },
  softwareSolutions: {
    id: "softwareSolutions",
    title: "Software Solutions",
    description: "Custom software applications to automate workflows and improve productivity.",
    features: [
      "Full-stack application development",
      "Cloud-native solutions",
      "Integration with third-party systems",
      "Security & compliance",
      "Continuous delivery"
    ],
    examples: [
      "ERP modules",
      "CRM systems",
      "Automation tools",
      "Data dashboards",
      "SaaS products"
    ],
    icon: Monitor
  }
};

// Client Services (ordered - PCBDesigning followed by Website, App, Software)
const clientServices = [
  {
    id: "embedded",
    icon: CircuitBoard,
    title: "Embedded System Devices",
    description: "Embedded solutions for industrial and consumer applications",
    image: embeddedImg
  },
  {
    id: "iot",
    icon: Wifi,
    title: "IoT Solution Devices",
    description: "End-to-end IoT solutions for smart connectivity",
    image: educationImg
  },
  {
    id: "homeAutomation",
    icon: Home,
    title: "Home Automations",
    description: "Transform your home with intelligent automation",
    image: homeImg
  },
  {
    id: "consumerDevices",
    icon: Cpu,
    title: "Consumer Smart Devices",
    description: "Innovative smart devices for modern living",
    image: embedded2Img
  },
  {
    id: "PCBDesigning",
    icon: CircuitBoard,
    title: "PCB Designing",
    description: "Custom PCB design for various applications",
    image: pcbImg
  },
  // New services placed right after PCBDesigning
  {
    id: "websiteDev",
    icon: Globe,
    title: "Website Development",
    description: "Modern, fully responsive websites and dynamic web applications ",
    image: webDevImg
  },
  {
    id: "appDev",
    icon: Smartphone,
    title: "App Development",
    description: "Cross-platform mobile applications for iOS and Android devices",
    image: appDevImg
  },
  {
    id: "softwareSolutions",
    icon: Monitor,
    title: "Software Solutions",
    description: "Custom software for businesses and automation",
    image: softwareImg
  }
];

// Student Programs
const studentPrograms = [
  {
    title: "Junior IoT Bootcamp",
    icon: BookOpen,
    focus: "Young Innovators Track",
    duration: "5 days intensive",
    outcome: "Certificate + Real Projects",
    image: sclImg,
    formLink: "https://forms.gle/mf1Ehd7saXDbGwUz6"
  },
  {
    title: "College Programs",
    icon: GraduationCap,
    focus: "College students",
    duration: "Flexible schedules",
    outcome: "Projects + Internships",
    image: clgImg,
    formLink: "https://forms.gle/owSFsAusKeQQBzki9"
  }
];

export function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openWhatsApp = () => {
    const phoneNumber = "9025571824";
    const message = "Hello, I would like to request a demo for your products.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleMoreInfo = (serviceId) => {
    setSelectedService(serviceDetails[serviceId]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section
      id="services"
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 18, 37, 0.9), rgba(15, 23, 42, 0.9)), url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>

            <div className="p-8">
              <div className="flex items-center mb-6">
                {/* dynamic icon */}
                {selectedService.icon && (
                  <selectedService.icon className="w-8 h-8 text-green-400 mr-3" />
                )}
                <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
              </div>

              <p className="text-gray-300 mb-6">{selectedService.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <Zap className="w-4 h-4 text-yellow-400 mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Example Applications</h4>
                  <ul className="space-y-2">
                    {selectedService.examples.map((example, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <Code2 className="w-4 h-4 text-blue-400 mt-1 mr-2 flex-shrink-0" />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={openWhatsApp}
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg"
                >
                  Request Demo
                </button>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 border border-gray-600 text-white rounded-lg"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* animated background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 z-0">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ x: [0, 120, 0], y: [0, 80, 0], rotate: [0, 360] }}
            transition={{ duration: Math.random() * 25 + 10, repeat: Infinity, ease: "linear" }}
            className="absolute rounded-full bg-gradient-to-r from-green-400 to-blue-500"
            style={{
              width: Math.random() * 120 + 40,
              height: Math.random() * 120 + 40,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.18 + 0.05,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          >
            What We Offer to Industry & Home Users
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Cutting-edge technology solutions tailored for your needs
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clientServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-700 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-green-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>

                <p className="text-gray-300 mb-6">{service.description}</p>

                <div className="flex justify-center space-x-3">
                  <button
                    onClick={() => handleMoreInfo(service.id)}
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    More Info
                  </button>
                  <button
                    onClick={openWhatsApp}
                    className="px-4 py-2 border border-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Request Demo
                  </button>
                </div>
              </div>

              {/* neon bottom border on hover */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Student Programs Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4 pb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
            >
              Empowering the Next Generation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Hands-on programs to develop real-world tech skills
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {studentPrograms.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row rounded-2xl overflow-hidden bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-900/50 to-purple-900/50' : 'from-purple-900/50 to-blue-900/50'} border border-gray-700/50 backdrop-blur-sm`}
              >
                <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <program.icon className="w-8 h-8 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-white">{program.title}</h3>
                  </div>
                  <div className="space-y-3 mb-6">
                    <p className="flex items-center text-gray-300">
                      <Zap className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="font-medium">Focus&nbsp;:&nbsp; </span> {program.focus}
                    </p>
                    <p className="flex items-center text-gray-300">
                      <Code2 className="w-4 h-4 text-blue-400 mr-2" />
                      <span className="font-medium">Duration&nbsp;:&nbsp; </span> {program.duration}
                    </p>
                    <div className="text-gray-300 flex items-start gap-2 mb-2">
                      <GraduationCap className="w-4 h-4 text-purple-400 mt-1" />
                      <p className="break-words leading-relaxed">
                        <span className="font-medium">Outcome&nbsp;:&nbsp;</span>{program.outcome}
                      </p>
                    </div>
                  </div>
                  <a
                    href={program.formLink}
                    className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-center font-medium hover:opacity-90 transition-opacity"
                  >
                    {program.title.includes("Junior") ? "Register Now" : "Apply Now"}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
