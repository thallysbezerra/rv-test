import React from 'react';
import PropTypes from 'prop-types';

import screenStatus from '../../services/screenStatus';

const Final = ({ onClick, screenIsActive }) => (
	<section className={`final screen--full ${screenStatus(screenIsActive)}`}>
		<div className="container">
			<button onClick={onClick}>Rebuild</button>
		</div>
	</section>
);

Final.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default Final;
