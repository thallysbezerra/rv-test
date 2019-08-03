import React from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

const Title = ({ children, className }) => {
	return <h2 className={`title ${className}`}>{children}</h2>;
};

Title.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string.isRequired
};

Title.defaultProps = {
	children: "Title",
	className: ""
}

export default Title;
