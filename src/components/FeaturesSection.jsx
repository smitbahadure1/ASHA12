import { 
  WifiOff, 
  Brain, 
  Mic, 
  FileText, 
  Bell, 
  Users,
  Smartphone,
  Heart,
  Database
} from "lucide-react";
import { motion } from "motion/react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <WifiOff size={32} />,
      title: "Offline-First Architecture",
      description: "Fully functional without internet connection. All features work seamlessly offline with automatic synchronization when connectivity returns.",
      color: "bg-green-500",
      highlight: "100% Offline",
      benefits: ["Zero dependency on internet", "Automatic sync when online", "Local data storage"]
    },
    {
      icon: <FileText size={32} />,
      title: "Digital Health Records",
      description: "Complete patient registration, visit logs, immunization tracking, and ANC schedule management in a digital format.",
      color: "bg-blue-500",
      highlight: "Paperless",
      benefits: ["Patient registration", "Visit tracking", "Medical history"]
    },
    {
      icon: <Mic size={32} />,
      title: "Multilingual Voice Interface",
      description: "Voice-powered interactions in multiple regional languages, perfect for ASHA workers with varying digital literacy levels.",
      color: "bg-purple-500",
      highlight: "Voice Enabled",
      benefits: ["Regional languages", "Voice commands", "Easy interaction"]
    },
    {
      icon: <Brain size={32} />,
      title: "AI-Powered Symptom Checker",
      description: "Advanced AI analyzes symptoms, provides health insights, and suggests appropriate care recommendations for patients.",
      color: "bg-orange-500",
      highlight: "Smart AI",
      benefits: ["Symptom analysis", "Health insights", "Care recommendations"]
    },
    {
      icon: <Bell size={32} />,
      title: "Smart Reminders & Alerts",
      description: "Intelligent notification system for appointments, immunizations, and follow-ups with both in-app and SMS capabilities.",
      color: "bg-red-500",
      highlight: "Never Miss",
      benefits: ["Appointment reminders", "SMS alerts", "Follow-up tracking"]
    },
    {
      icon: <Users size={32} />,
      title: "Role-Based Dashboards",
      description: "Customized interfaces for ASHA workers, doctors, supervisors, and patients with role-specific features and data access.",
      color: "bg-indigo-500",
      highlight: "Multi-Role",
      benefits: ["ASHA dashboard", "Doctor portal", "Patient view"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-4">
            <Smartphone size={16} />
            <span className="text-sm font-medium">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for
            <br />
            <span className="text-blue-600">Rural Healthcare</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ASHA Triad combines cutting-edge technology with practical healthcare needs, 
            delivering a comprehensive solution that works in real-world conditions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon and highlight */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 ${feature.color} rounded-lg flex items-center justify-center text-white`}>
                    {feature.icon}
                  </div>
                  <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {feature.highlight}
                  </span>
                </div>

                {/* Title and description */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                
                {/* Benefits list */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlight Section */}
        <motion.div 
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Stats */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Built for <span className="text-green-600">Real-World</span> Healthcare
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-gray-600">Available Offline</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-green-600 mb-2">10+</div>
                  <div className="text-gray-600">Regional Languages</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
                  <div className="text-gray-600">User Roles</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-orange-600 mb-2">AI</div>
                  <div className="text-gray-600">Powered Insights</div>
                </div>
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {/* Feature icons */}
                  <motion.div 
                    className="bg-white p-4 rounded-lg shadow-sm border border-blue-100 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Heart size={24} className="text-red-500 mx-auto mb-2" />
                    <div className="text-xs font-medium text-gray-700">Patient Care</div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white p-4 rounded-lg shadow-sm border border-green-100 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Database size={24} className="text-blue-500 mx-auto mb-2" />
                    <div className="text-xs font-medium text-gray-700">Data Sync</div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white p-4 rounded-lg shadow-sm border border-purple-100 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Mic size={24} className="text-purple-500 mx-auto mb-2" />
                    <div className="text-xs font-medium text-gray-700">Voice Input</div>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white p-4 rounded-lg shadow-sm border border-orange-100 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Brain size={24} className="text-orange-500 mx-auto mb-2" />
                    <div className="text-xs font-medium text-gray-700">AI Analysis</div>
                  </motion.div>
                </div>
              </div>

              {/* Floating indicator */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <WifiOff size={20} />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}