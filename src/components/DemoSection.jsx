import { Smartphone, Mic, WifiOff, Play } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useLanguage } from "@/utils/LanguageContext";

export default function DemoSection() {
  const [activeDemo, setActiveDemo] = useState(0);
  const { isHindi } = useLanguage();

  const text = {
    badge: isHindi ? "लाइव डेमो" : "Live Demo",
    title: isHindi ? "ASHA Triad को कार्य में देखें" : "See ASHA Triad In Action",
    description: isHindi
      ? "वास्तविक उपयोग परिदृश्यों के साथ हमारे इंटरैक्टिव मोबाइल इंटरफेस डेमो के माध्यम से ऑफलाइन-फर्स्ट स्वास्थ्य प्रौद्योगिकी की शक्ति का अनुभव करें।"
      : "Experience the power of offline-first healthcare technology with our interactive mobile interface demos showcasing real-world usage scenarios.",
    demoFeatures: isHindi ? "इंटरैक्टिव डेमो सुविधाएं" : "Interactive Demo Features",
    offline: isHindi ? "ऑफलाइन" : "Offline",
    voiceReady: isHindi ? "आवाज तैयार" : "Voice Ready",
    fullOffline: isHindi ? "100% ऑफलाइन" : "100% Offline",
  };

  const demos = [
    {
      title: isHindi ? "आवाज पंजीकरण" : "Voice Registration",
      description: isHindi
        ? "स्थानीय भाषा में आवाज कमांड का उपयोग करके रोगियों को पंजीकृत करें"
        : "Register patients using voice commands in local language",
      feature: isHindi ? "बहुभाषी आवाज इनपुट" : "Multilingual Voice Input",
    },
    {
      title: isHindi ? "ऑफलाइन स्वास्थ्य जांच" : "Offline Health Check",
      description: isHindi
        ? "इंटरनेट कनेक्टिविटी के बिना पूर्ण स्वास्थ्य मूल्यांकन"
        : "Complete health assessments without internet connectivity",
      feature: isHindi ? "ऑफलाइन-फर्स्ट डिज़ाइन" : "Offline-First Design",
    },
    {
      title: isHindi ? "एआई लक्षण विश्लेषण" : "AI Symptom Analysis",
      description: isHindi
        ? "तत्काल एआई-संचालित स्वास्थ्य अंतर्दृष्टि और सिफारिशें प्राप्त करें"
        : "Get instant AI-powered health insights and recommendations",
      feature: isHindi ? "स्मार्ट एआई सहायता" : "Smart AI Assistance",
    },
  ];

  const demoContent = {
    patientRegistration: {
      title: isHindi ? "रोगी पंजीकरण" : "Patient Registration",
      subtitle: isHindi
        ? "आवाज-संचालित रोगी सेटअप"
        : "Voice-powered patient setup",
      voicePrompt: isHindi
        ? 'कहें: "नया मरीज़ रजिस्टर करें"'
        : 'Say: "नया मरीज़ रजिस्टर करें"',
      voiceRecognized: isHindi ? "आवाज पहचानी गई ✓" : "Voice Recognized ✓",
      patientName: isHindi ? "रोगी का नाम" : "Patient Name",
      age: isHindi ? "उम्र" : "Age",
      village: isHindi ? "गांव" : "Village",
      ageValue: isHindi ? "28 साल" : "28 years",
    },
    healthAssessment: {
      title: isHindi ? "स्वास्थ्य मूल्यांकन" : "Health Assessment",
      subtitle: isHindi
        ? "पूर्ण ऑफलाइन स्वास्थ्य जांच"
        : "Complete offline health check",
      temperature: isHindi ? "तापमान" : "Temperature",
      bloodPressure: isHindi ? "रक्तचाप" : "Blood Pressure",
      heartRate: isHindi ? "हृदय गति" : "Heart Rate",
      allVitalsNormal: isHindi ? "सभी जरूरी संकेतक सामान्य" : "All Vitals Normal",
      dataSaved: isHindi
        ? "डेटा स्थानीय रूप से सेव किया गया। ऑनलाइन होने पर सिंक होगा।"
        : "Data saved locally. Will sync when online.",
    },
    aiInsights: {
      title: isHindi ? "एआई स्वास्थ्य अंतर्दृष्टि" : "AI Health Insights",
      subtitle: isHindi ? "स्मार्ट लक्षण विश्लेषण" : "Smart symptom analysis",
      analyzing: isHindi ? "लक्षणों का विश्लेषण..." : "Analyzing symptoms...",
      assessment: isHindi ? "मूल्यांकन" : "Assessment",
      assessmentValue: isHindi
        ? "हल्का बुखार और सिरदर्द"
        : "Mild fever with headache",
      recommendation: isHindi ? "सिफारिश" : "Recommendation",
      recommendationValue: isHindi
        ? "आराम, पानी पीना, 24 घंटे निगरानी"
        : "Rest, hydration, monitor for 24hrs",
      alert: isHindi ? "चेतावनी" : "Alert",
      alertValue: isHindi
        ? "बुखार बना रहे तो PHC भेजें"
        : "Refer to PHC if fever persists",
    },
  };

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
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full mb-4">
            <Smartphone size={16} />
            <span className="text-sm font-medium">{text.badge}</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {text.title}
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {text.description}
          </p>
        </motion.div>

        {/* Demo Container */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Mobile Demo */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Phone Frame */}
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
              <div
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-green-200 rounded-full opacity-30 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Phone mockup */}
              <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden w-80 h-[640px]">
                  {/* Status bar */}
                  <div className="bg-blue-600 h-10 flex items-center justify-between px-4">
                    <span className="text-white text-sm font-medium">
                      ASHA Triad
                    </span>
                    <div className="flex items-center space-x-1">
                      <WifiOff size={16} className="text-white" />
                      <span className="text-white text-xs">{text.offline}</span>
                    </div>
                  </div>

                  {/* App content */}
                  <div className="p-6 h-full bg-gradient-to-b from-blue-50 to-white">
                    {/* Demo content based on active demo */}
                    {activeDemo === 0 && (
                      <>
                        <div className="text-center mb-8">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {demoContent.patientRegistration.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {demoContent.patientRegistration.subtitle}
                          </p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100 mb-6">
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                              <Mic size={24} className="text-blue-600" />
                            </div>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-600 mb-3">
                              {demoContent.patientRegistration.voicePrompt}
                            </p>
                            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs inline-block">
                              {demoContent.patientRegistration.voiceRecognized}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <label className="text-sm font-medium text-gray-700">
                              {demoContent.patientRegistration.patientName}
                            </label>
                            <div className="mt-1 text-gray-900">
                              Sunita Devi
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <label className="text-sm font-medium text-gray-700">
                              {demoContent.patientRegistration.age}
                            </label>
                            <div className="mt-1 text-gray-900">
                              {demoContent.patientRegistration.ageValue}
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-gray-200">
                            <label className="text-sm font-medium text-gray-700">
                              {demoContent.patientRegistration.village}
                            </label>
                            <div className="mt-1 text-gray-900">Bharatpur</div>
                          </div>
                        </div>
                      </>
                    )}

                    {activeDemo === 1 && (
                      <>
                        <div className="text-center mb-8">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {demoContent.healthAssessment.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {demoContent.healthAssessment.subtitle}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="bg-white rounded-lg p-4 border border-green-200">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-700">
                                {demoContent.healthAssessment.temperature}
                              </span>
                              <span className="text-green-600 font-bold">
                                98.6°F
                              </span>
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-blue-200">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-700">
                                {demoContent.healthAssessment.bloodPressure}
                              </span>
                              <span className="text-blue-600 font-bold">
                                120/80
                              </span>
                            </div>
                          </div>
                          <div className="bg-white rounded-lg p-4 border border-purple-200">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-700">
                                {demoContent.healthAssessment.heartRate}
                              </span>
                              <span className="text-purple-600 font-bold">
                                72 bpm
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 bg-green-50 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-medium text-green-800">
                              {demoContent.healthAssessment.allVitalsNormal}
                            </span>
                          </div>
                          <p className="text-xs text-green-700">
                            {demoContent.healthAssessment.dataSaved}
                          </p>
                        </div>
                      </>
                    )}

                    {activeDemo === 2 && (
                      <>
                        <div className="text-center mb-8">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">
                            {demoContent.aiInsights.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {demoContent.aiInsights.subtitle}
                          </p>
                        </div>

                        <div className="bg-white rounded-lg p-6 border border-orange-200 mb-6">
                          <div className="text-center mb-4">
                            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2">
                              <span className="text-orange-600 font-bold">
                                AI
                              </span>
                            </div>
                            <p className="text-sm text-gray-600">
                              {demoContent.aiInsights.analyzing}
                            </p>
                          </div>

                          <div className="space-y-3">
                            <div className="bg-orange-50 rounded-lg p-3">
                              <div className="text-sm font-medium text-orange-800 mb-1">
                                {demoContent.aiInsights.assessment}
                              </div>
                              <div className="text-xs text-orange-700">
                                {demoContent.aiInsights.assessmentValue}
                              </div>
                            </div>
                            <div className="bg-blue-50 rounded-lg p-3">
                              <div className="text-sm font-medium text-blue-800 mb-1">
                                {demoContent.aiInsights.recommendation}
                              </div>
                              <div className="text-xs text-blue-700">
                                {demoContent.aiInsights.recommendationValue}
                              </div>
                            </div>
                            <div className="bg-red-50 rounded-lg p-3">
                              <div className="text-sm font-medium text-red-800 mb-1">
                                {demoContent.aiInsights.alert}
                              </div>
                              <div className="text-xs text-red-700">
                                {demoContent.aiInsights.alertValue}
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Floating status indicators */}
              <motion.div
                className="absolute -top-4 -right-4 bg-green-500 text-white p-2 rounded-lg shadow-lg text-xs"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {text.fullOffline}
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-2 rounded-lg shadow-lg text-xs"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                {text.voiceReady}
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Demo Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {text.demoFeatures}
              </h3>

              {demos.map((demo, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    activeDemo === index
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                  }`}
                  onClick={() => setActiveDemo(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        activeDemo === index ? "bg-blue-500" : "bg-gray-100"
                      }`}
                    >
                      <Play
                        size={20}
                        className={
                          activeDemo === index ? "text-white" : "text-gray-600"
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 mb-1">
                        {demo.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        {demo.description}
                      </p>
                      <div className="text-xs font-medium text-blue-600">
                        {demo.feature}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
