import React from 'react';
import './Button.css';

const STYLES = ['style-primary', 'style-secondary', 'style-transparent']
const COLORS = ['yellow', 'blue', 'purple', 'white']
const SIZES = ['size-auto', 'size-full']
const ARROW = ['arrow-light', 'arrow-dark']

export const Button = ({children, type, onClick, buttonStyle, buttonColor, buttonSize, arrow}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonColor = COLORS.includes(buttonColor) ? buttonColor : null;
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkArrow = ARROW.includes(arrow) ? arrow : null;

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonColor} ${checkButtonSize} ${checkArrow}`}
        onClick={onClick} type={type}>{children}</button>
    )
}