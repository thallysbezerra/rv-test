import React from 'react';
import PropTypes from 'prop-types';

import screenStatus from '../../services/screenStatus';

const Engine = ({ children, screenIsActive }) => (
	<section className={`engine screen--showing-footer ${screenStatus(screenIsActive)}`}>
		<div className="container">{children}</div>
	</section>
);

Engine.propTypes = {
	children: PropTypes.array.isRequired
};

export default Engine;
