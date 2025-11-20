import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShoppingBag, Video, Globe, UploadCloud, Zap } from 'lucide-react';

const useCases = [
    {
        icon: Users,
        title: "Account Generating",
        description: "Mass create verified accounts with real device fingerprints."
    },
    {
        icon: Video,
        title: "Onlyfans Marketing",
        description: "Scale your outreach and engagement with automated workflows."
    },
    {
        icon: ShoppingBag,
        title: "E-Commerce Marketing",
        description: "Manage multiple storefronts and ad accounts without bans."
    },
    {
        icon: Zap,
        title: "Influencer Clipping",
        description: "Capture and repost content at scale from real devices."
    },
    {
        icon: Globe,
        title: "Digital Marketing",
        description: "Run location-specific campaigns with US carrier IPs."
    },
    {
        icon: UploadCloud,
        title: "Mass Uploading",
        description: "High-bandwidth uploads for video and media content."
    }
];

const UseCases = () => {
    return (
        <section className="bg-black text-white py-24 px-6 md:px-12 border-t border-white/20">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-display uppercase mb-16 border-b border-white/20 pb-8">
                    Use Cases_
                </h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/20 border border-white/20"
                >
                    {useCases.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                            }}
                            className="bg-black p-8 group hover:bg-white/5 transition-colors relative"
                        >
                            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity">
                                <item.icon className="w-6 h-6 text-accent" />
                            </div>

                            <h3 className="text-xl font-mono uppercase mb-4 text-accent">
                                {`0${index + 1} // ${item.title}`}
                            </h3>
                            <p className="text-secondary font-mono text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default UseCases;
