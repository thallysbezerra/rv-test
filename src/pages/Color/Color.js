import React from 'react';
import PropTypes from 'prop-types';

const Color = ({ children }) => (
	<section className="color screen--showing-footer">
		<div className="container">{children}</div>
	</section>
);

Color.propTypes = {
	children: PropTypes.array.isRequired
};

export default Color;
