import { CheckCircle, ArrowRight, Users, Brain, Globe, Smartphone } from "lucide-react";
import { motion } from "motion/react";

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 bg-white">
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
            <CheckCircle size={16} />
            <span className="text-sm font-medium">Complete Solution</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Introducing <span className="text-blue-600">ASHA Triad</span>
            <br />
            <span className="text-green-600">The Ultimate Healthcare Companion</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A revolutionary offline-first, AI-powered mobile application designed specifically 
            for ASHA workers, PHC staff, and rural healthcare management.
          </p>
        </motion.div>

        {/* Main Solution Visual */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Text */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Works Offline. Powered by AI. Built for Everyone.
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  ASHA Triad transforms rural healthcare delivery by providing a comprehensive, 
                  offline-first platform that works seamlessly without internet connectivity, 
                  while offering intelligent AI assistance for better decision-making.
                </p>
                
                {/* Key highlights */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="font-medium text-gray-800">100% Offline Functionality</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="font-medium text-gray-800">AI-Powered Health Insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="font-medium text-gray-800">Multilingual Voice Interface</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                      <CheckCircle size={14} className="text-white" />
                    </div>
                    <span className="font-medium text-gray-800">Smart Data Synchronization</span>
                  </div>
                </div>
              </div>

              {/* Right side - Workflow Visual */}
              <div className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="font-bold text-center text-gray-800 mb-6">Complete Healthcare Workflow</h4>
                  
                  {/* Workflow steps */}
                  <div className="space-y-4">
                    {/* ASHA Worker */}
                    <motion.div 
                      className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <Users size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">ASHA Worker</div>
                        <div className="text-sm text-gray-600">Field data collection & patient care</div>
                      </div>
                    </motion.div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <ArrowRight size={24} className="text-gray-400" />
                    </div>

                    {/* Patient */}
                    <motion.div 
                      className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <Brain size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">AI Analysis</div>
                        <div className="text-sm text-gray-600">Intelligent health insights & recommendations</div>
                      </div>
                    </motion.div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <ArrowRight size={24} className="text-gray-400" />
                    </div>

                    {/* PHC */}
                    <motion.div 
                      className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                        <Globe size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800">PHC Dashboard</div>
                        <div className="text-sm text-gray-600">Real-time monitoring & supervision</div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-white p-3 rounded-lg shadow-lg border border-blue-100"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Smartphone size={24} className="text-blue-600" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Differentiators */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Offline-First Design</h3>
            <p className="text-gray-600">
              Works completely offline with automatic sync when connectivity is available. 
              No internet? No problem.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Insights</h3>
            <p className="text-gray-600">
              Advanced AI provides symptom analysis, treatment recommendations, 
              and health risk assessments in real-time.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe size={32} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Multilingual Support</h3>
            <p className="text-gray-600">
              Voice and text support for multiple regional languages, making it accessible 
              for all ASHA workers.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}