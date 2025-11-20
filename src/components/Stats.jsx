import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    return (
        <section className="bg-accent text-black py-20 overflow-hidden">
            <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-6 md:p-12 border-b md:border-b-0 md:border-r border-black">
                    <motion.div
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        className="text-[12vw] leading-none font-display font-bold tracking-tighter"
                    >
                        100M+
                    </motion.div>
                    <div className="font-mono text-xl uppercase border-t border-black pt-4 mt-4 flex justify-between items-center">
                        <span>Total Views</span>
                        <span>[REC]</span>
                    </div>
                </div>

                <div className="flex-1 p-6 md:p-12 flex flex-col justify-center">
                    <p className="text-2xl md:text-4xl font-display uppercase leading-tight mb-8">
                        "The infrastructure is invisible. The results are impossible to ignore."
                    </p>
                    <div className="grid grid-cols-2 gap-8 font-mono text-sm">
                        <div>
                            <div className="text-4xl font-bold mb-2">99.9%</div>
                            <div className="uppercase opacity-60">Uptime</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">500+</div>
                            <div className="uppercase opacity-60">Active Nodes</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
