import { TrendingUp, Users, Heart, Building2 } from "lucide-react";
import { motion } from "motion/react";

export default function ImpactSection() {
  const impacts = [
    {
      icon: <Users size={32} />,
      title: "Frontline Workers",
      subtitle: "ASHA & ANM Staff",
      color: "bg-blue-500",
      benefits: [
        "Reduce manual workload by 60%",
        "Improve decision-making with AI insights",
        "Access tools in local language",
        "Work effectively without internet"
      ],
      stat: "1.2M Workers Empowered"
    },
    {
      icon: <Heart size={32} />,
      title: "Patients",
      subtitle: "Rural Community Members",
      color: "bg-green-500",
      benefits: [
        "Receive timely healthcare reminders",
        "Access accurate digital health records",
        "Get better quality care delivery",
        "Benefit from consistent follow-ups"
      ],
      stat: "50M+ Lives Impacted"
    },
    {
      icon: <Building2 size={32} />,
      title: "Healthcare System",
      subtitle: "PHCs & Policy Makers",
      color: "bg-purple-500",
      benefits: [
        "Real-time field data visibility",
        "Reliable grassroots health statistics",
        "Improved resource allocation",
        "Evidence-based policy decisions"
      ],
      stat: "25,000+ PHCs Connected"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-white">
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
            <TrendingUp size={16} />
            <span className="text-sm font-medium">Measurable Impact</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-green-600">Transforming</span> Healthcare
            <br />
            For Everyone
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ASHA Triad creates a ripple effect of positive change across the entire 
            healthcare ecosystem, from individual workers to the broader community health infrastructure.
          </p>
        </motion.div>

        {/* Impact Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 ${impact.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {impact.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{impact.title}</h3>
                <p className="text-sm text-gray-600 font-medium">{impact.subtitle}</p>
              </div>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                {impact.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Stat */}
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-gray-900 mb-1">{impact.stat}</div>
                <div className="text-sm text-gray-500">Projected Impact</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Impact Stats */}
        <motion.div 
          className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              The <span className="text-blue-600">Bigger Picture</span> Impact
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When technology meets compassionate healthcare delivery, the results speak for themselves. 
              Here's what we aim to achieve at scale.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-700 font-medium">Efficiency Increase</div>
              <div className="text-sm text-gray-500 mt-1">In healthcare delivery</div>
            </motion.div>

            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-gray-700 font-medium">Data Accuracy</div>
              <div className="text-sm text-gray-500 mt-1">Digital vs paper records</div>
            </motion.div>

            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">70%</div>
              <div className="text-gray-700 font-medium">Cost Reduction</div>
              <div className="text-sm text-gray-500 mt-1">In healthcare administration</div>
            </motion.div>

            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Availability</div>
              <div className="text-sm text-gray-500 mt-1">Offline-first design</div>
            </motion.div>
          </div>

          {/* Success Stories Preview */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm">
            <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Real Success Stories</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-lg font-bold text-blue-600 mb-2">"Game Changer"</div>
                <p className="text-sm text-gray-600">Priya, ASHA Worker, Rajasthan</p>
                <p className="text-xs text-gray-500 mt-2">"Now I can help patients even without network"</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-lg font-bold text-green-600 mb-2">"Life Saver"</div>
                <p className="text-sm text-gray-600">Dr. Sharma, PHC Bharatpur</p>
                <p className="text-xs text-gray-500 mt-2">"Real-time field data helps us make better decisions"</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-lg font-bold text-purple-600 mb-2">"Revolutionary"</div>
                <p className="text-sm text-gray-600">Health Ministry Official</p>
                <p className="text-xs text-gray-500 mt-2">"Finally, accurate grassroots health data"</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}