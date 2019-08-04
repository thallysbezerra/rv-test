import React from 'react';
import PropTypes from 'prop-types';

import dotBlue from '../../img/dot-blue.png';
import dotGrey from '../../img/dot-grey.png';
import dotRed from '../../img/dot-red.png';

import monetaryMask from '../../services/monetaryMask';

import './ColorSelection.scss';

const ColorSelection = ({
	colorId,
	colorLabel,
	colorPrice,
	colorSelected,
	onClick
}) => (
	<div className="color-selection">
		{colorSelected && (
			<div className="color-selection__status">
				<div className="color-selection__status__label">{colorLabel}</div>
				<div className="color-selection__status__price">
					{colorPrice === 0 ? 'Included' : monetaryMask(colorPrice)}
				</div>
			</div>
		)}
		<button
			className={`color-selection__button ${
				colorSelected
					? 'color-selection__button__selected'
					: 'color-selection__button__unselected'
			}`}
			onClick={onClick}
		>
			<img
				src={
					colorId === 4
						? dotRed
						: colorId === 5
						? dotBlue
						: colorId === 6 && dotGrey
				}
				alt=""
				className="color-selection__button__img"
			/>
		</button>
	</div>
);

ColorSelection.propTypes = {
	onClick: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired
};

export default ColorSelection;
