import React from 'react'
import Pay from './Pay';

const Workings = () => {
    const steps = [
        { title: "Sign Up Once", desc: "No long forms — create your free account and start exploring hostels instantly.", color: "bg-[#093FA5]" },
        { title: "Choose What You Buy", desc: "Every option is verified, so you only pick what suits you best.", color: "bg-[#FFBC08]" },
        { title: "Confirm & Go", desc: "Make payments, track receipts, and move in stress-free.", color: "bg-[#00A613]" },
    ];


    return (
        <>
            <section className="bg-white py-20 px-8 text-center">
                <h2 className="text-3xl font-bold mb-6">
                    How <span className="text-primary">CampusCrib</span> Works
                </h2>
                <p className="text-gray-600 mb-10">
                    Campus life made simpler for you — in just three steps
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className={`${step.color} text-white p-8 rounded-2xl shadow-${step.color}`}>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Pay />
        </>
    )
}

export default Workings