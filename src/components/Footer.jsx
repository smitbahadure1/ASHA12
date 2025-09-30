import { Heart, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <span className="font-bold text-xl">ASHA Triad</span>
                <div className="text-sm text-green-400 font-medium">Healthcare Anywhere, Anytime</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Empowering rural healthcare delivery with offline-first, AI-powered technology 
              designed specifically for ASHA workers and PHC staff across India.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">hello@ashatriad.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-green-400" />
                <span className="text-gray-300">+91 9876 543 210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-purple-400" />
                <span className="text-gray-300">New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#problem" className="text-gray-300 hover:text-white transition-colors">
                  Challenges
                </a>
              </li>
              <li>
                <a href="#solution" className="text-gray-300 hover:text-white transition-colors">
                  Solution
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#impact" className="text-gray-300 hover:text-white transition-colors">
                  Impact
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Request Access
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  User Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Training Videos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Technical Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Release Notes
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white">f</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white">t</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-6 h-6 bg-blue-700 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white">in</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-xs font-bold text-white">yt</span>
                </div>
              </a>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex items-center space-x-2 text-gray-400">
                <Heart size={16} className="text-red-500" />
                <span className="text-sm">Made with love for rural healthcare</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 ASHA Triad. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="font-bold text-white mb-3">About ASHA Triad</h4>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              ASHA Triad is a revolutionary healthcare technology platform specifically designed 
              for India's ASHA (Accredited Social Health Activist) workers. Our offline-first, 
              AI-powered solution addresses the unique challenges of rural healthcare delivery, 
              providing tools that work seamlessly even without internet connectivity.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-blue-400 font-bold text-lg">1.2M+</div>
                <div className="text-gray-400 text-xs">ASHA Workers Targeted</div>
              </div>
              <div>
                <div className="text-green-400 font-bold text-lg">25,000+</div>
                <div className="text-gray-400 text-xs">PHCs Connected</div>
              </div>
              <div>
                <div className="text-purple-400 font-bold text-lg">50M+</div>
                <div className="text-gray-400 text-xs">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}