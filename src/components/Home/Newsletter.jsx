import React from 'react';
import newsletter from '../../assets/newsletter.png'

const Newsletter = () => {
    return (
        <div className="grid grid-cols-2 mx-auto container my-32">
            <div className="flex justify-center">
                <img src={newsletter} className="max-w-lg" alt="" />
            </div>
            <div className="flex flex-col justify-center">
                <h2 className="font-bold text-4xl"> <span className="text-primary">SUBSCRIBE</span> TO OUR NEWSLETTER </h2>
                <p className='text-lg text-slate-500'>Get Instant Mail on Our Bulk Discounts and Exciting Offers</p>
                <div className="form-control w-80 mt-5">
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Newsletter;