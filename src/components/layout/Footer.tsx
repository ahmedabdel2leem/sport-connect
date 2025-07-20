"use client";
import {
    Rocket,
    Mail,
    Phone,
    MapPin,
    Twitter,
    Facebook,
    Instagram,
    Youtube,
    Linkedin,
    Github,
    Globe,
    Star,
    Sparkles,
    Shield,
    Heart,
    Award,
    Users,
    Calendar,
    Zap,
    Crown
} from "lucide-react";

export default function Footer() {
    const footerSections = [
        {
            title: "Platform",
            links: [
                { name: "Find Events", href: "/events" },
                { name: "Join Teams", href: "/teams" },
                { name: "Create Tournaments", href: "/tournaments" },
                { name: "Coaching Hub", href: "/coaching" },
                { name: "Sports Analytics", href: "/analytics" }
            ]
        },
        {
            title: "Sports Categories",
            links: [
                { name: "Quantum Basketball", href: "/sports/basketball" },
                { name: "Stellar Tennis", href: "/sports/tennis" },
                { name: "Cosmic Soccer", href: "/sports/soccer" },
                { name: "Zero-G Swimming", href: "/sports/swimming" },
                { name: "Dimensional Running", href: "/sports/running" }
            ]
        },
        {
            title: "Community",
            links: [
                { name: "Athlete Profiles", href: "/profiles" },
                { name: "Cosmic Feed", href: "/feed" },
                { name: "Success Stories", href: "/stories" },
                { name: "Ambassador Program", href: "/ambassadors" },
                { name: "Help Center", href: "/help" }
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About Us", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "Press Kit", href: "/press" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" }
            ]
        }
    ];

    const socialLinks = [
        { icon: <Twitter className="h-6 w-6" />, href: "#", name: "Twitter", color: "hover:text-blue-400" },
        { icon: <Facebook className="h-6 w-6" />, href: "#", name: "Facebook", color: "hover:text-blue-600" },
        { icon: <Instagram className="h-6 w-6" />, href: "#", name: "Instagram", color: "hover:text-pink-400" },
        { icon: <Youtube className="h-6 w-6" />, href: "#", name: "YouTube", color: "hover:text-red-400" },
        { icon: <Linkedin className="h-6 w-6" />, href: "#", name: "LinkedIn", color: "hover:text-blue-500" },
        { icon: <Github className="h-6 w-6" />, href: "#", name: "GitHub", color: "hover:text-gray-300" }
    ];

    const contactInfo = [
        { icon: <Mail className="h-5 w-5" />, text: "contact@sportconnect.galaxy", color: "text-blue-400" },
        { icon: <Phone className="h-5 w-5" />, text: "+1 (555) COSMIC-1", color: "text-purple-400" },
        { icon: <MapPin className="h-5 w-5" />, text: "Alpha Centauri Station, Sector 7", color: "text-green-400" }
    ];

    const achievements = [
        { icon: <Users className="h-6 w-6" />, number: "2.5M+", text: "Active Athletes" },
        { icon: <Calendar className="h-6 w-6" />, number: "50K+", text: "Events Monthly" },
        { icon: <Globe className="h-6 w-6" />, number: "127", text: "Galaxies Connected" },
        { icon: <Award className="h-6 w-6" />, number: "95%", text: "Satisfaction Rate" }
    ];

    return (
        <footer className="relative bg-gradient-to-b from-black/80 to-black text-white overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-black"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-cyan-900/20 via-transparent to-purple-900/30"></div>

                {/* Animated Stars */}
                {[...Array(40)].map((_, i) => (
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
                        className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${15 + Math.random() * 25}s linear infinite`,
                        }}
                    ></div>
                ))}
            </div>

            <div className="relative z-20 container mx-auto px-6 py-16">
                {/* Top Section - Brand and Newsletter */}
                <div className="mb-16 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl">
                                <Rocket className="h-8 w-8 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                    SportConnect
                                </h2>
                                <p className="text-gray-400">Connecting Athletes Across the Galaxy</p>
                            </div>
                        </div>
                        <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                            The ultimate platform for cosmic sports enthusiasts. Join millions of athletes discovering their perfect sports dimension across the universe.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="flex items-center gap-2 px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-400/30">
                                <Shield className="h-4 w-4" />
                                Quantum Secured
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-400/30">
                                <Zap className="h-4 w-4" />
                                Instant Connect
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-400/30">
                                <Crown className="h-4 w-4" />
                                Elite Community
                            </span>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-blue-900/30 backdrop-blur-xl border border-gray-700/30 rounded-2xl p-8">
                        <div className="space-y-6">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white mb-2">Stay Connected</h3>
                                <p className="text-gray-300">Get cosmic updates and exclusive event invitations</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your cosmic email..."
                                    className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                                />
                                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105">
                                    Subscribe
                                </button>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                                <Heart className="h-4 w-4 text-red-400" />
                                <span>Join 500K+ subscribers across the galaxy</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Achievement Stats */}
                <div className="mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {achievements.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-purple-400">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                                <div className="text-gray-400 text-sm">{stat.text}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="grid lg:grid-cols-5 gap-12 mb-16">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <h3 className="text-xl font-bold text-white">Contact</h3>
                        <div className="space-y-4">
                            {contactInfo.map((contact, index) => (
                                <div key={index} className="flex items-center gap-3 group cursor-pointer">
                                    <div className={`${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                                        {contact.icon}
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white transition-colors">
                                        {contact.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
                            <div className="flex flex-wrap gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        className={`p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-110`}
                                        aria-label={social.name}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer Links */}
                    {footerSections.map((section, index) => (
                        <div key={index} className="space-y-6">
                            <h3 className="text-xl font-bold text-white">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                                        >
                                            <Star className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-gray-700/50">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4 text-gray-400">
                            <Sparkles className="h-5 w-5 text-purple-400 animate-pulse" />
                            <span>© 2025 SportConnect Galaxy. All rights reserved across all dimensions.</span>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                            <a href="/privacy" className="hover:text-purple-400 transition-colors">Privacy</a>
                            <a href="/terms" className="hover:text-purple-400 transition-colors">Terms</a>
                            <a href="/cookies" className="hover:text-purple-400 transition-colors">Cookies</a>
                            <a href="/accessibility" className="hover:text-purple-400 transition-colors">Accessibility</a>
                        </div>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-gray-500 text-sm">
                            Powered by Quantum Computing • Secured by Intergalactic Protocols • Built with ❤️ for Athletes
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-10px) rotate(120deg); }
                    66% { transform: translateY(10px) rotate(240deg); }
                }
            `}</style>
        </footer>
    );
}