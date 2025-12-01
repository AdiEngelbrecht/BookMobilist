import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
    Activity, 
    AlertTriangle, 
    BarChart3, 
    Smartphone, 
    Target, 
    Users, 
    Zap, 
    ShieldCheck, 
    Globe, 
    Wifi, 
    Server, 
    Headphones, 
    Lock,
    Play
} from 'lucide-react';

// Import model images - Please ensure these files exist in src/assets/
import model1 from '../assets/model1.png';
import model2 from '../assets/model2.png';
import model3 from '../assets/model3.png';
import model4 from '../assets/model4.png';

const RacingLines = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
            <div className="absolute top-[10%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent animate-racing-line-slow" />
            <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent animate-racing-line-fast" />
            <div className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent animate-racing-line-medium" />
            <div className="absolute top-[85%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent animate-racing-line-slow delay-1000" />
        </div>
    );
};

const SectionHeading = ({ title, subtitle, align = "left" }) => (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
        <h2 className="text-4xl md:text-6xl font-display uppercase mb-4 italic">
            {title}
        </h2>
        {subtitle && (
            <div className={`h-1 bg-accent mb-6 ${align === "center" ? "mx-auto w-24" : "w-24"}`}></div>
        )}
        {subtitle && (
            <p className="text-xl md:text-2xl text-white font-mono">
                {subtitle}
            </p>
        )}
    </div>
);

const Card = ({ children, className = "", delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ scale: 1.02, borderColor: '#ccff00', boxShadow: '0 0 20px rgba(204, 255, 0, 0.1)' }}
        className={`bg-surface border border-white/10 p-8 hover:border-accent transition-all duration-300 ${className}`}
    >
        {children}
    </motion.div>
);

