import { Check, X, Trophy } from "lucide-react";
import { motion } from "motion/react";

export default function CompetitiveAdvantageSection() {
  const competitors = [
    {
      name: "RCH Portal",
      type: "Government Portal",
      features: {
        offline: false,
        multilingual: false,
        voice: false,
        ai: false,
        mobile: true,
        asha: false
      }
    },
    {
      name: "CoWIN",
      type: "Vaccination Platform",
      features: {
        offline: false,
        multilingual: true,
        voice: false,
        ai: false,
        mobile: true,
        asha: false
      }
    },
    {
      name: "Practo",
      type: "Healthcare App",
      features: {
        offline: false,
        multilingual: false,
        voice: false,
        ai: true,
        mobile: true,
        asha: false
      }
    },
    {
      name: "Ada Health",
      type: "Symptom Checker",
      features: {
        offline: false,
        multilingual: false,
        voice: false,
        ai: true,
        mobile: true,
        asha: false
      }
    },
    {
      name: "ASHA Triad",
      type: "Complete Solution",
      features: {
        offline: true,
        multilingual: true,
        voice: true,
        ai: true,
        mobile: true,
        asha: true
      },
      highlight: true
    }
  ];

  const featureLabels = {
    offline: "Offline-First",
    multilingual: "Multilingual",
    voice: "Voice Interface",
    ai: "AI-Powered",
    mobile: "Mobile Optimized",
    asha: "ASHA-Centric"
  };

  const advantages = [
    {
      title: "Truly Offline-First",
      description: "Only ASHA Triad works 100% offline with full functionality, automatically syncing when connectivity returns.",
      icon: "📶"
    },
    {
      title: "ASHA-Centric Design",
      description: "Purpose-built for ASHA workers' specific workflows, unlike generic healthcare apps adapted for rural use.",
      icon: "👩‍⚕️"
    },
    {
      title: "Multilingual Voice AI",
      description: "Advanced voice interface supporting multiple regional languages with AI-powered understanding.",
      icon: "🗣️"
    },
    {
      title: "Low Digital Literacy Focus",
      description: "Designed for users with varying technical skills, featuring intuitive voice commands and simple interfaces.",
      icon: "🎯"
    },
    {
      title: "Complete Ecosystem",
      description: "Comprehensive solution covering patient registration, health tracking, AI analysis, and supervisory dashboards.",
      icon: "🔄"
    },
    {
      title: "SMS Integration",
      description: "Unique SMS alert system for patients without smartphones, ensuring no one is left behind.",
      icon: "📱"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full mb-4">
            <Trophy size={16} />
            <span className="text-sm font-medium">Competitive Advantage</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-blue-600">ASHA Triad</span> Stands
            <br />
            <span className="text-green-600">Above the Rest</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While other solutions focus on urban healthcare or specific use cases, 
            ASHA Triad is purpose-built for rural healthcare workers and their unique challenges.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div 
          className="mb-16 overflow-x-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 min-w-[800px]">
            {/* Header Row */}
            <div className="grid grid-cols-7 border-b border-gray-200">
              <div className="p-6">
                <h3 className="font-bold text-gray-900">Platform</h3>
              </div>
              {Object.values(featureLabels).map((label, index) => (
                <div key={index} className="p-6 text-center">
                  <h4 className="font-medium text-gray-700 text-sm">{label}</h4>
                </div>
              ))}
            </div>

            {/* Comparison Rows */}
            {competitors.map((competitor, index) => (
              <motion.div
                key={index}
                className={`grid grid-cols-7 border-b border-gray-100 last:border-b-0 ${
                  competitor.highlight ? 'bg-blue-50' : 'bg-white'
                } hover:bg-gray-50 transition-colors`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="p-6">
                  <div className="flex items-center space-x-3">
                    {competitor.highlight && (
                      <Trophy size={20} className="text-yellow-500" />
                    )}
                    <div>
                      <h4 className={`font-bold ${competitor.highlight ? 'text-blue-600' : 'text-gray-900'}`}>
                        {competitor.name}
                      </h4>
                      <p className="text-sm text-gray-500">{competitor.type}</p>
                    </div>
                  </div>
                </div>

                {Object.keys(featureLabels).map((feature, featureIndex) => (
                  <div key={featureIndex} className="p-6 text-center">
                    {competitor.features[feature] ? (
                      <Check size={20} className="text-green-500 mx-auto" />
                    ) : (
                      <X size={20} className="text-red-400 mx-auto" />
                    )}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Advantages */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Unique</span> Advantages
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ASHA Triad isn't just another healthcare app. It's a purpose-built solution 
              that addresses the specific challenges of rural healthcare delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h4>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 lg:p-12 text-center text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of ASHA workers who are already transforming rural healthcare 
            with our revolutionary offline-first platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors">
              Request Access
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-colors">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}