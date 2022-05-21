import React from 'react';
import background from '../../assets/pexels-andrea-piacquadio-3822802.jpg'

const Banner = () => {
    return (

        <div className="hero min-h-[80vh] bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={background} alt='bg' class="max-w-sm md:max-w-md lg:max-w-xl rounded-lg shadow-2xl" />
                <div className="my-10 lg:my-0">
                    <h1 className="text-5xl font-bold"> <span className="text-primary">Best Industrial</span> Quality Hardwares</h1>
                    <p className="py-6 font-medium ">Ignition Wares meets all of your DIY requirements. From industrial power tools to seeds for gardening, we are here to support your projects requirements and make your life easier.</p>
                    <button className="btn border-2 btn-primary text-white hover:bg-transparent hover:text-slate-600">CHECK PRODUCTS</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;