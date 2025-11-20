import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-6xl font-display uppercase mb-12 border-b border-white/20 pb-8">
                    Privacy Policy_
                </h1>

                <div className="space-y-12 font-mono text-secondary">
                    <section>
                        <h2 className="text-xl text-white uppercase mb-4 flex items-center gap-2">
                            <span className="text-accent">01 //</span> Data Protection
                        </h2>
                        <p className="leading-relaxed">
                            We take the protection of your data seriously. We implement strict security measures to safeguard your personal information and usage data against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl text-white uppercase mb-4 flex items-center gap-2">
                            <span className="text-accent">02 //</span> Device Information
                        </h2>
                        <p className="leading-relaxed">
                            We do not share your device information, IP addresses, or usage logs with third parties unless required by law. Your device activity is private and isolated to your instance.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl text-white uppercase mb-4 flex items-center gap-2">
                            <span className="text-accent">03 //</span> Content Privacy
                        </h2>
                        <p className="leading-relaxed">
                            We do not monitor, record, or share the content you access or generate through our devices, provided it complies with our Terms of Service. Your session data is wiped upon instance termination.
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
};

export default Privacy;
