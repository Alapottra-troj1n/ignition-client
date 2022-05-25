import React from 'react';

const Portfolio = () => {
    return (
        <div className="container mx-auto">
            <h2 className='text-center font-bold text-4xl'>My Portfolio</h2>

            <div className='my-20 text-center flex flex-col'>
                <h2 className='font-bold text-3xl mt-10'>Alapottra Chakma</h2>
                <h2 className='font-bold text-2xl'>Jr Full Stack Developer</h2>
                <p className='mt-2 text-xl font-semibold'>email : alapottratrojon@gmail.com</p>
                <p className='text-xl text-left'> <span className="font-bold text-3xl">Education: </span>
                    BBS ( Bachelor of Business Studies ) Degree, <br />
                    Rangamati Govt. College <br />
                    February 2022 - Current
                </p>
                <p className='text-xl mt-2 text-left'> <span className="font-bold text-3xl">Skills </span>
                    <span className="font-semibold"> <br />
                        Expertise :</span> <span className="text-normal">Javascript (ES6), REST API, React.js, React Router, React Hooks, HTML5,
                            CSS3, SCSS,Tailwind CSS, Bootstrap 5, Mongodb, Express.js</span>
                    <span className="font-semibold"> <br />
                        Comfortable :</span> <span className="text-normal">Mongoose, Firebase ,Daisy UI , Material UI, React Query</span>
                    <span className="font-semibold"> <br />
                        Familiar :</span> <span className="text-normal">Next.js, Python,Typescript, Framer Motion</span>
                    <span className="font-semibold"> <br />
                        Tools :</span> <span className="text-normal">Adobe Photoshop, Adobe Illustrator, Figma, Github, Netlify, Heroku,
                            Wordpress, Webflow, Shopify
                    </span>
                </p>
            </div>


            <div className="my-10">
                <h2 className='text-center my-10 font-bold text-3xl'>Projects</h2>
                <p className='font-bold text-2xl my-2'>1. Furnitano || <span className="font-normal">A full-stack inventory management website specializes in managing furniture.</span> <a href="https://furnitano.web.app/" className='text-blue-400 underline'>Live Link</a> </p>
                <p className='font-bold text-2xl my-2'>2. William Photography || <span className="font-normal">Professional website for a photographer to provide and showcase his services.</span> <a href="https://william-photography.web.app/" className='text-blue-400 underline'>Live Link</a> </p>

                <p className='font-bold text-2xl my-2'>3. Razer Blade App || <span className="font-normal">A Razer laptop landing page that showcases features and customer reviews.</span><a href="https://razer-blade-react.netlify.app/" className='text-blue-400 underline'>Live Link</a> </p>

            </div>

        </div>
    );
};

export default Portfolio;