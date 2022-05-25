import React from 'react';

const Blog = () => {
    return (
        <div className="my-20 mx-auto container flex flex-col gap-5">
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How will you improve the performance of a React Application?
                </div>
                <div className="collapse-content">
                    <p>1.Using Fucntional or Stateless components cam reduce the overall bundle size because of it's minifying capability thus improving performance </p>
                    <p>2.Using react fragment component can help you avoid unnecessary html wrappers and can help you with the overall optimization and performance</p>
                    <p>3.Avoiding in-line functions can be a great way to improve performance as it creates extra work for internal garbage collector because the inline function will always fail the prop diff when React does a diff check</p>
                </div>
            </div>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>There are many different ways to manage a state in a React application. Most popular one is a library called Redux. Nowadays React Query is becoming a popular option too. Also in the latest version of React there is a inbuilt solution called Context API which is very easy to use and preferable for small to medium size application</p>
                </div>
            </div>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>As we know almost everything is JavaScript is internally an object. And every object has a internal property called prototype. The prototype provides the ability to inherit from methods from other object. Prototypical inheritance is basically a feature in javascript that lets a object inherit different methods and function from other objects</p>
                </div>
            </div>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                {"Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts"}
                </div>
                <div className="collapse-content">
                    <p>Changing the state directly in React without using the set method will rerender the whole react tree and will break the purpose of react virtual DOM. setMethod should be used to change any state in react as it specifies which component needs to be change and also it works asynchronous </p>
                </div>
            </div>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div className="collapse-content">
                    <p>You can loop the array of product using find method and can find the product you're searching by name. Also you can use filter method if you want to search multiple products of the same name  </p>
                </div>
            </div>
            <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is a unit test? Why should write unit tests?
                </div>
                <div className="collapse-content">
                    <p>Unit testing is basically testing a application or app if it works as it was intended. Testing serves the purpose of checking the quality, features and bugs. We should write unit tests because it is a important step in development process as it can help us to detect flaws, bugs in the code before it goes to production </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;