import React, { useState } from 'react';

interface TextFieldProps{
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}

function TextField({value, onChange, placeholder}: TextFieldProps) {
    return (
        <input
            style={{
                borderRadius: 0,
                border: '1px solid #ccc',
                padding: '10px',
                fontSize: '16px',
                marginBottom: '10px'
            }} 
            className="form-control"
            type="text" 
            placeholder={placeholder}
            value={value} 
            onChange={onChange} />
    );
}

export default TextField;