import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button/Button';

import iconArrow from '../../img/arrow.svg';
import car from '../../img/car-home.png';

import screenStatus from '../../services/screenStatus';

import data from './Begin.json';

import './Begin.scss';

const Begin = ({ screenIsActive, onClick }) => (
	<section className={`begin screen--full ${screenStatus(screenIsActive)}`}>
		<div className="container">
			<div>
				<div className="begin__title">
					<div className="begin__title--hat">Build your</div>
					<h1 className="begin__title--principal">
						Model <span className="begin__title--letter">R</span>
					</h1>
				</div>
				<img src={car} alt="Car Model R" className="begin__img" />
			</div>
			<div>
				<Button
					className="begin--button"
					icon={iconArrow}
					onClick={onClick}
					small
				>
					Begin
				</Button>
			</div>
			<div className="container">
				<ul className="begin__features">
					{data.map(item => (
						<li className="begin__features__item">
							<div className="begin__features__item__value">
								{item.value}{' '}
								<span className="begin__features__item__unity">
									{item.unity}
								</span>
							</div>
							<div className="begin__features__item__info">
								{item.info}
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	</section>
);

Begin.propTypes = {
	onClick: PropTypes.func.isRequired,
	screenIsActive: PropTypes.bool.isRequired
};

export default Begin;
