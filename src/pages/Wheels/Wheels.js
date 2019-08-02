import React from 'react';
import PropTypes from 'prop-types';

import screenStatus from '../../services/screenStatus';

const Wheels = ({ children, screenIsActive }) => (
	<section className={`wheels screen--showing-footer ${screenStatus(screenIsActive)}`}>
		<div className="container">{children}</div>
	</section>
);

Wheels.propTypes = {
	children: PropTypes.array.isRequired
};

export default Wheels;
