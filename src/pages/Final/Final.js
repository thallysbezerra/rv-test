import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';

import carBlue from '../../img/car-final-blue.png';
import carGrey from '../../img/car-final-grey.png';
import carRed from '../../img/car-final-red.png';
import iconRebuild from '../../img/rebuild.svg';

import monetaryMask from '../../services/monetaryMask';
import screenStatus from '../../services/screenStatus';

import './Final.scss';

const Final = ({
	carLetter,
	carName,
	colorId,
	colorPrice,
	engineId,
	enginePrice,
	finalPrice,
	onClick,
	screenIsActive,
	startingPrice,
	wheelsId,
	wheelsPrice
}) => (
	<section className={`final screen--full ${screenStatus(screenIsActive)}`}>
		<div className="container">
			<Title className="title--final">
				Your
				<span className="final__title--car"> {carName} </span>
				<span className="final__title--letter">{carLetter}</span>
			</Title>
			<div className="final--flex-container">
				<div className="final__image-area">
					{colorId === 4 && (
						<img
							className="final__image-area__img"
							src={carRed}
							alt="Metalic Vermilion"
						/>
					)}
					{colorId === 5 && (
						<img
							className="final__image-area__img"
							src={carBlue}
							alt="Thunderbolt Blue"
						/>
					)}
					{colorId === 6 && (
						<img
							className="final__image-area__img"
							src={carGrey}
							alt="Space Grey"
						/>
					)}
				</div>
				<div className="final__info-area">
					<div className="final__info-area__row--first">
						<span className="final__info-area__row__text">
							Starting price
						</span>
						<span className="final__info-area__row__price">
							{monetaryMask(startingPrice)}
						</span>
					</div>
					<div className="final__info-area__row">
						<span className="final__info-area__row__text">
							{engineId === 1 && '75 P - 75 KWh - 275 miles range'}
							{engineId === 2 && '100 S - 100 KWh - 355 miles range'}
							{engineId === 3 && '125 B - 125 KWh - 420 miles range'}
						</span>
						<span className="final__info-area__row__price">
							{enginePrice !== 0
								? '+ ' + monetaryMask(enginePrice)
								: 'Included'}
						</span>
					</div>
					<div className="final__info-area__row">
						<span className="final__info-area__row__text">
							{colorId === 4 && 'Metalic Vermilion Paint'}
							{colorId === 5 && 'Thunderbolt Blue Paint'}
							{colorId === 6 && 'Space Grey Paint'}
						</span>
						<span className="final__info-area__row__price">
							{colorPrice !== 0
								? '+ ' + monetaryMask(colorPrice)
								: 'Included'}
						</span>
					</div>
					<div className="final__info-area__row">
						<span className="final__info-area__row__text">
							{wheelsId === 7 && '20” Silver Metalic'}
							{wheelsId === 8 && '20” Grafitti'}
							{wheelsId === 9 && '22” Performance Carbon'}
						</span>
						<span className="final__info-area__row__price">
							{wheelsPrice !== 0
								? '+ ' + monetaryMask(wheelsPrice)
								: 'Included'}
						</span>
					</div>
					<div className="final__info-area__row--last">
						<span className="final__info-area__row__text">
							Final Price
						</span>
						<span className="final__info-area__row__price">
							{monetaryMask(finalPrice)}
						</span>
					</div>
					<Button
						className="button--rebuild"
						icon={iconRebuild}
						iconTitle="Rebuild"
						onClick={onClick}
						small
					>
						Rebuild
					</Button>
				</div>
			</div>
		</div>
	</section>
);

Final.propTypes = {
	carLetter: PropTypes.string.isRequired,
	carName: PropTypes.string.isRequired,
	colorId: PropTypes.number,
	colorPrice: PropTypes.number,
	engineId: PropTypes.number,
	enginePrice: PropTypes.number,
	finalPrice: PropTypes.number,
	onClick: PropTypes.func.isRequired,
	screenIsActive: PropTypes.string.isRequired,
	startingPrice: PropTypes.number.isRequired,
	wheelsId: PropTypes.number,
	wheelsPrice: PropTypes.number
};

export default Final;
