import React from 'react';
import PropTypes from 'prop-types';

const Begin = ({ onClick }) => (
	<section className="begin">
		<button onClick={onClick}>Begin</button>
	</section>
);

Begin.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default Begin;
