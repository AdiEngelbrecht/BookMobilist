import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white p-6 flex justify-between items-start pointer-events-none">
                <Link to="/" onClick={() => window.scrollTo(0, 0)} className="pointer-events-auto group">
                    <div className="flex items-center gap-3 border border-white bg-black px-3 py-1 group-hover:bg-white group-hover:text-black transition-colors">
                        <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
                        <span className="text-2xl font-bold font-display tracking-tighter uppercase">MobilistGrid</span>
                    </div>
                </Link>

                <button
                    onClick={() => setIsMenuOpen(true)}
                    className="pointer-events-auto flex items-center gap-2 uppercase font-mono text-sm border border-white bg-black px-3 py-1 hover:bg-white hover:text-black transition-colors"
                >
                    <span>Menu</span>
                    <Menu size={16} />
                </button>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
                        className="fixed inset-0 z-[60] bg-accent text-black p-6 flex flex-col"
                    >
                        <div className="flex justify-between items-start mb-20">
                            <div className="flex items-center gap-3 border border-black px-3 py-1">
                                <img src="/logo.svg" alt="Logo" className="w-8 h-8 invert" />
                                <span className="text-2xl font-bold font-display tracking-tighter uppercase">MobilistGrid</span>
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-2 uppercase font-mono text-sm border border-black px-3 py-1 hover:bg-black hover:text-accent transition-colors"
                            >
                                <span>Close</span>
                                <X size={16} />
                            </button>
                        </div>

                        <div className="flex-1 flex flex-col justify-center gap-4">
                            <a
                                href="/#features"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-6xl md:text-8xl font-display font-bold uppercase hover:pl-10 transition-all duration-300 hover:text-white"
                            >
                                Features
                            </a>
                            <a
                                href="/#booking"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-6xl md:text-8xl font-display font-bold uppercase hover:pl-10 transition-all duration-300 hover:text-white"
                            >
                                Book a Call
                            </a>
                        </div>

                        <div className="flex justify-between items-end border-t border-black pt-6 font-mono text-sm uppercase">
                            <div>
                                <p>San Francisco, CA</p>
                                <p>EST. 2024</p>
                            </div>
                            <div className="flex gap-4">
                                <a href="#" className="hover:underline">Twitter</a>
                                <a href="#" className="hover:underline">Instagram</a>
                                <a href="#" className="hover:underline">Email</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
