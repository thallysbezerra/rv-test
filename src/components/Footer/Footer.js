import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button/Button';

import monetaryMask from '../../services/monetaryMask';

import './Footer.scss';

import dotBlue from '../../img/dot-blue.png';
import dotGrey from '../../img/dot-grey.png';
import dotRed from '../../img/dot-red.png';
import iconArrow from '../../img/arrow.svg';
import wheelA from '../../img/wheel-a.png';
import wheelB from '../../img/wheel-b.png';
import wheelC from '../../img/wheel-c.png';

const Footer = ({ amount, label, nextButtonActive, onClick }) => (
	<footer className="footer">
		<div className="footer--grid-container container">
			<div className="footer--grid-item footer__amount">
				<span className="footer__amount__label">Total</span>
				<span className="footer__amount__value">
					{monetaryMask(amount)}
				</span>
			</div>
			<div className="footer--grid-item footer__car-items">
				<span className="footer__car-items__model">{label[0]}</span>

				<div className="footer__car-items__engine">
					{label[1] === 1 && (
						<>
							75{' '}
							<span className="footer__car-items__engine--type">P</span>
						</>
					)}
					{label[1] === 2 && (
						<>
							100{' '}
							<span className="footer__car-items__engine--type">S</span>
						</>
					)}
					{label[1] === 3 && (
						<>
							125{' '}
							<span className="footer__car-items__engine--type">B</span>
						</>
					)}
				</div>

				<div className="footer__car-items__color">
					{label[2] === 4 && (
						<img
							src={dotRed}
							className="footer__car-items__color__img"
							alt="Metalic Vermilion"
						/>
					)}
					{label[2] === 5 && (
						<img
							src={dotBlue}
							className="footer__car-items__color__img"
							alt="Thunderbolt Blue"
						/>
					)}
					{label[2] === 6 && (
						<img
							src={dotGrey}
							className="footer__car-items__color__img"
							alt="Space Grey"
						/>
					)}
				</div>

				<div className="footer__car-items__wheel">
					{label[3] === 7 && (
						<img
							src={wheelA}
							className="footer__car-items__wheel__img"
							alt="20” Silver Metalic"
						/>
					)}
					{label[3] === 8 && (
						<img
							src={wheelB}
							className="footer__car-items__wheel__img"
							alt="20” Grafitti"
						/>
					)}
					{label[3] === 9 && (
						<img
							src={wheelC}
							className="footer__car-items__wheel__img"
							alt="22” Performance Carbon"
						/>
					)}
				</div>
			</div>

			<div className="footer--grid-item">
				<Button
					className="begin--button"
					disabled={!nextButtonActive}
					icon={iconArrow}
					onClick={onClick}
				>
					next
					</Button>
			</div>
		</div>
	</footer>
);

Footer.propTypes = {
	amount: PropTypes.number.isRequired,
	label: PropTypes.array.isRequired,
	nextButtonActive: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Footer;
