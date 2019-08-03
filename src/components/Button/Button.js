import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children, className, icon, iconTitle, onClick, small }) => {
	return (
		<button
			className={`button${small ? '--small' : ''} ${
				className ? className : ''
				}`}
			onClick={onClick}
		>
			{children}
			{icon && <img src={icon} alt={iconTitle} className="button__icon" />}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	icon: PropTypes.string,
	iconTitle: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	small: PropTypes.bool
};

Button.defaultProps = {
	children: "Button name",
	className: "",
	onClick: () => { }
}

export default Button;
