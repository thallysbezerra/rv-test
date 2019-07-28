import React from 'react';
import PropTypes from 'prop-types';

const Final = ({ onClick }) => (
	<section className="final">
		<button onClick={onClick}>Rebuild</button>
	</section>
);

Final.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default Final;
