import React, {useState} from 'react';
import Select from 'react-select';

const Dropdown = ({options, placeholder}) => {
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
            />

            <div
                style={{
                    color: 'hsl(0, 0%, 40%)',
                    display: 'inline-block',
                    fontSize: 12,
                    fontStyle: 'italic',
                    marginTop: '1em',
                }}
            >

            </div>
        </>
    );
};

export default Dropdown;