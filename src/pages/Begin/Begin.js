import React from 'react';
import PropTypes from 'prop-types';

const Begin = ({ onClick }) => (
	<section className="begin screen--full">
		<div className="container">
			<button onClick={onClick}>Begin</button>
		</div>
	</section>
);

Begin.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default Begin;
