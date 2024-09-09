import React from 'react'

const Faq = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
            <div className="flex flex-col items-center">
                <h2 className="font-bold text-5xl mt-5 tracking-tight">
                    FAQ
                </h2>
                <p className="text-neutral-500 text-xl mt-3">
                    Frequenty asked questions
                </p>
            </div>
            <div className="grid divide-y divide-neutral-200 max-w-4xl mx-auto mt-8">
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span >
                                Do you organize international tours?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-black mt-3 group-open:animate-fadeIn">
                            Do you organize international tours?

                            Yes, we have 15 years of experience in international tourism. Completing a multitude of group tours in unique countries and regions with the utmost customer service.

                        </p>
                    </details>
                </div>
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span> Do you facilitate visa?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-black mt-3 group-open:animate-fadeIn">
                            Yes we include visa application as a service. In our group tours, everything will be included right from visas and tickets to meals, accommodation and transportation with everything in between.
                        </p>
                    </details>
                </div>
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span> Do you organize Domestic Tours?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-black mt-3 group-open:animate-fadeIn">

                            We do not organize Domestic group tours but can help you in that regard with hotel and flight bookings.
                        </p>
                    </details>
                </div>
                <div className="py-5">
                    <details className="group">
                        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                            <span> What places do you cover?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="text-black mt-3 group-open:animate-fadeIn">


                            We cover almost all of the world through our group tours. From Antarctica to Svalbard, from Japan to South America. From Scotland to Cape Town. You name it, we do it.
                        </p>
                    </details>
                </div>

            </div>
        </div>
    )
}

export default Faq