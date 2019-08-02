import React from 'react';
import PropTypes from 'prop-types';

import screenStatus from '../../services/screenStatus';

const Color = ({ children, screenIsActive }) => (
	<section className={`color screen--showing-footer ${screenStatus(screenIsActive)}`}>
		<div className="container">{children}</div>
	</section>
);

Color.propTypes = {
	children: PropTypes.array.isRequired
};

export default Color;
