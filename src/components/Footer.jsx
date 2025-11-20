import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-black text-white border-t border-white/20 py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 mb-6">
                        <img src="/logo.svg" alt="MobilistGrid Logo" className="h-8 w-8" />
                        <span className="text-xl font-bold tracking-tighter uppercase">MobilistGrid</span>
                    </div>
                    <p className="font-mono text-sm text-secondary max-w-xs">
                        Premium mobile infrastructure for the modern web. Real devices, real results.
                    </p>
                </div>

                <div>
                    <h4 className="text-sm font-bold uppercase mb-6 text-accent">Product</h4>
                    <ul className="space-y-4 font-mono text-sm text-secondary">
                        <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
                        <li><a href="/#booking" className="hover:text-white transition-colors">Book a Call</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-sm font-bold uppercase mb-6 text-accent">Legal</h4>
                    <ul className="space-y-4 font-mono text-sm text-secondary">
                        <li><Link to="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                        <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="font-mono text-xs text-secondary uppercase">
                    © 2024 MobilistGrid Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
