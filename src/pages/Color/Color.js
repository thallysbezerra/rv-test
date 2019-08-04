import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../components/Title/Title';

import carBlue from '../../img/car-color-blue.png';
import carGrey from '../../img/car-color-grey.png';
import carRed from '../../img/car-color-red.png';

import screenStatus from '../../services/screenStatus';

import './Color.scss';

const Color = ({ children, colorId, screenIsActive }) => (
	<section
		className={`color screen--showing-footer ${screenStatus(screenIsActive)}`}
	>
		<div className="container">
			<Title
				className="title--color"
				subtitle="The 2019 Model R have 3 unique metalic color options. Each color was meticulously developed to look like something completely new to your eyes. "
			>
				Color
			</Title>
			<div className="color--grid-container">
				<div className="color--grid-item">
					<img
						className="color__img"
						src={
							colorId === 4
								? carRed
								: colorId === 5
								? carBlue
								: colorId === 6 && carGrey
						}
						alt=""
					/>
				</div>
				<div className="color--grid-item color__bottom-area">
					{children}
				</div>
			</div>
		</div>
	</section>
);

Color.propTypes = {
	children: PropTypes.array.isRequired,
	colorId: PropTypes.number,
	screenIsActive: PropTypes.string.isRequired
};

export default Color;
