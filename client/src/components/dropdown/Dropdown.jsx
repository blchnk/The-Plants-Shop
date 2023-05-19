import React from 'react';
import Select from 'react-select';

const Dropdown = ({options, placeholder, product, keyName}) => {
    const handleChange = (e) => {
        if (keyName === 'type') product.setSelectedType({id: e.id, name: e.name});

        if (keyName === 'color') product.setSelectedColor({id: e.id, name: e.name});
        if (keyName === 'size') product.setSelectedSize({id: e.id, name: e.name});
        if (keyName === 'material') product.setSelectedMaterial({id: e.id, name: e.name});
        if (keyName === 'light') product.setSelectedLight({id: e.id, name: e.name});
        if (keyName === 'variety') product.setSelectedVariety({id: e.id, name: e.name});
        if (keyName === 'benefit') product.setSelectedBenefit({id: e.id, name: e.name});
    }

    return (
        <>
            <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={''}
                placeholder={placeholder}
                isClearable={true}
                name="color"
                getOptionLabel={options => options.name}
                getOptionValue={options => options.name}
                options={options}
                maxMenuHeight={170}
                onChange={handleChange}
            />

            <div style={{
                color: 'hsl(0, 0%, 40%)',
                display: 'inline-block',
                fontSize: 12,
                fontStyle: 'italic',
                marginTop: '1em',
            }}>
            </div>
        </>
    );
};

export default Dropdown;