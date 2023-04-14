import React from 'react';

const ProductProperty = ({propertyTitle, propertyName}) => {
    return (
        <>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'baseline'}}>
                <h3>{propertyTitle}</h3>
                <p>{propertyName}</p>
            </div>
        </>
    );
};

export default ProductProperty;