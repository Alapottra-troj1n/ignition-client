import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        const getReviews = async() =>{
            const response = await fetch(` https://ignition-backend.onrender.com/reviews`)
            const data = await response.json();
            setReviews(data);
        }
        getReviews();
    },[])


    return (
        <div className="container mx-auto my-32">
            <h2 className="text-3xl lg:text-4xl text-center font-bold my-10"> <span className="text-primary">WHAT OUR CLIENT</span> SAYS ABOUT US</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {reviews.map(review => <Review key={review._id}  review={review} />)}
            </div>
            
        </div>
    );
};

export default Reviews;