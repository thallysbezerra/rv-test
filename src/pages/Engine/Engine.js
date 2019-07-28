import React from 'react';
import PropTypes from 'prop-types';

const Engine = ({ children }) => (
	<section className="engine">{children}</section>
);

Engine.propTypes = {
	children: PropTypes.array.isRequired
};

export default Engine;
