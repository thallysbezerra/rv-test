import React from 'react';
import PropTypes from 'prop-types';

const EngineSelection = ({ onClick, kwh, range, type }) => (
	<button onClick={onClick}>
		<span>{`${kwh} ${type}`}</span>
		<span>{`${kwh} kWh`}</span>
		<span>{`${range} miles range`}</span>
	</button>
);

EngineSelection.propTypes = {
	onClick: PropTypes.func.isRequired,
	kwh: PropTypes.number.isRequired,
	range: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired
};

export default EngineSelection;
