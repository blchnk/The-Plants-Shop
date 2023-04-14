import React from 'react';

const ProductProperty = ({property}) => {
    return (
        <>
            <div style={{display: 'flex'}}>
                <h3 style={{width: '150px'}}>{property.title}</h3>
                <p>{property.description}</p>
            </div>
        </>
    );
};

export default ProductProperty;