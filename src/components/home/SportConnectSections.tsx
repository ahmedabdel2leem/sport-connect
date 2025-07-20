"use client";
import {
    Play,
    Heart,
    MessageSquare,
    Share2,
    Calendar,
    Clock,
    MapPin,
    Users,
    // Trophy,
    // Zap,
    // Target,
    Shield,
    Star,
    Sparkles,
    // Globe,
    Camera,
    Video,
    TrendingUp,
    Award,
    Rocket,
    Brain,
    Activity,
    UserCheck,
    Crown
} from "lucide-react";

export default function SportConnectSections() {
    // const [activeTab, setActiveTab] = useState('media');

    // Media/Community Feed Data
    const mediaHighlights = [
        {
            id: 1,
            type: 'video',
            user: 'CosmicAthlete_X',
            avatar: '🚀',
            content: 'Just completed my first zero-gravity basketball match! The quantum courts are incredible!',
            media: 'Zero-G Basketball Championship Final',
            likes: 2847,
            comments: 394,
            shares: 158,
            timestamp: '2h ago',
            sport: 'Quantum Basketball'
        },
        {
            id: 2,
            type: 'image',
            user: 'StarRunner_99',
            avatar: '⭐',
            content: 'Training across dimensions has never felt so alive! Thanks to my new interdimensional team.',
            media: 'Interdimensional Training Session',
            likes: 1923,
            comments: 247,
            shares: 89,
            timestamp: '4h ago',
            sport: 'Cosmic Running'
        },
        {
            id: 3,
            type: 'achievement',
            user: 'GalaxyChampion',
            avatar: '🏆',
            content: 'Reached Master Level in Stellar Tennis! Ready for the Universal Championships.',
            media: 'Achievement Unlocked',
            likes: 3264,
            comments: 512,
            shares: 203,
            timestamp: '6h ago',
            sport: 'Stellar Tennis'
        }
    ];

    // Upcoming Events Data
    const upcomingEvents = [
        {
            id: 1,
            title: 'Intergalactic Soccer World Cup',
            date: '2025-08-15',
            time: '18:00 Cosmic Time',
            location: 'Alpha Centauri Stadium',
            participants: 128,
            maxParticipants: 256,
            sport: 'Cosmic Soccer',
            difficulty: 'Professional',
            prize: '50,000 Quantum Credits',
            organizer: 'Galactic Sports Federation',
            image: '🌌'
        },
        {
            id: 2,
            title: 'Zero-G Basketball League Finals',
            date: '2025-07-28',
            time: '20:30 Universal Time',
            location: 'Orbital Arena Station 7',
            participants: 64,
            maxParticipants: 64,
            sport: 'Quantum Basketball',
            difficulty: 'Elite',
            prize: 'Championship Trophy',
            organizer: 'Cosmic Basketball Alliance',
            image: '🏀'
        },
        {
            id: 3,
            title: 'Dimensional Tennis Open',
            date: '2025-07-25',
            time: '14:00 Galaxy Standard',
            location: 'Nebula Courts Complex',
            participants: 89,
            maxParticipants: 128,
            sport: 'Stellar Tennis',
            difficulty: 'Intermediate',
            prize: 'Quantum Racquet Set',
            organizer: 'InterDimensional Tennis Club',
            image: '🎾'
        },
        {
            id: 4,
            title: 'Cosmic Marathon Challenge',
            date: '2025-08-02',
            time: '09:00 Stellar Time',
            location: 'Multiple Dimensions',
            participants: 234,
            maxParticipants: 500,
            sport: 'Dimensional Running',
            difficulty: 'All Levels',
            prize: 'Cosmic Medals & Credits',
            organizer: 'Universal Running Society',
            image: '🏃‍♂️'
        }
    ];

    // Key Features Data
    const keyFeatures = [
        {
            icon: <Brain className="h-8 w-8" />,
            title: 'AI Quantum Matching',
            description: 'Advanced neural networks analyze your skills, preferences, and cosmic energy to find perfect teammates and opponents across dimensions.',
            highlight: 'Smart',
            color: 'from-purple-600 to-pink-600'
        },
        {
            icon: <Rocket className="h-8 w-8" />,
            title: 'Instant Teleportation',
            description: 'Join events anywhere in the galaxy instantly. Our quantum transport system eliminates distance barriers.',
            highlight: 'Fast',
            color: 'from-blue-600 to-cyan-600'
        },
        {
            icon: <Activity className="h-8 w-8" />,
            title: 'Real-time Performance Tracking',
            description: 'Monitor your progress across multiple dimensions with advanced biometric scanning and quantum analytics.',
            highlight: 'Precise',
            color: 'from-green-600 to-emerald-600'
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: 'Quantum Security Protocol',
            description: 'Military-grade encryption protects your data across all dimensions with unhackable quantum security.',
            highlight: 'Secure',
            color: 'from-orange-600 to-red-600'
        }
    ];

    // Who It's For Data
    const targetAudience = [
        {
            icon: <UserCheck className="h-10 w-10" />,
            title: 'Casual Space Explorers',
            subtitle: 'Weekend Warriors',
            description: 'Perfect for beings who want to stay active, meet new cosmic friends, and explore sports in a fun, low-pressure environment.',
            features: ['Social Events', 'Beginner Friendly', 'Flexible Scheduling', 'Community Focus'],
            gradient: 'from-green-900/40 to-emerald-800/30',
            accent: 'green-400',
            emoji: '🌟'
        },
        {
            icon: <Crown className="h-10 w-10" />,
            title: 'Elite Cosmic Athletes',
            subtitle: 'Championship Level',
            description: 'Designed for professional and semi-professional athletes seeking high-level competition and advanced training.',
            features: ['Pro Tournaments', 'Advanced Analytics', 'Expert Coaching', 'Sponsorship Opportunities'],
            gradient: 'from-purple-900/40 to-violet-800/30',
            accent: 'purple-400',
            emoji: '👑'
        },
        {
            icon: <Activity className="h-10 w-10" />,
            title: 'Sport Enthusiasts',
            subtitle: 'Passionate Players',
            description: 'For dedicated athletes who live and breathe sports, always seeking new challenges and improvement.',
            features: ['Skill Development', 'Regular Leagues', 'Training Programs', 'Equipment Reviews'],
            gradient: 'from-blue-900/40 to-cyan-800/30',
            accent: 'blue-400',
            emoji: '⚡'
        },
        {
            icon: <Users className="h-10 w-10" />,
            title: 'Team Builders',
            subtitle: 'Community Leaders',
            description: 'Event organizers, coaches, and club managers who bring cosmic communities together through sports.',
            features: ['Event Management', 'Team Organization', 'Venue Booking', 'Communication Tools'],
            gradient: 'from-orange-900/40 to-red-800/30',
            accent: 'orange-400',
            emoji: '🚀'
        }
    ];

    return (
        <div className="relative min-h-screen  bg-gradient-to-b from-black/0 to-black text-white">
            {/* Animated Background - Same as About */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-black"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-cyan-900/10 via-transparent to-purple-900/20"></div>

                {/* Animated Stars */}
                {[...Array(30)].map((_, i) => (
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
                {[...Array(15)].map((_, i) => (
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

            <div className="relative z-20 container mx-auto px-6 py-16 space-y-24">

                {/* Media Highlights/Community Feed Section */}
                <section className="space-y-12">
                    <div className="text-center space-y-6">
                        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            COSMIC FEED
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Witness epic moments, legendary achievements, and galactic connections from our cosmic community
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {mediaHighlights.map((post) => (
                            <div key={post.id} className="group relative p-6 bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40 backdrop-blur-xl border border-gray-700/30 rounded-2xl hover:border-purple-400/50 transition-all duration-500 hover:-translate-y-2">
                                {/* Post Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-2xl">
                                        {post.avatar}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-white">{post.user}</h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <span>{post.timestamp}</span>
                                            <span>•</span>
                                            <span className="text-purple-400">{post.sport}</span>
                                        </div>
                                    </div>
                                    {post.type === 'video' && <Video className="h-5 w-5 text-purple-400" />}
                                    {post.type === 'image' && <Camera className="h-5 w-5 text-blue-400" />}
                                    {post.type === 'achievement' && <Award className="h-5 w-5 text-yellow-400" />}
                                </div>

                                {/* Post Content */}
                                <p className="text-gray-300 mb-4 leading-relaxed">{post.content}</p>

                                {/* Media Preview */}
                                <div className="mb-4 p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-400/20">
                                    <div className="flex items-center gap-3">
                                        <Play className="h-6 w-6 text-purple-400" />
                                        <span className="text-purple-300 font-medium">{post.media}</span>
                                    </div>
                                </div>

                                {/* Engagement Stats */}
                                <div className="flex items-center justify-between text-sm text-gray-400">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1 hover:text-red-400 transition-colors cursor-pointer">
                                            <Heart className="h-4 w-4" />
                                            <span>{post.likes.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-pointer">
                                            <MessageSquare className="h-4 w-4" />
                                            <span>{post.comments}</span>
                                        </div>
                                        <div className="flex items-center gap-1 hover:text-green-400 transition-colors cursor-pointer">
                                            <Share2 className="h-4 w-4" />
                                            <span>{post.shares}</span>
                                        </div>
                                    </div>
                                    <TrendingUp className="h-4 w-4 text-purple-400" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Upcoming Events Section */}
                <section className="space-y-12">
                    <div className="text-center space-y-6">
                        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                            COSMIC EVENTS
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Join legendary tournaments and events happening across the galaxy
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {upcomingEvents.map((event) => (
                            <div key={event.id} className="group relative p-8 bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-blue-900/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute top-4 right-4 text-4xl">{event.image}</div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                                        <p className="text-blue-400 font-medium">{event.sport}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="flex items-center gap-2 text-gray-300">
                                            <Calendar className="h-4 w-4 text-blue-400" />
                                            <span>{new Date(event.date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-300">
                                            <Clock className="h-4 w-4 text-purple-400" />
                                            <span>{event.time}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-300">
                                            <MapPin className="h-4 w-4 text-green-400" />
                                            <span>{event.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-300">
                                            <Users className="h-4 w-4 text-orange-400" />
                                            <span>{event.participants}/{event.maxParticipants}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-xs text-gray-400">Organized by</p>
                                            <p className="text-sm text-blue-300">{event.organizer}</p>
                                        </div>
                                        <div className="text-right space-y-1">
                                            <p className="text-xs text-gray-400">Prize</p>
                                            <p className="text-sm text-yellow-300 font-medium">{event.prize}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        event.difficulty === 'Professional' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                            event.difficulty === 'Elite' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                                event.difficulty === 'Intermediate' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                                    'bg-green-500/20 text-green-300 border border-green-500/30'
                    }`}>
                      {event.difficulty}
                    </span>
                                        <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105">
                                            Join Event
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Key Features Section */}
                <section className="space-y-12">
                    <div className="text-center space-y-6">
                        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                            KEY FEATURES
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Advanced technology powering the ultimate cosmic sports experience
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {keyFeatures.map((feature, index) => (
                            <div key={index} className="group relative p-8 bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/40 backdrop-blur-xl border border-gray-700/30 rounded-2xl hover:border-orange-400/50 transition-all duration-500 hover:-translate-y-2">
                                <div className="flex items-start gap-6">
                                    <div className={`p-4 bg-gradient-to-br ${feature.color} bg-opacity-20 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                                        <div className="text-white">
                                            {feature.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                                                <span className={`px-2 py-1 text-xs font-bold bg-gradient-to-r ${feature.color} bg-opacity-20 text-white rounded-full border border-white/20`}>
                          {feature.highlight}
                        </span>
                                            </div>
                                            <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                                        </div>
                                        <button className={`px-4 py-2 bg-gradient-to-r ${feature.color} bg-opacity-10 hover:bg-opacity-20 text-white border border-white/20 hover:border-white/40 rounded-lg text-sm font-medium transition-all duration-300`}>
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Who It's For Section */}
                <section className="space-y-12">
                    <div className="text-center space-y-6">
                        <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            WHO IT&apos;S FOR

                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            SportConnect serves every type of cosmic athlete across all skill levels and dimensions
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
                        {targetAudience.map((audience, index) => (
                            <div key={index} className={`group relative p-8 bg-gradient-to-br ${audience.gradient} backdrop-blur-xl border border-gray-700/30 rounded-2xl hover:border-${audience.accent.split('-')[0]}-400/50 transition-all duration-500 hover:-translate-y-2 hover:scale-105`}>
                                <div className="text-center space-y-6">
                                    {/* Icon and Emoji */}
                                    <div className="relative">
                                        <div className={`mx-auto w-20 h-20 bg-${audience.accent}/20 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                                            <div className={`text-${audience.accent}`}>
                                                {audience.icon}
                                            </div>
                                        </div>
                                        <div className="absolute -top-2 -right-2 text-2xl">{audience.emoji}</div>
                                    </div>

                                    {/* Title and Subtitle */}
                                    <div>
                                        <h3 className={`text-xl font-bold text-${audience.accent} mb-1`}>{audience.title}</h3>
                                        <p className="text-sm text-gray-400">{audience.subtitle}</p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-300 text-sm leading-relaxed">{audience.description}</p>

                                    {/* Features */}
                                    <div className="space-y-2">
                                        {audience.features.map((featureItem, featureIndex) => (
                                            <div key={featureIndex} className={`flex items-center gap-2 text-xs text-${audience.accent}`}>
                                                <Star className="h-3 w-3" />
                                                <span>{featureItem}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <button className={`w-full px-4 py-3 bg-gradient-to-r from-${audience.accent}  bg-opacity-10 hover:bg-opacity-20 text-${audience.accent} border border-${audience.accent}/30 hover:border-${audience.accent}/50 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105`}>
                                        Join This Community
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="relative text-center space-y-8 py-16 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30 backdrop-blur-xl rounded-3xl border border-purple-400/30 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-50"></div>

                    {/* Floating elements */}
                    <div className="absolute top-10 left-10 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="absolute bottom-10 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>

                    <div className="relative z-10 space-y-8">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <Rocket className="h-12 w-12 text-purple-400 animate-bounce" />
                            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Ready to Join the Galaxy?
                            </h2>
                            <Sparkles className="h-12 w-12 text-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
                        </div>
                        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Experience the future of sports connection. Join millions of cosmic athletes who have already discovered their ultimate sports dimension.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <button className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 hover:from-purple-500 hover:via-blue-500 hover:to-cyan-500 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-1 overflow-hidden">
                                <span className="relative z-10">Start Your Journey</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                            </button>
                            <button className="px-10 py-4 border-2 border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-300 bg-transparent hover:bg-purple-400/10 rounded-xl font-medium transition-all duration-300 hover:-translate-y-1">
                                Explore Features
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
      `}</style>
        </div>
    );
}