const RealityRacingPitch = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div ref={containerRef} className="bg-black text-white min-h-screen relative font-sans selection:bg-red-600 selection:text-white">
            {/* Progress Bar (Lap Counter) */}
            <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
                <motion.div 
                    className="h-full bg-gradient-to-r from-accent to-red-600 origin-left"
                    style={{ scaleX }}
                />
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
                <RacingLines />
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                
                {/* Visual Background Element simulating "Control Center" */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-3/4 bg-gradient-to-l from-surface to-transparent border-l border-white/10 hidden lg:block opacity-50 skew-x-12 translate-x-20">
                    <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center space-x-2 border border-accent/30 bg-accent/5 px-4 py-1 rounded-full mb-6">
                            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                            <span className="text-accent font-mono text-sm">PITCH // REALITYRACING.CO</span>
                        </div>
                        
                        <h1 className="text-6xl md:text-8xl font-display uppercase leading-none mb-6 italic">
                            Phone-Farm Powered <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-600 pr-4 py-2 inline-block">
                                TikTok Growth
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl font-mono text-gray-400 mb-8 max-w-2xl border-l-2 border-red-600 pl-6">
                            High-trust, high-output content engine using real U.S. mobile devices. We handle accounts, posting, and content.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-24 bg-surface relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <SectionHeading 
                        title="The Problem" 
                        subtitle="RealityRacing deserves safe, scalable distribution that can actually keep up."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Shadowbans", desc: "Kill momentum instantly.", icon: AlertTriangle, color: "text-red-500" },
                            { title: "Proxy Farms", desc: "Damage trust & reach.", icon: ShieldCheck, color: "text-orange-500" },
                            { title: "Inconsistent Output", desc: "Missed viral windows.", icon: Activity, color: "text-yellow-500" },
                            { title: "Time Intensive", desc: "Managing accounts is a drain.", icon: Zap, color: "text-accent" },
                        ].map((item, i) => (
                            <Card key={i} delay={i * 0.1} className="group">
                                <item.icon className={`w-12 h-12 mb-6 ${item.color}`} />
                                <h3 className="text-2xl font-display uppercase mb-2">{item.title}</h3>
                                <p className="font-mono text-gray-400 text-sm">{item.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Solution */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl border-l-4 border-accent pl-8 py-4">
                        <SectionHeading title="Our Solution" />
                        <h3 className="text-3xl md:text-5xl font-mono text-white mb-6 leading-tight">
                            A Done-For-You TikTok Distribution System
                        </h3>
                        <p className="text-xl text-gray-400 leading-relaxed font-mono">
                            We manage all accounts, posting, and slideshow-style content for you while running everything on a U.S.-based real-device phone farm. RealityRacing simply watches qualified traffic flow to <span className="text-red-500">RealityRacing.co</span>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Real U.S. Phones Matter */}
            <section className="py-24 bg-surface relative">
                <RacingLines />
                <div className="container mx-auto px-6">
                    <SectionHeading 
                        title="Why Real U.S. Phones Matter" 
                        subtitle="We run real SIMs, real devices, and real networks based in the U.S."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {/* Concept Map using System Modules style */}
                        {[
                            { title: "Real Hardware", desc: "Authentic device fingerprints—no emulators.", icon: Smartphone },
                            { title: "Global Access", desc: "Control & monitor from anywhere.", icon: Globe },
                            { title: "Unlimited Data", desc: "Heavy usage without caps.", icon: Wifi },
                            { title: "99.9% Uptime", desc: "Always-on distribution.", icon: Server },
                            { title: "Dedicated Support", desc: "Direct engineering line.", icon: Headphones },
                            { title: "Secure Tunnel", desc: "End-to-end encrypted traffic.", icon: Lock },
                        ].map((module, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05 }}
                                className="border border-white/10 bg-black/50 p-6 hover:bg-white/5 transition-colors group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <module.icon className="w-8 h-8 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                                    <span className="font-mono text-xs text-gray-500">SYS_MOD_0{i+1}</span>
                                </div>
                                <h4 className="text-lg font-display uppercase mb-2 text-white group-hover:text-accent transition-colors">{module.title}</h4>
                                <p className="text-sm font-mono text-gray-400">{module.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Targeting Strategy */}
            <section className="py-24 bg-black relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <SectionHeading 
                                title="Targeting Strategy" 
                                subtitle="Multi-Avatar TikTok Approach"
                            />
                            <p className="text-gray-400 font-mono mb-8">
                                Multiple accounts, each tuned to a specific audience, all driving back to RealityRacing.co.
                            </p>
                            
                            <div className="space-y-6">
                                {[
                                    "F1 & motorsport superfans",
                                    "Automotive and racing hobbyists",
                                    "Streetwear & lifestyle enthusiasts",
                                    "Performance / speed culture communities"
                                ].map((target, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center space-x-4 bg-surface p-4 border border-white/5"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center text-red-500">
                                            <Target className="w-5 h-5" />
                                        </div>
                                        <span className="font-display uppercase tracking-wide text-lg">{target}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full opacity-20" />
                            <div className="border border-white/10 bg-surface p-8 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-accent" />
                                <h3 className="font-mono text-accent mb-6">AI MODELS EXAMPLES</h3>
                                {/* Visual representation of avatars */}
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { img: model1, id: '01' },
                                        { img: model2, id: '02' },
                                        { img: model3, id: '03' },
                                        { img: model4, id: '04' }
                                    ].map((model, i) => (
                                        <div key={i} className="aspect-square bg-black/50 border border-white/10 relative overflow-hidden group">
                                            <img 
                                                src={model.img} 
                                                alt={`AI Model Example ${model.id}`}
                                                className="w-full h-full object-cover opacity-100 transition-opacity duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Engine */}
            <section className="py-24 bg-surface relative overflow-hidden">
                <RacingLines />
                <div className="container mx-auto px-6">
                    <SectionHeading 
                        title="Content Engine" 
                        subtitle="High-Volume Slideshow Content, Zero Lift from Your Team"
                        align="center"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {[
                            { title: "Trend Aligned", desc: "Tailored to racing culture." },
                            { title: "Daily Posting", desc: "Across multiple accounts." },
                            { title: "Virality Optimized", desc: "For retention & store clicks." },
                            { title: "Fully Managed", desc: "Handled by our phone farm." }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-black p-8 border-t-4 border-accent text-center relative"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black border border-accent flex items-center justify-center rounded-full text-accent font-bold text-sm">
                                    {i + 1}
                                </div>
                                <h4 className="text-xl font-display uppercase mb-4 mt-2">{item.title}</h4>
                                <p className="text-gray-400 font-mono text-sm">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Commitments */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Your Commitment */}
                        <div className="bg-surface border border-white/10 p-10">
                            <h3 className="text-3xl font-display uppercase mb-2 text-gray-400">Your Commitment</h3>
                            <p className="text-accent font-mono text-xl mb-8">Cost: $0 Upfront for the Pilot</p>
                            <p className="text-gray-300 mb-6 font-mono">If we generate views and you see a real return, we’d like:</p>
                            <ul className="space-y-4">
                                {["A testimonial from RealityRacing", "Permission to use logo", "Quote tweet / Social mention"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-1 h-1 bg-accent mt-2.5" />
                                        <span className="font-mono text-sm md:text-base">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Our Commitment */}
                        <div className="bg-gradient-to-br from-surface to-black border border-accent/20 p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <ShieldCheck className="w-32 h-32" />
                            </div>
                            <h3 className="text-3xl font-display uppercase mb-6 text-white">Our Commitment</h3>
                            <ul className="space-y-4 relative z-10">
                                {[
                                    "Full TikTok account setup and operations",
                                    "Consistent, on-brand content output",
                                    "Posting exclusively from real U.S. devices",
                                    "Transparent reporting and metrics",
                                    "All traffic driven directly to RealityRacing.co"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                            <span className="block w-1.5 h-1.5 bg-accent rounded-full" />
                                        </div>
                                        <span className="font-mono text-sm md:text-base text-white">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-black text-center border-t border-white/10">
                 <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-display uppercase mb-8 italic text-white">
                        Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-600 pr-2">Race?</span>
                    </h2>
                 </div>
            </section>
        </div>
    );
};

export default RealityRacingPitch;

