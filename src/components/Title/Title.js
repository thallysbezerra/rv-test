import React from 'react';
import PropTypes from 'prop-types';

import './Title.scss';

const Title = ({ children, className, subtitle }) => {
	return (<>
		<h2 className={`title ${className}`}>{children}</h2>
		{subtitle && <h3 className="subtitle">{subtitle}</h3>}
	</>);
};

Title.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string.isRequired,
	subtitle: PropTypes.string
};

Title.defaultProps = {
	children: "Title",
	className: ""
}

export default Title;
