import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
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
                    Terms of Service_
                </h1>

                <div className="space-y-12 font-mono text-secondary">
                    <section>
                        <h2 className="text-xl text-white uppercase mb-4 flex items-center gap-2">
                            <span className="text-accent">01 //</span> Termination of Service
                        </h2>
                        <p className="leading-relaxed">
                            We reserve the absolute right to terminate your contract and access to our services at any time, without prior notice, if we detect any wrongdoing, violation of these terms, or suspicious activity associated with your account.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl text-white uppercase mb-4 flex items-center gap-2">
                            <span className="text-accent">02 //</span> Prohibited Activities
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Our devices and infrastructure may not be used for any illegal activity under any jurisdiction. This includes, but is not limited to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-sm">
                            <li>Fraudulent activities or financial scams.</li>
                            <li>Distribution of malware, viruses, or malicious code.</li>
                            <li>Harassment, spamming, or unauthorized automated messaging.</li>
                            <li>Accessing or attempting to access unauthorized systems or data.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl text-white uppercase mb-4 flex items-center gap-2">
                            <span className="text-accent">03 //</span> Device Ownership & Liability
                        </h2>
                        <p className="leading-relaxed">
                            During the active rental period, the assigned device is legally considered your property. You assume full legal ownership and responsibility for the device and all actions performed on it. MobilistGrid acts solely as a hosting provider and bears no liability for how the device is utilized during your rental term.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl text-white uppercase mb-4 flex items-center gap-2">
                            <span className="text-accent">04 //</span> Liability
                        </h2>
                        <p className="leading-relaxed">
                            MobilistGrid is not liable for any damages or losses resulting from the use or inability to use our services. You are solely responsible for all activities conducted through your account and the devices assigned to you.
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
};

export default Terms;
