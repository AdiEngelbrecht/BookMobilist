import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DeviceGridBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let mouseX = 0;
        let mouseY = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        resize();

        // Phone dimensions
        const phoneWidth = 40;
        const phoneHeight = 80;
        const gap = 60;

        const draw = (time) => {
            const w = canvas.width;
            const h = canvas.height;

            // Clean clear for smooth look
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, w, h);

            const cols = Math.ceil(w / gap);
            const rows = Math.ceil(h / gap);

            ctx.strokeStyle = '#222'; // Darker, subtler lines
            ctx.lineWidth = 1;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * gap;
                    const y = j * gap;

                    // Center of the phone
                    const cx = x + phoneWidth / 2;
                    const cy = y + phoneHeight / 2;

                    // Distance from mouse
                    const dx = cx - mouseX;
                    const dy = cy - mouseY;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    // Interaction radius
                    const maxDist = 600; // Larger radius for smoother falloff
                    let scale = 1;
                    let rot = 0;
                    let offsetX = 0;
                    let offsetY = 0;

                    if (dist < maxDist) {
                        const force = (maxDist - dist) / maxDist;
                        // Smooth easing
                        const ease = force * force * (3 - 2 * force);

                        scale = 1 + ease * 0.2; // Subtle scale
                        rot = ease * Math.PI * 0.1; // Very subtle rotation

                        // Gentle repel
                        const angle = Math.atan2(dy, dx);
                        offsetX = Math.cos(angle) * ease * 30;
                        offsetY = Math.sin(angle) * ease * 30;
                    }

                    // Kinetic Wave effect based on time
                    // Multiple sine waves for organic motion
                    const wave1 = Math.sin(x * 0.005 + time * 0.001);
                    const wave2 = Math.cos(y * 0.005 + time * 0.0015);
                    const wave = (wave1 + wave2) * 10;

                    offsetY += wave;

                    ctx.save();
                    ctx.translate(cx + offsetX, cy + offsetY);
                    ctx.rotate(rot);
                    ctx.scale(scale, scale);

                    // Draw Phone Body
                    ctx.beginPath();
                    ctx.roundRect(-phoneWidth / 2, -phoneHeight / 2, phoneWidth, phoneHeight, 6);
                    ctx.stroke();

                    // Draw Screen (Subtle reflection)
                    const screenGradient = ctx.createLinearGradient(-phoneWidth / 2, -phoneHeight / 2, phoneWidth / 2, phoneHeight / 2);
                    screenGradient.addColorStop(0, '#111');
                    screenGradient.addColorStop(1, '#050505');

                    ctx.fillStyle = screenGradient;
                    ctx.beginPath();
                    ctx.roundRect(-phoneWidth / 2 + 2, -phoneHeight / 2 + 2, phoneWidth - 4, phoneHeight - 4, 4);
                    ctx.fill();

                    // Subtle Pulse (No random flashing)
                    const pulse = Math.sin(x * 0.1 + y * 0.1 + time * 0.002) * 0.5 + 0.5;
                    if (pulse > 0.9) {
                        ctx.fillStyle = `rgba(204, 255, 0, ${pulse * 0.1})`; // Very faint acid green glow
                        ctx.fill();
                    }

                    // Draw Home Bar
                    ctx.fillStyle = '#222';
                    ctx.fillRect(-10, phoneHeight / 2 - 8, 20, 2);

                    ctx.restore();
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw(0);

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-80" />;
};

const Marquee = ({ text, direction = 1 }) => {
    return (
        <div className="flex overflow-hidden whitespace-nowrap border-y border-white/10 py-2 bg-black/50 backdrop-blur-sm">
            <motion.div
                initial={{ x: direction > 0 ? 0 : '-50%' }}
                animate={{ x: direction > 0 ? '-50%' : 0 }}
                transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                className="flex gap-8 items-center"
            >
                {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-sm font-mono uppercase tracking-widest text-secondary">
                        {text}
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-10 overflow-hidden bg-black">
            <DeviceGridBackground />

            <div className="relative z-10 px-6 md:px-12 pointer-events-none">
                <motion.div style={{ y: y1 }}>
                    <h1 className="text-[15vw] leading-[0.8] font-bold font-display uppercase text-white mix-blend-difference">
                        Real<br />
                        <span className="text-stroke">Phones</span>
                    </h1>
                </motion.div>

                <motion.div
                    style={{ y: y2 }}
                    className="flex flex-col md:flex-row items-end justify-between mt-12 gap-8 pointer-events-auto"
                >
                    <div className="max-w-md">
                        <p className="font-mono text-sm md:text-base text-secondary mb-8 border-l border-accent pl-4 bg-black/80 backdrop-blur-md p-4 border border-white/10">
              // SYSTEM_STATUS: ONLINE<br />
              // NODES: 500+<br />
              // LATENCY: 24ms
                        </p>
                        <p className="text-xl md:text-2xl font-medium leading-tight uppercase mix-blend-difference text-white">
                            Rent and control a phone based in the US straight from your browser. Access the link from any computer or phone.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto z-20">
                        <a href="#booking" className="btn-premium bg-accent text-black px-8 py-6 text-xl font-bold uppercase tracking-wider w-full md:w-auto text-center">
                            Book a Call_
                        </a>
                    </div>
                </motion.div>
            </div>

            <div className="relative z-10 mt-20 rotate-[-2deg] scale-110 pointer-events-none opacity-50">
                <Marquee text="/// 100M+ VIEWS GENERATED /// 99.9% UPTIME /// REAL HARDWARE /// NO EMULATORS ///" direction={1} />
                <Marquee text="/// GLOBAL ACCESS /// UNLIMITED DATA /// SECURE CONNECTION /// INSTANT RESET ///" direction={-1} />
            </div>
        </section>
    );
};

export default Hero;
