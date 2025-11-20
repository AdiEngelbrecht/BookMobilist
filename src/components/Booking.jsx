import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

const Booking = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    return (
        <section id="booking" className="bg-black text-white py-32 px-6 md:px-12 border-t border-white relative">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-6xl md:text-8xl font-display uppercase mb-8">
                        Scale<br />
                        <span className="text-accent">Now</span>
                    </h2>
                    <p className="font-mono text-lg text-secondary max-w-md mb-12">
                        Stop wasting time with emulators. Get access to real hardware infrastructure today.
                    </p>
                </div>

                <div className="bg-white text-black p-1 h-[600px]">
                    <div className="border border-black h-full w-full overflow-hidden">
                        <Cal
                            namespace="30min"
                            calLink="adi-engelbrecht-9na1ds/30min"
                            style={{ width: "100%", height: "100%", overflow: "scroll" }}
                            config={{ "layout": "month_view" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;
