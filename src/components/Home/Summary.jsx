import React from 'react';
import summarypic from '../../assets/arrow-amico.png'

const Summary = () => {
    return (
        <div className='my-20 container mx-auto'>
            <div className='my-10'>
                <h2 className="text-center  font-bold text-4xl"> <span className="text-primary">TRUSTED BY </span>THOUSANDS OF BUSINESSES</h2>
                <p className='text-center text-lg text-slate-500'>Our Business Summary</p>
            </div>

            <div className='flex justify-center mb-5'>
                <img src={summarypic} className="max-w-sm md:max-w-md lg:max-w-lg" alt="summary" />
            </div>
            <div className="flex justify-center ">



                <div className="stats stats-vertical lg:stats-horizontal shadow">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 text-primary h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">500K</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block text-primary w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div className="stat-title">Customers Served</div>
                        <div className="stat-value">200K</div>
                        <div className="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block text-primary w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">Annual revenue</div>
                        <div className="stat-value">100M+</div>
                        <div className="stat-desc">↗︎ 90 (54%)</div>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default Summary;