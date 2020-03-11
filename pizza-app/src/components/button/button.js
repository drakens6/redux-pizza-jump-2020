import React from 'react';
import './button.css';

const Button = ({ label }) => {
    return (
        <div data-testid="button">{label}</div>
    )
}

export default Button;