import React from 'react';
import { useParams } from 'react-router-dom';

const PurchasePage = () => {
    const productId = useParams();
    

    return (
        <div>
            <h2 className="text-3xl">Purchase Page :{productId.id}</h2>
        </div>
    );
};

export default PurchasePage;