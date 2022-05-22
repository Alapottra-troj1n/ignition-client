import React from 'react';
import Banner from './Banner';
import Newsletter from './Newsletter';
import Products from './Products';
import Reviews from './Reviews';
import Summary from './Summary';
import Unique from './Unique';

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Banner/>
            <Products/>
            <Summary/>
            <Reviews/>
            <Unique/>
            <Newsletter/>
        </div>
    );
};

export default Home;