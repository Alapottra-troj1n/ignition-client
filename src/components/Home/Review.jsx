import React from 'react';

const Review = ({ review }) => {
    const rating = review.rating;


    return (

        <div class="card bg-slate-100 text-neutral-content">
            <div class="card-body items-center text-center">
                <div class="avatar">
                    <div class="w-24 rounded-full">
                        <img src={review.image} alt='profile' />
                    </div>
                </div>
                <h2 class="card-title">{review.name}</h2>
                <p>{review.review}</p>
                <div class="card-actions justify-center">
                    <div class="rating">
                        {
                            
                            [...Array(rating).keys()].map(number => <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />)
                        }
                        
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Review;