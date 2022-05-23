import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const Review = ({ review }) => {
    const rating = review.rating;


    return (

        <div className="card bg-slate-100 text-slate-600">
            <div className="card-body items-center text-center">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <img src={review.image} alt='profile' />
                    </div>
                </div>
                <h2 className="card-title">{review.name}</h2>
                <p>{review.review}</p>
                <div className="card-actions justify-center">
                    <div className="rating">
                        {
                            
                            [...Array(rating).keys()].map(number => <input key={uuidv4()} type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />)
                        }
                        
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Review;