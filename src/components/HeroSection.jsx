import { useState } from "react";
import { MessageCircle, Heart, Users } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/utils/LanguageContext";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const { isHindi } = useLanguage();

  const text = {
    badge: isHindi
      ? "ऑफलाइन-फर्स्ट एआई स्वास्थ्य समाधान"
      : "Offline-First AI Healthcare Solution",
    title: {
      healthcare: isHindi ? "स्वास्थ्य सेवा" : "Healthcare",
      anywhere: isHindi ? "कहीं भी," : "Anywhere,",
      anytime: isHindi ? "कभी भी" : "Anytime",
    },
    subtitle: isHindi
      ? "ASHA कार्यकर्ताओं को एक ऑफलाइन-फर्स्ट, एआई-संचालित स्वास्थ्य साथी के साथ सशक्त बनाना जो इंटरनेट कनेक्टिविटी के बिना भी काम करता है।"
      : "Empowering ASHA workers with an offline-first, AI-powered health companion that works even without internet connectivity.",
    benefits: {
      worksOffline: isHindi ? "ऑफलाइन काम करता है" : "Works Offline",
      aiPowered: isHindi ? "एआई-संचालित" : "AI-Powered",
      multilingual: isHindi ? "बहुभाषी" : "Multilingual",
      voiceEnabled: isHindi ? "आवाज सक्षम" : "Voice Enabled",
    },
    buttons: {
      getInTouch: isHindi ? "एक्सेस का अनुरोध करें" : "Request Access",
    },
    trustIndicators: {
      ashaWorkers: isHindi ? "10,000+ ASHA कार्यकर्ता" : "10,000+ ASHA Workers",
      patientsServed: isHindi
        ? "50,000+ मरीजों की सेवा की गई"
        : "50,000+ Patients Served",
    },
    appContent: {
      welcome: isHindi ? "स्वागत है, प्रिया" : "Welcome, Priya",
      role: isHindi
        ? "ASHA कार्यकर्ता, गांव भरतपुर"
        : "ASHA Worker, Village Bharatpur",
      registerPatient: isHindi ? "रोगी पंजीकरण" : "Register Patient",
      healthCheck: isHindi ? "स्वास्थ्य जांच" : "Health Check",
      todaysVisits: isHindi ? "आज की विज़िट" : "Today's Visits",
      ancVisit: isHindi ? "ANC विज़िट" : "ANC Visit",
      immunization: isHindi ? "टीकाकरण" : "Immunization",
      workingOffline: isHindi ? "ऑफलाइन कार्य कर रहा है" : "Working Offline",
      aiActive: isHindi ? "एआई सक्रिय" : "AI Active",
      synced: isHindi ? "सिंक किया गया" : "Synced",
    },
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 pt-8 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            className="lg:pr-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">{text.badge}</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-blue-600">{text.title.healthcare}</span>{" "}
              {text.title.anywhere}{" "}
              <span className="text-green-600">{text.title.anytime}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              {text.subtitle}
            </p>

            {/* Key benefits */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">
                  {text.benefits.worksOffline}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">
                  {text.benefits.aiPowered}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">
                  {text.benefits.multilingual}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">
                  {text.benefits.voiceEnabled}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex items-center justify-center space-x-2 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-4 rounded-lg transition-colors">
                <MessageCircle size={20} />
                <span>{text.buttons.getInTouch}</span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Users size={16} />
                <span>{text.trustIndicators.ashaWorkers}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart size={16} />
                <span>{text.trustIndicators.patientsServed}</span>
              </div>
            </div>
          </motion.div>

          {/* Right column - Visual */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Phone mockup container */}
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
              <div
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-green-200 rounded-full opacity-20 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>

              {/* Main phone mockup */}
              <div className="relative bg-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden w-72 h-[580px]">
                  {/* Status bar */}
                  <div className="bg-blue-600 h-8 flex items-center justify-center">
                    <span className="text-white text-xs font-medium">
                      ASHA Triad
                    </span>
                  </div>

                  {/* App content */}
                  <div className="p-4 h-full bg-gradient-to-b from-blue-50 to-green-50">
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                        <Heart size={24} className="text-white" />
                      </div>
                      <h3 className="font-bold text-gray-800">
                        {text.appContent.welcome}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {text.appContent.role}
                      </p>
                    </div>

                    {/* Quick actions */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                          <Users size={16} className="text-blue-600" />
                        </div>
                        <p className="text-xs font-medium text-gray-800">
                          {text.appContent.registerPatient}
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm border border-green-100">
                        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                          <Heart size={16} className="text-green-600" />
                        </div>
                        <p className="text-xs font-medium text-gray-800">
                          {text.appContent.healthCheck}
                        </p>
                      </div>
                    </div>

                    {/* Recent activity */}
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-medium text-gray-800 mb-3 text-sm">
                        {text.appContent.todaysVisits}
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <div>
                            <p className="text-xs font-medium text-gray-800">
                              Sunita Devi
                            </p>
                            <p className="text-xs text-gray-500">
                              {text.appContent.ancVisit}
                            </p>
                          </div>
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div>
                            <p className="text-xs font-medium text-gray-800">
                              Baby Raj
                            </p>
                            <p className="text-xs text-gray-500">
                              {text.appContent.immunization}
                            </p>
                          </div>
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Offline indicator */}
                    <div className="mt-4 flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">
                        {text.appContent.workingOffline}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-2 -right-6 bg-white p-3 rounded-lg shadow-lg border border-blue-100"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">
                    {text.appContent.aiActive}
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-6 bg-white p-3 rounded-lg shadow-lg border border-green-100"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">
                    {text.appContent.synced}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
