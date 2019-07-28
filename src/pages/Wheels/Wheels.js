import React from 'react';
import PropTypes from 'prop-types';

const Wheels = ({ children }) => (
	<section className="wheels">{children}</section>
);

Wheels.propTypes = {
	children: PropTypes.array.isRequired
};

export default Wheels;
