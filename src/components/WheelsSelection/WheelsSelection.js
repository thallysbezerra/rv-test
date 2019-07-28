import React from 'react';
import PropTypes from 'prop-types';

const WheelsSelection = ({ onClick, label }) => (
	<button onClick={onClick}>{label}</button>
);

WheelsSelection.propTypes = {
	onClick: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired
};

export default WheelsSelection;
