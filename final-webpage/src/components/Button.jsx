import React from 'react';
import PropTypes from 'prop-types';
import './button.css';


export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button
            type="Button"
            className={['storybook-button transition-all font-Poppins text-xl flex flex-col', `storybook-button--${size}`, mode].join(' ')}
            style={backgroundColor && { backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};


Button.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: PropTypes.bool,
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'large',
    onClick: undefined,
};
