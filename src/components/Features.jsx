import React from 'react';
import { motion } from 'framer-motion';

const features = [
    {
        id: '01',
        title: "Real Hardware",
        description: "Genuine mobile devices. No virtual environments. 100% authentic fingerprints."
    },
    {
        id: '02',
        title: "Global Access",
        description: "Low-latency remote control from any browser. Control your farm from anywhere."
    },
    {
        id: '03',
        title: "Unlimited Data",
        description: "Enterprise-grade 5G SIMs with unmetered bandwidth for heavy usage."
    },
    {
        id: '04',
        title: "99.9% Uptime",
        description: "Redundant power and internet. Your operation never sleeps."
    },
    {
        id: '05',
        title: "Dedicated Support",
        description: "24/7 priority support channel. Direct access to our engineering team."
    },
    {
        id: '06',
        title: "Secure Tunnel",
        description: "End-to-end encrypted connection. Your data stays private."
    }
];

const Features = () => {
    return (
        <section id="features" className="bg-black text-white py-20 border-t border-white">
            <div className="px-6 md:px-12 mb-20">
                <h2 className="text-6xl md:text-8xl font-display uppercase mb-4">
                    System<br />Modules
                </h2>
                <div className="h-1 w-full bg-accent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-white">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                        className="bg-black p-8 group hover:bg-white/5 transition-colors relative"
                    >
                        <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                            {/* Assuming feature.icon is a React component or a valid element */}
                            {/* If feature.icon is not defined, this will render nothing or cause an error if not handled */}
                            {feature.icon && <feature.icon className="w-6 h-6 text-accent" />}
                        </div>

                        <h3 className="text-xl font-mono uppercase mb-4 text-accent">
                            {`0${index + 1} // ${feature.title}`}
                        </h3>
                        <p className="text-secondary font-mono text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
