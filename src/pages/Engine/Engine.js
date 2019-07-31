import React from 'react';
import PropTypes from 'prop-types';

const Engine = ({ children }) => (
	<section className="engine screen--showing-footer">
		<div className="container">{children}</div>
	</section>
);

Engine.propTypes = {
	children: PropTypes.array.isRequired
};

export default Engine;
