"use client";
// import React, { useState, useEffect } from "react";
import {
  Users,
  Trophy,
  Calendar,
  MapPin,
  MessageCircle,
  Target,
  Zap,
  Shield,
  Star,
  Sparkles,
  Globe,
} from "lucide-react";

export default function About() {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setMousePosition({ x: e.clientX, y: e.clientY });
  //   };
  //
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => window.removeEventListener("mousemove", handleMouseMove);
  // }, []);

  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Cosmic Team Formation",
      description:
          "Connect across galaxies with like-minded athletes and form stellar teams for intergalactic sports activities.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Stellar Event Scheduling",
      description:
          "Organize tournaments that span star systems and training sessions in zero gravity.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Quantum Venue Discovery",
      description:
          "Find and book sports facilities across dimensions with real-time cosmic availability.",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Neural Network Chat",
      description:
          "Engage through advanced quantum communication with the sports multiverse community.",
    },
  ];

  const values = [
    {
      icon: <Target className="h-5 w-5" />,
      title: "Performance Matrix",
      description:
          "AI-powered tools to track progress across multiple dimensions and achieve cosmic goals.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Quantum Connection",
      description:
          "Instantaneous matching across space-time to find teammates in nanoseconds.",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Galactic Security",
      description:
          "Quantum-encrypted profiles and wormhole-secured platform for absolute safety.",
    },
  ];

  return (
      <section className="relative min-h-screen bg-black text-white ">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-black"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-900/10 via-transparent to-purple-900/20"></div>

          {/* Animated Stars */}
          {[...Array(50)].map((_, i) => (
              <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                  }}
              ></div>
          ))}

          {/* Moving Particles */}
          {[...Array(20)].map((_, i) => (
              <div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${10 + Math.random() * 20}s linear infinite`,
                  }}
              ></div>
          ))}
        </div>

        {/* Mouse Trail Effect */}
        <div
            className="fixed w-96 h-96 pointer-events-none z-10 opacity-10"
            style={{
              background: `radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)`,
              // left: mousePosition.x - 192,
              // top: mousePosition.y - 192,
              transition: "all 0.3s ease",
            }}
        ></div>

        <div className="relative z-20 w-full flex gap-8 px-6 md:px-24 py-8 ">
          {/* Floating Sidebar */}
          <div className="sticky flex flex-col w-1/3 top-8 left-0 z-50 gap-8 h-fit">
            <div className="group relative p-8 bg-gradient-to-br from-gray-900/30 via-gray-800/20 to-gray-900/30 backdrop-blur-xl border border-gray-700/30 rounded-3xl hover:border-blue-400/50 transition-all duration-500 shadow-2xl">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative space-y-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Trophy className="h-8 w-8 text-blue-400" />
                    <div className="absolute inset-0 animate-ping">
                      <Trophy className="h-8 w-8 text-blue-400 opacity-30" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    SportConnect
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="px-4 py-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 text-blue-300 border border-blue-400/30 rounded-full text-sm font-medium backdrop-blur-sm">
                    <span className="mr-2">🚀</span>
                    #1 Cosmic Sports Platform
                  </div>

                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex items-center gap-3 group/stat">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                      <span className="group-hover/stat:text-green-300 transition-colors">50K+ Galactic Athletes</span>
                    </div>
                    <div className="flex items-center gap-3 group/stat">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
                      <span className="group-hover/stat:text-blue-300 transition-colors">1000+ Cosmic Venues</span>
                    </div>
                    <div className="flex items-center gap-3 group/stat">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
                      <span className="group-hover/stat:text-purple-300 transition-colors">25+ Dimensional Sports</span>
                    </div>
                  </div>
                </div>

                <button className="group/btn w-full relative px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 overflow-hidden">
                  <span className="relative z-10">Join the Galaxy</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                </button>
              </div>
            </div>

            {/* Secondary floating card */}
            <div className="p-6 bg-gradient-to-br from-gray-900/20 via-gray-800/10 to-gray-900/20 backdrop-blur-xl border border-gray-700/20 rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-5 w-5 text-cyan-400" />
                <span className="text-sm font-medium text-gray-300">Live Galaxy Stats</span>
              </div>
              <div className="space-y-2 text-xs text-gray-400">
                <div>🌟 Active Sessions: 2,847</div>
                <div>⚡ Quantum Matches: 156</div>
                <div>🏆 Tournaments: 42</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col space-y-16">
            {/* Hero Section */}
            <div className="text-center space-y-8 py-12">
              <div className="relative">
                <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                  ABOUT
                  <br />
                  SPORTCONNECT
                </h1>
                <div className="absolute -top-4 -right-4">
                  <Star className="h-8 w-8 text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
                </div>
                <div className="absolute -bottom-2 -left-4">
                  <Sparkles className="h-6 w-6 text-purple-400 animate-bounce" />
                </div>
              </div>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                The ultimate intergalactic platform where athletes transcend dimensions to
                <span className="text-blue-400 font-medium"> connect</span>,
                <span className="text-purple-400 font-medium"> compete</span>, and
                <span className="text-cyan-400 font-medium"> evolve</span>.
                We're revolutionizing how beings across the cosmos discover, organize, and participate in multi-dimensional sports.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group relative p-8 bg-gradient-to-br from-gray-900/30 via-gray-800/20 to-purple-900/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl hover:border-purple-400/50 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <Target className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-purple-400">Cosmic Mission</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    To dissolve the barriers between dimensions in sports participation, creating an inclusive,
                    accessible quantum platform that connects athletes across all skill levels and realities,
                    fostering community, competition, and transcendental growth through cosmic sports.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 bg-gradient-to-br from-gray-900/30 via-gray-800/20 to-cyan-900/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-cyan-500/20 rounded-lg">
                      <Zap className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400">Galactic Vision</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    To become the universal nexus for interstellar sports collaboration, where every athlete
                    can find their perfect quantum match across infinite possibilities, transcending location,
                    dimension, and conventional limitations.
                  </p>
                </div>
              </div>
            </div>

            {/* Target Audience - Enhanced */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Who Joins Our Universe
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Users,
                    title: "Cosmic Warriors",
                    desc: "Weekend adventurers and fitness explorers seeking galactic social sports and stellar connections.",
                    gradient: "from-green-900/40 to-emerald-800/30",
                    borderColor: "border-green-400/30",
                    iconColor: "text-green-400",
                    bgColor: "bg-green-500/20"
                  },
                  {
                    icon: Trophy,
                    title: "Elite Competitors",
                    desc: "Legendary athletes seeking ultimate challenges, interdimensional tournaments, and quantum training.",
                    gradient: "from-orange-900/40 to-red-800/30",
                    borderColor: "border-orange-400/30",
                    iconColor: "text-orange-400",
                    bgColor: "bg-orange-500/20"
                  },
                  {
                    icon: Calendar,
                    title: "Event Architects",
                    desc: "Cosmic organizers, coaches, and clubs who orchestrate events across multiple dimensions.",
                    gradient: "from-purple-900/40 to-violet-800/30",
                    borderColor: "border-purple-400/30",
                    iconColor: "text-purple-400",
                    bgColor: "bg-purple-500/20"
                  }
                ].map((item, index) => (
                    <div
                        key={index}
                        className={`group relative p-8 bg-gradient-to-br ${item.gradient} backdrop-blur-xl border ${item.borderColor} rounded-2xl hover:scale-105 transition-all duration-500 hover:shadow-2xl`}
                    >
                      <div className="text-center space-y-4">
                        <div className={`mx-auto w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                        </div>
                        <h3 className={`text-xl font-bold ${item.iconColor}`}>
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            {/* Core Features - Enhanced */}
            <div className="space-y-10">
              <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                Quantum Core Features
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group relative p-8 bg-gradient-to-br from-gray-900/30 via-gray-800/20 to-gray-900/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-1"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                            {feature.icon}
                          </div>
                        </div>
                        <div className="space-y-3">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            {/* How It Works - Enhanced */}
            <div className="space-y-10">
              <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Quantum Journey Protocol
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { step: "1", title: "Initialize", desc: "Quantum profile creation with cosmic preferences and dimensional skill mapping" },
                  { step: "2", title: "Explore", desc: "Navigate through stellar events, teams, and players across the multiverse" },
                  { step: "3", title: "Synchronize", desc: "Establish quantum connections, join cosmic teams, or architect your own reality" },
                  { step: "4", title: "Transcend", desc: "Experience interdimensional competition and forge eternal cosmic bonds" },
                ].map((item, index) => (
                    <div key={index} className="group text-center space-y-6 hover:-translate-y-2 transition-transform duration-500">
                      <div className="relative mx-auto w-20 h-20 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-2xl shadow-blue-500/25 group-hover:shadow-blue-500/50 transition-all duration-300">
                        <span className="relative z-10">{item.step}</span>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
              </div>
            </div>

            {/* Values - Enhanced */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
                Our Cosmic Differentiators
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                    <div
                        key={index}
                        className="group text-center space-y-4 p-8 bg-gradient-to-br from-gray-900/20 via-gray-800/10 to-gray-900/20 backdrop-blur-xl rounded-2xl border border-gray-700/30 hover:border-blue-400/50 hover:-translate-y-2 transition-all duration-500"
                    >
                      <div className="mx-auto w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                    </div>
                ))}
              </div>
            </div>

            {/* Call to Action - Enhanced */}
            <div className="relative text-center space-y-8 py-16 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-cyan-900/30 backdrop-blur-xl rounded-3xl border border-blue-400/30 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10 opacity-50"></div>

              {/* Floating elements */}
              <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute top-20 right-20 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-10 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>

              <div className="relative z-10 space-y-8">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Ready to Transcend Reality?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Join millions of cosmic athletes who have discovered their ultimate sports dimension.
                  Whether you seek legendary competition, quantum learning, or pure galactic fun,
                  SportConnect is your portal to infinite possibilities.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 overflow-hidden">
                    <span className="relative z-10">Launch Into Galaxy</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
                  <button className="px-8 py-4 border-2 border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-300 bg-transparent hover:bg-blue-400/10 rounded-xl font-medium transition-all duration-300 hover:-translate-y-1">
                    Explore Dimensions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
  );
}