import React from 'react';
import { Users, Moon, Sun, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="relative z-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="p-3 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Users className="h-7 w-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                Assessment
              </h1>
              <p className="text-sm text-gray-300">Smart Hiring Platform</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-300 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                <span>$100M Series A</span>
              </div>
              <div className="text-sm text-gray-300 font-medium">
                Scaling Fast
              </div>
            </div>
            
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300 hover:scale-110"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}