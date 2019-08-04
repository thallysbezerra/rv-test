import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../components/Title/Title';

import screenStatus from '../../services/screenStatus';

import './Wheels.scss';

const Wheels = ({ children, screenIsActive, activeWheel }) => (
	<section
		className={`wheels screen--showing-footer ${screenStatus(
			screenIsActive
		)} ${
			activeWheel === 7
				? 'wheels--first'
				: activeWheel === 8
				? 'wheels--center'
				: activeWheel === 9
				? 'wheels--last'
				: ''
		}`}
	>
		<div className="container">
			<Title className="title--wheels">Wheels</Title>
			<div className="wheels--grid-container ">{children}</div>
		</div>
	</section>
);

Wheels.propTypes = {
	children: PropTypes.array.isRequired,
	screenActive: PropTypes.bool.isRequired,
	activeWheel: PropTypes.number
};

export default Wheels;
