import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loading;