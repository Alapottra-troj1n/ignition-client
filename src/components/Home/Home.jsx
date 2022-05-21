import React from 'react';
import Banner from './Banner';
import Products from './Products';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Products/>
            <Summary/>
        </div>
    );
};

export default Home;