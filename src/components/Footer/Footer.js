import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ amount, engineLabel, colorLabel, wheelsLabel }) => (
	<footer className="footer">
		<div>
			<span>Total:</span>
			<span>{amount}</span>
		</div>
		<div>
			<span>Model R</span>
			<span>{engineLabel}</span>
			<span>{colorLabel}</span>
			<span>{wheelsLabel}</span>
		</div>
		<div>Next button</div>
	</footer>
);

Footer.propTypes = {
	amount: PropTypes.number,
	engineLabel: PropTypes.string,
	colorLabel: PropTypes.string,
	wheelsLabel: PropTypes.string
};

Footer.defaultProps = {
	amount: 0,
	engineLabel: '',
	colorLabel: '',
	wheelsLabel: ''
};

export default Footer;
