import { UserPlus, Heart, Brain, RefreshCw, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function WorkflowSection() {
  const steps = [
    {
      icon: <UserPlus size={32} />,
      title: "Register Patient",
      description:
        "ASHA worker registers new patients or updates existing records using voice input or simple forms",
      color: "bg-blue-500",
      details: [
        "Voice-powered registration",
        "Photo ID capture",
        "Basic health metrics",
      ],
    },
    {
      icon: <Heart size={32} />,
      title: "Log Health Visit",
      description:
        "Document patient interactions, symptoms, vital signs, and observations during field visits",
      color: "bg-green-500",
      details: ["Symptom recording", "Vital signs entry", "Treatment notes"],
    },
    {
      icon: <Brain size={32} />,
      title: "AI Guidance",
      description:
        "Receive AI-powered health insights, treatment recommendations, and risk assessments",
      color: "bg-orange-500",
      details: ["Symptom analysis", "Risk assessment", "Treatment suggestions"],
    },
    {
      icon: <RefreshCw size={32} />,
      title: "Smart Sync",
      description:
        "Automatically synchronize all data with PHC systems when internet connectivity is available",
      color: "bg-purple-500",
      details: ["Automatic sync", "Data validation", "Report generation"],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
            <Heart size={16} />
            <span className="text-sm font-medium">Simple Workflow</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-blue-600">ASHA Triad</span> Works
            <br />
            <span className="text-green-600">In 4 Simple Steps</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed for simplicity and efficiency, our workflow ensures ASHA
            workers can focus on patient care while technology handles the
            complexity.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step number and icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center text-white mx-auto shadow-lg relative z-10`}
                  >
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-600 z-20">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-2 text-sm">
                  {step.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-center justify-center space-x-2 text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <ArrowRight size={24} className="text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Workflow Benefits */}
        <motion.div
          className="mt-20 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Built for <span className="text-blue-600">Efficiency</span> &{" "}
              <span className="text-green-600">Simplicity</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every step is optimized for field conditions, with offline
              capabilities and intuitive interfaces that work for users with
              varying digital literacy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-xl p-6 shadow-sm text-center"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <UserPlus size={24} className="text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">
                Quick Registration
              </h4>
              <p className="text-sm text-gray-600">
                Register patients in under 2 minutes using voice commands
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-sm text-center"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Brain size={24} className="text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Smart Assistance</h4>
              <p className="text-sm text-gray-600">
                AI provides real-time guidance during patient interactions
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 shadow-sm text-center"
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <RefreshCw size={24} className="text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Seamless Sync</h4>
              <p className="text-sm text-gray-600">
                Automatic data synchronization when connectivity returns
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
