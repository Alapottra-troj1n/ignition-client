import React from 'react';
import question from '../../assets/question.png'

const Unique = () => {
    return (
        <div>
            <div>
                <h2 className='text-center font-bold text-3xl lg:text-4xl'>WHAT'S ON<span className="text-primary"> YOUR MIND ?</span></h2>
                <div>
                <div className='container mx-auto '>
            <div className='grid grid-cols-1 lg:grid-cols-2 grid-flow-row-dense'>

                <form className='flex flex-col justify-center gap-5 items-center p-5'>

                    <input type="email" className="bg-gray-200 w-full md:w-72 lg:w-96 border rounded-md px-2 h-10 " name="email" placeholder='Email' required />

                    <input type="text" className="bg-gray-200 w-full md:w-72 lg:w-96 border rounded-md px-2 h-10 " name="subject" placeholder='Subject' required />

                    <textarea type="text" className="bg-gray-200 w-full md:w-72 lg:w-96 border rounded-md p-2 h-40 " name="message" placeholder='Message' required />
                    <button className="btn btn-primary text-white px-10">Submit</button>
                 

                </form>
                

                <div>
                <img src={question} className="w-3/4" alt="" />
                </div>


            </div>


        </div>
                </div>


            </div>
        </div>
    );
};

export default Unique;