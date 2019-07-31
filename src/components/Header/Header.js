import React from 'react';
import './Header.scss';

import rvLogo from '../../img/rv-logo.svg';

const Header = props => {
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

Header.propTypes = {};

export default Header;
