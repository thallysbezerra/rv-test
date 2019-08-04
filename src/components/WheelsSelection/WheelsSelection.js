import React from 'react';
import PropTypes from 'prop-types';

import wheelA from '../../img/wheel-a.png';
import wheelB from '../../img/wheel-b.png';
import wheelC from '../../img/wheel-c.png';

import monetaryMask from '../../services/monetaryMask';

import './WheelsSelection.scss';

const WheelsSelection = ({
	onClick,
	wheelsLabel,
	wheelsId,
	wheelsPrice,
	wheelsSelected,
	wheelsToShow
}) => (
	<div
		className={`wheels-selection ${
			wheelsToShow && wheelsSelected
				? 'wheels-selection__selected'
				: !wheelsToShow
				? ''
				: 'wheels-selection__unselected'
		}`}
	>
		<button className="wheels-selection__button" onClick={onClick}>
			<img
				src={
					wheelsId === 7
						? wheelA
						: wheelsId === 8
						? wheelB
						: wheelsId === 9 && wheelC
				}
				alt=""
				className="wheels-selection__button__img"
			/>
		</button>
		{wheelsSelected && (
			<div className="wheels-selection__status">
				<div className="wheels-selection__status__label">{wheelsLabel}</div>
				<div className="wheels-selection__status__price">
					{wheelsPrice === 0 ? 'Included' : monetaryMask(wheelsPrice)}
				</div>
			</div>
		)}
	</div>
);

WheelsSelection.propTypes = {
	onClick: PropTypes.func.isRequired,
	wheelLabel: PropTypes.string.isRequired,
	wheelsId: PropTypes.number,
	wheelsPrice: PropTypes.number,
	wheelsSelected: PropTypes.bool.isRequired,
	wheelsToShow: PropTypes.number
};

export default WheelsSelection;
