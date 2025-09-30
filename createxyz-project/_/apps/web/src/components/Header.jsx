import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/utils/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentLanguage, toggleLanguage, isHindi } = useLanguage();

  const navItems = {
    challenges: isHindi ? "चुनौतियां" : "Challenges",
    solution: isHindi ? "समाधान" : "Solution",
    features: isHindi ? "विशेषताएं" : "Features",
    impact: isHindi ? "प्रभाव" : "Impact",
    contact: isHindi ? "एक्सेस" : "Access",
  };

  const text = {
    tagline: isHindi
      ? "स्वास्थ्य सेवा कहीं भी, कभी भी"
      : "Healthcare Anywhere, Anytime",
  };

  return (
    <>
      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white border-b border-green-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <span className="font-bold text-xl text-gray-800">
                  ASHA Triad
                </span>
                <div className="text-xs text-green-600 font-medium">
                  {text.tagline}
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#problem"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {navItems.challenges}
              </a>
              <a
                href="#solution"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {navItems.solution}
              </a>
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {navItems.features}
              </a>
              <a
                href="#impact"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {navItems.impact}
              </a>
              <a
                href="#contact"
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {navItems.contact}
              </a>
            </nav>

            {/* Right side - Language toggle */}
            <div className="flex items-center space-x-4">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Globe size={16} className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700">
                  {currentLanguage}
                </span>
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-3 pt-4">
                <a
                  href="#problem"
                  className="text-gray-600 hover:text-blue-600 font-medium py-2"
                >
                  {navItems.challenges}
                </a>
                <a
                  href="#solution"
                  className="text-gray-600 hover:text-blue-600 font-medium py-2"
                >
                  {navItems.solution}
                </a>
                <a
                  href="#features"
                  className="text-gray-600 hover:text-blue-600 font-medium py-2"
                >
                  {navItems.features}
                </a>
                <a
                  href="#impact"
                  className="text-gray-600 hover:text-blue-600 font-medium py-2"
                >
                  {navItems.impact}
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-blue-600 font-medium py-2"
                >
                  {navItems.contact}
                </a>
                <div className="pt-4 border-t border-gray-100">
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors w-fit"
                  >
                    <Globe size={16} className="text-gray-600" />
                    <span className="text-sm font-medium text-gray-700">
                      {currentLanguage}
                    </span>
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
