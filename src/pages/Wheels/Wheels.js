import React from 'react';
import PropTypes from 'prop-types';

const Wheels = ({ children }) => (
	<section className="wheels screen--showing-footer">
		<div className="container">{children}</div>
	</section>
);

Wheels.propTypes = {
	children: PropTypes.array.isRequired
};

export default Wheels;
