import React from 'react';
import PropTypes from 'prop-types';

const Final = ({ onClick }) => (
	<section className="final screen--full">
		<div className="container">
			<button onClick={onClick}>Rebuild</button>
		</div>
	</section>
);

Final.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default Final;
