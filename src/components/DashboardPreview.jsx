import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, RefreshCw, Grid, List, Battery, Wifi, Signal, Smartphone, Power, Volume2, Volume1, Home, ArrowLeft, Square, Camera, Settings, MoreHorizontal } from 'lucide-react';

const DashboardPreview = () => {
    const [activeView, setActiveView] = useState('list'); // 'list' or 'control'

    return (
        <section className="bg-black text-white py-24 px-6 md:px-12 border-t border-white/20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-display uppercase mb-4">
                            Control Center
                        </h2>
                        <p className="font-mono text-secondary max-w-md">
                            Full remote access. ADB enabled. Root access available.
                        </p>
                    </div>
                    <div className="font-mono text-xs text-accent border border-accent px-4 py-2 uppercase">
            // Live System Preview
                    </div>
                </div>

                {/* Dashboard Mockup Container */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative border border-white/20 bg-[#050505] rounded-lg overflow-hidden shadow-2xl shadow-accent/5"
                >
                    {/* Top Bar */}
                    <div className="h-12 border-b border-white/10 flex items-center justify-between px-4 bg-[#0a0a0a]">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500"></div>
                        </div>
                        <div className="font-mono text-xs text-secondary">dashboard.mobilistgrid.com</div>
                        <div className="w-16"></div>
                    </div>

                    <div className="flex h-[600px]">
                        {/* Sidebar */}
                        <div className="w-64 border-r border-white/10 bg-[#080808] hidden md:flex flex-col p-4 gap-2">
                            <div className="text-xs font-mono text-secondary mb-4 uppercase tracking-widest">Menu</div>
                            {[
                                { id: 'dashboard', label: 'Dashboard' },
                                { id: 'control', label: 'Device Control' },
                                { id: 'list', label: 'Phone List' },
                                { id: 'files', label: 'File Upload' },
                                { id: 'settings', label: 'Settings' }
                            ].map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setActiveView(item.id === 'control' ? 'control' : 'list')}
                                    className={`p-3 rounded font-mono text-sm cursor-pointer transition-colors ${(activeView === 'control' && item.id === 'control') || (activeView === 'list' && item.id === 'list')
                                            ? 'bg-accent text-black font-bold'
                                            : 'text-gray-400 hover:bg-white/5'
                                        }`}
                                >
                                    {item.label}
                                </div>
                            ))}

                            <div className="mt-auto">
                                <div className="p-4 border border-white/10 rounded bg-black/50">
                                    <div className="text-xs text-secondary mb-2">System Status</div>
                                    <div className="flex items-center gap-2 text-green-400 text-sm font-mono">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                        </span>
                                        All Systems Operational
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1 bg-[#050505] overflow-hidden relative flex flex-col">
                            <AnimatePresence mode="wait">
                                {activeView === 'list' ? (
                                    <motion.div
                                        key="list"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex-1 p-6 flex flex-col h-full"
                                    >
                                        {/* Phone List View */}
                                        <div className="flex justify-between items-center mb-8">
                                            <div>
                                                <h3 className="text-2xl font-display uppercase">Phone List</h3>
                                                <p className="text-sm text-secondary font-mono">Manage and connect to your devices</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <button className="bg-accent text-black px-4 py-2 font-mono text-sm font-bold uppercase hover:bg-white transition-colors">
                                                    + Add Device
                                                </button>
                                                <button className="border border-white/20 p-2 hover:bg-white/10 text-white">
                                                    <RefreshCw className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-3 gap-4 mb-8">
                                            {[
                                                { label: 'Total Devices', value: '31' },
                                                { label: 'Online', value: '22', color: 'text-green-400' },
                                                { label: 'In Use', value: '14', color: 'text-accent' }
                                            ].map((stat) => (
                                                <div key={stat.label} className="border border-white/10 p-4 bg-[#0a0a0a]">
                                                    <div className={`text-3xl font-display ${stat.color || 'text-white'}`}>{stat.value}</div>
                                                    <div className="text-xs font-mono text-secondary uppercase">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="border border-white/10 rounded-lg overflow-hidden flex-1">
                                            <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 bg-[#0a0a0a] text-xs font-mono text-secondary uppercase">
                                                <div className="col-span-4">Device Name</div>
                                                <div className="col-span-2">Status</div>
                                                <div className="col-span-2">Battery</div>
                                                <div className="col-span-2">Network</div>
                                                <div className="col-span-2 text-right">Action</div>
                                            </div>

                                            {[
                                                { name: 'Google Pixel 7a', id: 'dev_01', status: 'Online', battery: 98, signal: 4 },
                                                { name: 'Samsung S23', id: 'dev_02', status: 'Online', battery: 100, signal: 5 },
                                                { name: 'iPhone 14', id: 'dev_03', status: 'Busy', battery: 85, signal: 4 },
                                                { name: 'Google Pixel 6', id: 'dev_04', status: 'Online', battery: 42, signal: 3 },
                                                { name: 'Samsung A54', id: 'dev_05', status: 'Offline', battery: 0, signal: 0 },
                                            ].map((device, i) => (
                                                <div key={i} className="grid grid-cols-12 gap-4 p-4 border-b border-white/5 items-center hover:bg-white/5 transition-colors font-mono text-sm">
                                                    <div className="col-span-4 flex items-center gap-3">
                                                        <div className="w-8 h-10 border border-white/20 rounded flex items-center justify-center bg-black">
                                                            <div className="w-4 h-7 border border-white/10 rounded-sm"></div>
                                                        </div>
                                                        <div>
                                                            <div className="text-white">{device.name}</div>
                                                            <div className="text-xs text-secondary">{device.id}</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <span className={`px-2 py-1 text-xs border ${device.status === 'Online' ? 'border-green-500/50 text-green-400 bg-green-500/10' :
                                                                device.status === 'Busy' ? 'border-yellow-500/50 text-yellow-400 bg-yellow-500/10' :
                                                                    'border-red-500/50 text-red-400 bg-red-500/10'
                                                            }`}>
                                                            {device.status}
                                                        </span>
                                                    </div>
                                                    <div className="col-span-2 flex items-center gap-2 text-secondary">
                                                        <Battery className="w-4 h-4" /> {device.battery}%
                                                    </div>
                                                    <div className="col-span-2 flex items-center gap-2 text-secondary">
                                                        <Signal className="w-4 h-4" /> 5G
                                                    </div>
                                                    <div className="col-span-2 text-right">
                                                        <button
                                                            onClick={() => setActiveView('control')}
                                                            className="text-accent hover:text-white underline decoration-accent underline-offset-4"
                                                        >
                                                            Connect
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="control"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex-1 flex h-full"
                                    >
                                        {/* Device Control View */}
                                        <div className="flex-1 flex items-center justify-center bg-[#020202] relative p-8">
                                            {/* Phone Frame */}
                                            <div className="relative w-[280px] h-[560px] bg-black border-4 border-[#222] rounded-[2rem] shadow-2xl overflow-hidden">
                                                {/* Status Bar */}
                                                <div className="h-6 bg-black flex justify-between items-center px-4 text-[10px] text-white font-mono">
                                                    <span>9:41</span>
                                                    <div className="flex gap-1">
                                                        <Wifi className="w-3 h-3" />
                                                        <Battery className="w-3 h-3" />
                                                    </div>
                                                </div>

                                                {/* Simulated TikTok UI */}
                                                <div className="relative h-full bg-gray-900">
                                                    {/* Video Placeholder */}
                                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center">
                                                        <div className="text-white/20 font-display text-4xl uppercase rotate-[-15deg]">Video Feed</div>
                                                    </div>

                                                    {/* Right Sidebar Icons */}
                                                    <div className="absolute right-2 bottom-20 flex flex-col gap-4 items-center">
                                                        <div className="w-10 h-10 rounded-full bg-gray-800 border border-white/20"></div>
                                                        <div className="flex flex-col items-center gap-1">
                                                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                                                                <div className="w-4 h-4 bg-white rounded-sm"></div>
                                                            </div>
                                                            <span className="text-[10px] text-white">84.2K</span>
                                                        </div>
                                                        <div className="flex flex-col items-center gap-1">
                                                            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                                                                <div className="w-4 h-4 bg-white rounded-sm"></div>
                                                            </div>
                                                            <span className="text-[10px] text-white">1.2K</span>
                                                        </div>
                                                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                                                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                                                        </div>
                                                    </div>

                                                    {/* Bottom Info */}
                                                    <div className="absolute bottom-12 left-4 right-16 text-white">
                                                        <div className="font-bold text-sm mb-1">@user_19284</div>
                                                        <div className="text-xs opacity-80">Viral content strategy #marketing #growth</div>
                                                    </div>

                                                    {/* Bottom Nav */}
                                                    <div className="absolute bottom-0 w-full h-10 bg-black flex justify-around items-center text-white/50 border-t border-white/10">
                                                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                                                        <div className="w-4 h-4 bg-white/50 rounded-sm"></div>
                                                        <div className="w-8 h-6 bg-white/20 rounded-md flex items-center justify-center text-white text-xs">+</div>
                                                        <div className="w-4 h-4 bg-white/50 rounded-sm"></div>
                                                        <div className="w-4 h-4 bg-white/50 rounded-sm"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Remote Control Sidebar */}
                                        <div className="w-16 border-l border-white/10 bg-[#080808] flex flex-col items-center py-4 gap-6">
                                            <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-secondary hover:text-white hover:bg-white/10 cursor-pointer">
                                                <MoreHorizontal className="w-4 h-4" />
                                            </div>
                                            <div className="w-full h-px bg-white/10"></div>

                                            <div className="flex flex-col gap-4">
                                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-red-500 hover:bg-red-500/10 cursor-pointer" title="Power">
                                                    <Power className="w-4 h-4" />
                                                </div>
                                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-white hover:bg-white/10 cursor-pointer" title="Volume Up">
                                                    <Volume2 className="w-4 h-4" />
                                                </div>
                                                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-white hover:bg-white/10 cursor-pointer" title="Volume Down">
                                                    <Volume1 className="w-4 h-4" />
                                                </div>
                                            </div>

                                            <div className="mt-auto flex flex-col gap-4">
                                                <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-secondary hover:text-white hover:bg-white/10 cursor-pointer" title="Back">
                                                    <ArrowLeft className="w-4 h-4" />
                                                </div>
                                                <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-secondary hover:text-white hover:bg-white/10 cursor-pointer" title="Home">
                                                    <Home className="w-4 h-4" />
                                                </div>
                                                <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-secondary hover:text-white hover:bg-white/10 cursor-pointer" title="Recent Apps">
                                                    <Square className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Scanlines Overlay */}
                            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] opacity-20"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DashboardPreview;
