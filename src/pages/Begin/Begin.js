import React from 'react';
import PropTypes from 'prop-types';

import screenStatus from '../../services/screenStatus';

const Begin = ({ screenIsActive, onClick }) => (
	<section className={`begin screen--full ${screenStatus(screenIsActive)}`}>
		<div className="container">
			<button onClick={onClick}>Begin</button>
		</div>
	</section>
);

Begin.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default Begin;
