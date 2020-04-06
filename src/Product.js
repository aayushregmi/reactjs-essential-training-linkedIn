import React from "react";

export const Product = ({product}) => {
    return (

        <div>
            <h3>Library Product of the Week!!!</h3>
            <h4>{product.name}</h4>
            <img src={product.image} alt={product.name} height={100}/>
        </div>
    );
};