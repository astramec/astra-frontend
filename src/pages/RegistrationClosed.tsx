import { Sparkles, Lock, Calendar, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const RegistrationClosed = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-indigo-900">
      {/* Static deep space background */}
      <div className="absolute inset-0">
        {/* Static nebula clouds */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-900/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/2 w-64 h-64 bg-indigo-800/10 rounded-full blur-2xl"></div>
        
        {/* Static stars */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              Math.random() > 0.8 ? 'w-2 h-2 bg-blue-300' : 
              Math.random() > 0.6 ? 'w-1.5 h-1.5 bg-white' : 
              'w-1 h-1 bg-gray-300'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <div className="text-center animate-fade-in max-w-4xl mx-auto">
          {/* Header */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 mb-8">
            <Star className="h-12 w-12 text-cyan-400 animate-pulse" />
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
              ETHEREAL
            </h1>
            <Star className="h-12 w-12 text-purple-400 animate-pulse" />
          </div>

          <p className="text-2xl sm:text-3xl md:text-4xl text-gray-200 mb-6 font-light tracking-wide">
            -Where Tech and Thrill Collide-
          </p>

          {/* Registration Closed Card */}
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-cyan-500/30 shadow-2xl max-w-2xl mx-auto mb-8">
            <div className="flex flex-col items-center space-y-6">
              <div className="p-4 bg-red-500/30 rounded-full border border-red-400/50">
                <Lock className="h-12 w-12 text-red-300" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Registration Closed
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-300 text-center leading-relaxed">
                Thank you for your interest in ETHEREAL 2025! 
                Registration for this year's event has officially closed.<br />
                For more details contact: mecastra25@gmail.com or https://instagram.com/astramec
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-cyan-400" />
                  <span>October 25-26, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-purple-400" />
                  <span>24-Hour Event</span>
                </div>
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="bg-black/30 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-purple-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
              What You Missed
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3 p-4 rounded-xl bg-cyan-900/20 border border-cyan-500/30">
                <div className="p-3 bg-cyan-500/20 rounded-full w-fit mx-auto border border-cyan-400/50">
                  <span className="text-2xl">🤖</span>
                </div>
                <h4 className="text-xl font-semibold text-cyan-300">Build Your Robot</h4>
                <p className="text-gray-400 text-sm">
                  Hands-on robotics workshop with professional guidance and Autodesk certification
                </p>
              </div>
              
              <div className="space-y-3 p-4 rounded-xl bg-purple-900/20 border border-purple-500/30">
                <div className="p-3 bg-purple-500/20 rounded-full w-fit mx-auto border border-purple-400/50">
                  <span className="text-2xl">🎃</span>
                </div>
                <h4 className="text-xl font-semibold text-purple-300">Halo-Ween</h4>
                <p className="text-gray-400 text-sm">
                  Chillingly fun Halloween celebration in the middle of all the tech and tension
                </p>
              </div>
              
              <div className="space-y-3 p-4 rounded-xl bg-red-900/20 border border-red-500/30">
                <div className="p-3 bg-red-500/20 rounded-full w-fit mx-auto border border-red-400/50">
                  <span className="text-2xl">⚔️</span>
                </div>
                <h4 className="text-xl font-semibold text-red-300">Roborumble</h4>
                <p className="text-gray-400 text-sm">
                  Action-packed robowar showdown where your built bot goes head-to-head
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              For any inquiries, please contact the ASTRA MEC team
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2024 ASTRA MEC. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
    </div>
  );
};

export default RegistrationClosed;
