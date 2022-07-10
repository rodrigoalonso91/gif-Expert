import PropTypes from 'prop-types'
import React from 'react'
import { useState } from 'react';

export const AddCategory = ({setCategory}) => {

    const placeholder = 'Buscar'
    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() !== ''){
            setCategory( category => [inputValue,...category] );
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputValue}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}
