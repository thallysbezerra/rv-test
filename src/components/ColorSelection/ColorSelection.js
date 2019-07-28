import React from 'react';
import PropTypes from 'prop-types';

const ColorSelection = ({ onClick, label }) => (
	<button onClick={onClick}>{label}</button>
);

ColorSelection.propTypes = {
	onClick: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired
};

export default ColorSelection;
