import React from 'react';
import PropTypes from 'prop-types';

import monetaryMask from '../../services/monetaryMask';

import './Footer.scss';

import dotRed from '../../img/dot-red.png';
import dotBlue from '../../img/dot-blue.png';
import dotGrey from '../../img/dot-grey.png';
import wheelA from '../../img/wheel-a.png';
import wheelB from '../../img/wheel-b.png';
import wheelC from '../../img/wheel-c.png';

const Footer = ({ amount, label }) => (
	<footer className="footer">
		<div className="footer__grid-container container">
			<div className="footer__grid-item footer__amount">
				<span className="footer__amount__label">Total</span>
				<span className="footer__amount__value">
					{monetaryMask(amount)}
				</span>
			</div>
			<div className="footer__grid-item footer__car-items">
				<span className="footer__car-items__model">Model R</span>

				{label[0] === 1 && (
					<div className="footer__car-items__engine">
						75 <span className="footer__car-items__engine--type">P</span>
					</div>
				)}
				{label[0] === 2 && (
					<div className="footer__car-items__engine">
						100 <span className="footer__car-items__engine--type">S</span>
					</div>
				)}
				{label[0] === 3 && (
					<div className="footer__car-items__engine">
						125 <span className="footer__car-items__engine--type">B</span>
					</div>
				)}

				{label[1] === 4 && (
					<div className="footer__car-items__color">
						<img src={dotRed} className="footer__car-items__color__img" />
					</div>
				)}
				{label[1] === 5 && (
					<div className="footer__car-items__color">
						<img
							src={dotBlue}
							className="footer__car-items__color__img"
						/>
					</div>
				)}
				{label[1] === 6 && (
					<div className="footer__car-items__color">
						<img
							src={dotGrey}
							className="footer__car-items__color__img"
						/>
					</div>
				)}

				{label[2] === 7 && (
					<div className="footer__car-items__wheel">
						<img src={wheelA} className="footer__car-items__wheel__img" />
					</div>
				)}
				{label[2] === 8 && (
					<div className="footer__car-items__wheel">
						<img src={wheelB} className="footer__car-items__wheel__img" />
					</div>
				)}
				{label[2] === 9 && (
					<div className="footer__car-items__wheel">
						<img src={wheelC} className="footer__car-items__wheel__img" />
					</div>
				)}
			</div>
			<div className="footer__grid-item">Next button</div>
		</div>
	</footer>
);

Footer.propTypes = {
	amount: PropTypes.number.isRequired,
	label: PropTypes.array.isRequired
};

export default Footer;
