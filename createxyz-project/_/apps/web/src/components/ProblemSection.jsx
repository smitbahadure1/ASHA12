import { AlertTriangle, Wifi, FileText, Globe2, Clock } from "lucide-react";
import { motion } from "motion/react";

export default function ProblemSection() {
  const problems = [
    {
      icon: <Wifi size={24} />,
      title: "Poor Connectivity",
      description: "Unreliable internet and network coverage in rural areas makes existing apps unusable",
      color: "bg-red-100 text-red-600",
      stat: "70% of rural areas have poor connectivity"
    },
    {
      icon: <FileText size={24} />,
      title: "Manual Record Keeping",
      description: "Paper-based systems lead to data loss, delays, and difficulty in tracking patient progress",
      color: "bg-orange-100 text-orange-600",
      stat: "80% still use paper records"
    },
    {
      icon: <Globe2 size={24} />,
      title: "Language Barriers",
      description: "Most healthcare apps are only in English, creating barriers for local ASHA workers",
      color: "bg-purple-100 text-purple-600",
      stat: "300+ regional languages"
    },
    {
      icon: <Clock size={24} />,
      title: "Critical Health Impact",
      description: "Missed ANC visits, delayed immunizations, and poor health monitoring affect community health",
      color: "bg-blue-100 text-blue-600",
      stat: "40% increase in missed visits"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full mb-4">
            <AlertTriangle size={16} />
            <span className="text-sm font-medium">Critical Healthcare Challenges</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Problems ASHA Workers
            <br />
            <span className="text-red-600">Face Every Day</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ASHA workers are the backbone of India's healthcare system, but they face significant 
            technological and systemic barriers that prevent them from delivering optimal care.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${problem.color} rounded-lg flex items-center justify-center mb-6`}>
                {problem.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{problem.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{problem.description}</p>
              
              {/* Stat */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-gray-900 mb-1">{problem.stat}</div>
                <div className="text-sm text-gray-500">Current situation</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Summary */}
        <motion.div 
          className="mt-16 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The Result: Healthcare Gaps in Rural India
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              These challenges create a domino effect that impacts the entire healthcare ecosystem, 
              from individual patient outcomes to community health statistics.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">2.3M</div>
                <div className="text-gray-600">Missed Healthcare Visits Annually</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">45%</div>
                <div className="text-gray-600">Incomplete Patient Records</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">1.2M</div>
                <div className="text-gray-600">ASHA Workers Need Digital Tools</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}