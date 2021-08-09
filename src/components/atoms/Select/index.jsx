import React from 'react';
import Select from 'react-select';

const Select = ({ options, ...props }) => {
    return (
        <Select {...props} options={options} />
    )
}

export default Select;
