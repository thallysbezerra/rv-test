import React from 'react';
import PropTypes from 'prop-types';

const Color = ({ children }) => <section className="color">{children}</section>;

Color.propTypes = {
	children: PropTypes.array.isRequired
};

export default Color;
