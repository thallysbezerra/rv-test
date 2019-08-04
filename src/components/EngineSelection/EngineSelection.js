import React from 'react';
import PropTypes from 'prop-types';

import './EngineSelection.scss';

const EngineSelection = ({ engineId, onClick, kwh, range, type }) => (
	<button
		className={`engine-selection ${
			engineId
				? 'engine-selection__selected'
				: 'engine-selection__unselected'
		}`}
		onClick={onClick}
	>
		<span className="engine-selection__khw-1">
			{kwh} <span className="engine-selection__type">{type}</span>
		</span>
		<span className="engine-selection__khw-2">
			<b>{kwh}</b> kWh
		</span>
		<span className="engine-selection__range">
			<b>{range}</b> miles range
		</span>
	</button>
);

EngineSelection.propTypes = {
	engineId: PropTypes.number,
	onClick: PropTypes.func.isRequired,
	kwh: PropTypes.number.isRequired,
	range: PropTypes.number.isRequired,
	type: PropTypes.string.isRequired
};

export default EngineSelection;
