import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const MyReviews = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleAddReview = (e) => {

          e.preventDefault();
          const review = {
              image : user.photoURL || `https://www.pngkey.com/png/detail/950-9501315_katie-notopoulos-katienotopoulos-i-write-about-tech-user.png`,
              name : user?.displayName,
              rating : parseInt(e.target.rating.value),
              review : e.target.review.value  
          }
          const addReview = async() =>{

            const settings = {
                method:'POST',
                headers: {
                    'content-type': 'application/json',
                 
                },
                body: JSON.stringify(review)
            }

              const response = await fetch(` https://ignition-backend.onrender.com/addreview`,settings)
              const data = await response.json();
              if(data.insertedId){
                  toast.success('Added Review Sucessfully00')
                  e.target.reset();
              }
          }
          addReview();

    }

    return (
        <div>
            <h2 className="text-center font-bold mb-10 text-2xl">Add a Review</h2>

            <form onSubmit={handleAddReview} className="flex flex-col items-center gap-3">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input type="text" name='name' disabled value={user.displayName} required className="input input-bordered w-80" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label my-1">
                        <span className="label-text font-semibold">Rating</span>
                    </label>
                    <input type="range" name='rating' min="0" max="5" defaultValue="1" className="range" step="1" />
                    <div className="w-full flex justify-between text-xs px-2">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </div>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Review</span>
                    </label>
                    <textarea type="text" name='review' required className="input input-bordered h-32 w-80" />
                </div>
                <input type="submit" value="Sumbit Review" className="btn bg-slate-600 text-white" />

            </form>


        </div>
    );
};

export default MyReviews;