import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddAProduct = () => {
    
  const [user, loading, error] = useAuthState(auth);

    const handleAddProduct = (e) =>{
            e.preventDefault();

            const product = {
                name : e.target.name.value,
                des : e.target.des.value,
                price : e.target.price.value,
                image : e.target.image.value,
                availableQuantity : e.target.availableQuantity.value,
                minimumOrderQuantity : e.target.minimumOrderQuantity.value

            }

            const addProduct = async() =>{

                const settings = {
                    method:'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                     
                    },
                    body: JSON.stringify(product)
                }

                const response = await fetch(`http://localhost:5000/addproduct?email=${user.email}`,settings)
                if(response.status === 401 || response.status === 403){
                    signOut(auth)
                }
                const data = await response.json();
                if(data.insertedId){
                    toast.success('Successfully Added Product')
                    e.target.reset()
                }



            }
            addProduct();
            
        
            

    }



    return (
        <div>
            <h2 className="text-center text-xl lg:text-3xl font-bold">Add a Product</h2>
            <form className="flex flex-col items-center mt-10" onSubmit={handleAddProduct}>

            <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Product Name</span>
                    </label>
                    <input type="text" name='name' required placeholder="Product Name" className="input input-bordered w-80" />
            </div>

            <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Product Description</span>
                    </label>
                    <textarea type="text" name='des' required placeholder="Product Description" className="input h-36 input-bordered w-80" />
            </div>

            <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Product Price</span>
                    </label>
                    <input type="number" name='price' required placeholder="Product Price" className="input input-bordered w-80" />
            </div>

            <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Product Image</span>
                    </label>
                    <input type="text" name='image' required placeholder="Product Image Url" className="input input-bordered w-80" />
            </div>


            <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Quantity</span>
                    </label>
                    <input type="number" name='availableQuantity' required placeholder="Available Quantity" className="input input-bordered w-80" />
            </div>

            <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Minimum Order Quantity</span>
                    </label>
                    <input type="number" name='minimumOrderQuantity' required placeholder="Minimum Order Quantity" className="input input-bordered w-80" />
            </div>

            <input type="submit" value="Add Product" className="btn bg-slate-600 text-white mt-5"/>

            



            </form>
            
        </div>
    );
};

export default AddAProduct;