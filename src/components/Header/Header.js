import React from 'react';

import rvLogo from '../../img/RV-logo.svg';

import './Header.scss';

const Header = () => {
	return (
		<header className="header">
			<div className="header--grid-container container">
				<img
					src={rvLogo}
					className="header__logo"
					alt="Red Ventures - Logo"
				/>
				<nav className="header__nav">
					<ul className="header__nav__ul">
						<li className="header__nav__ul__li">
							<a href="/" className="header__nav__ul__li__a active">
								Model R
							</a>
						</li>
						<li className="header__nav__ul__li">
							<a href="/" className="header__nav__ul__li__a disabled">
								Model IQ
							</a>
						</li>
						<li className="header__nav__ul__li">
							<a href="/" className="header__nav__ul__li__a disabled">
								Model Mobi
							</a>
						</li>
						<li className="header__nav__ul__li">
							<a href="/" className="header__nav__ul__li__a disabled">
								Model Charlie
							</a>
						</li>
						<li className="header__nav__ul__li">
							<a href="/" className="header__nav__ul__li__a disabled">
								Model Italy
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
