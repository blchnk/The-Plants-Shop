import React from 'react';

const ProductProperty = ({propertyTitle, propertyName}) => {
    return (
        <>
            <div style={{display: 'flex'}}>
                <h3 style={{width: '150px'}}>{propertyTitle}</h3>
                <p>{propertyName}</p>
            </div>
        </>
    );
};

export default ProductProperty;