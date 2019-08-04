import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../components/Title/Title';

import engineA from '../../img/engine-a.png';
import engineB from '../../img/engine-b.png';
import engineC from '../../img/engine-c.png';

import screenStatus from '../../services/screenStatus';

import './Engine.scss';

const Engine = ({ children, engineId, screenIsActive }) => (
	<section
		className={`engine screen--showing-footer ${screenStatus(
			screenIsActive
		)}`}
	>
		<div className="container">
			<Title className="title--engine">Engine</Title>
			<div className="engine--grid-container">
				<div className="engine--grid-item">
					<img
						className="engine__img"
						src={
							engineId === 1
								? engineA
								: engineId === 2
								? engineB
								: engineId === 3 && engineC
						}
						alt=""
					/>
				</div>
				<div className="engine--grid-item">{children}</div>
			</div>
		</div>
	</section>
);

Engine.propTypes = {
	children: PropTypes.array.isRequired,
	engineId: PropTypes.number,
	screenIsActive: PropTypes.string.isRequired
};

export default Engine;
