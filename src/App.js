import React, { Component } from 'react';

import './css/theme.scss';

import ColorSelection from './components/ColorSelection/ColorSelection';
import EngineSelection from './components/EngineSelection/EngineSelection';
import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import WheelsSelection from './components/WheelsSelection/WheelsSelection';

import Begin from './pages/Begin/Begin';
import Color from './pages/Color/Color';
import Engine from './pages/Engine/Engine';
import Final from './pages/Final/Final';
import Wheels from './pages/Wheels/Wheels';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			amount: 63000,
			apiStatus: null,
			color: null,
			engine: null,
			labelsOnFooter: [],
			wheels: null
		};
	}

	componentDidMount() {
		fetch('https://next.json-generator.com/api/json/get/41ORKNZDU')
			.then(response => response.json())
			.then(api => {
				this.setState({
					apiStatus: 'success',
					engine: api.data.engine.items,
					color: api.data.color.items,
					wheels: api.data.wheels.items
				});
			})
			.catch(() => {
				this.setState({
					apiStatus: 'error'
				});
			});
	}

	handleRebuild = () => {
		this.setState({
			amount: 63000,
			labelsOnFooter: []
		});
	};

	handleSelectItem = (price, labelOnFooter) => {
		const { amount, labelsOnFooter } = this.state;

		this.setState({
			amount: price + amount,
			labelsOnFooter: [...labelsOnFooter, labelOnFooter]
		});
	};

	render() {
		const {
			amount,
			apiStatus,
			color,
			engine,
			labelsOnFooter,
			wheels
		} = this.state;

		return apiStatus === 'success' ? (
			<>
				<Header />

				<Begin onClick={() => {}} />

				<Engine>
					{engine.map(item => (
						<EngineSelection
							onClick={() => {
								this.handleSelectItem(item.price, item.id);
							}}
							key={item.id}
							kwh={item.kwh}
							range={item.range}
							type={item.type}
						/>
					))}
				</Engine>

				<Color>
					{color.map(item => (
						<ColorSelection
							onClick={() => {
								this.handleSelectItem(item.price, item.id);
							}}
							key={item.id}
							label={item.label}
						/>
					))}
				</Color>

				<Wheels>
					{wheels.map(item => (
						<WheelsSelection
							onClick={() => {
								this.handleSelectItem(item.price, item.id);
							}}
							key={item.id}
							label={item.label}
						/>
					))}
				</Wheels>

				<Final onClick={() => this.handleRebuild()} />

				<Footer amount={amount} label={labelsOnFooter} />
			</>
		) : apiStatus === 'error' ? (
			<Error />
		) : (
			<Loading />
		);
	}
}
