import React, { Component } from 'react';

import { isNil } from 'ramda';

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
			amount: 0,
			apiStatus: null,
			beginScreenActive: true,
			carName: 'Model R',
			carPrice: 63000,
			color: null,
			colorScreenActive: false,
			colorPrice: 0,
			engine: null,
			engineScreenActive: false,
			enginePrice: 0,
			finalScreenActive: false,
			labelsOnFooter: ['Model R'],
			nextButtonActive: false,
			screenNumber: 0,
			wheels: null,
			wheelsScreenActive: false,
			wheelsPrice: 0
		};
	}

	componentDidMount() {
		const { carPrice } = this.state;

		this.setState({ amount: carPrice });

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

	handleNextSection = screenNumber => {
		this.setState({
			beginScreenActive: screenNumber === 0 && true,
			colorScreenActive: screenNumber === 2 && true,
			engineScreenActive: screenNumber === 1 && true,
			finalScreenActive: screenNumber === 4 && true,
			wheelsScreenActive: screenNumber === 3 && true,

			nextButtonActive: false,
			screenNumber: screenNumber + 1
		});
	};

	handleRebuild = () => {
		const { carName, carPrice } = this.state;

		this.setState(
			{
				amount: carPrice,
				labelsOnFooter: [carName],
				nextButtonActive: true
			},
			() => this.handleNextSection(0)
		);
	};

	handleSelectEngine = (enginePrice, engineId) => {
		const { carName, carPrice } = this.state;

		this.setState({
			amount: carPrice + enginePrice,
			enginePrice,
			labelsOnFooter: [carName, engineId],
			nextButtonActive: true
		});
	};

	handleSelectColor = (colorPrice, colorId) => {
		const { carPrice, enginePrice, labelsOnFooter } = this.state;
		const previousLabelsOnFooter = [labelsOnFooter[0], labelsOnFooter[1]];

		this.setState({
			amount: carPrice + enginePrice + colorPrice,
			colorPrice,
			labelsOnFooter: [
				...(isNil(colorId) ? labelsOnFooter : previousLabelsOnFooter),
				colorId
			],
			nextButtonActive: true
		});
	};

	handleSelectWheels = (wheelsPrice, wheelsId) => {
		const { carPrice, colorPrice, enginePrice, labelsOnFooter } = this.state;
		const previousLabelsOnFooter = [
			labelsOnFooter[0],
			labelsOnFooter[1],
			labelsOnFooter[2]
		];

		this.setState({
			amount: carPrice + enginePrice + colorPrice + wheelsPrice,
			wheelsPrice,
			labelsOnFooter: [
				...(isNil(wheelsId) ? labelsOnFooter : previousLabelsOnFooter),
				wheelsId
			],
			nextButtonActive: true
		});
	};

	render() {
		const {
			amount,
			apiStatus,
			beginScreenActive,
			color,
			colorScreenActive,
			engine,
			engineScreenActive,
			finalScreenActive,
			labelsOnFooter,
			nextButtonActive,
			screenNumber,
			wheels,
			wheelsScreenActive
		} = this.state;

		console.log(screenNumber);

		return apiStatus === 'success' ? (
			<>
				<Header />

				<Begin
					onClick={() => {
						this.handleNextSection(beginScreenActive && 1);
					}}
					screenIsActive={beginScreenActive && true}
				/>

				<Engine screenIsActive={engineScreenActive && true}>
					{engine.map(item => (
						<EngineSelection
							onClick={() => {
								this.handleSelectEngine(item.price, item.id);
							}}
							key={item.id}
							kwh={item.kwh}
							range={item.range}
							type={item.type}
						/>
					))}
				</Engine>

				<Color screenIsActive={colorScreenActive && true}>
					{color.map(item => (
						<ColorSelection
							onClick={() => {
								this.handleSelectColor(item.price, item.id);
							}}
							key={item.id}
							label={item.label}
						/>
					))}
				</Color>

				<Wheels screenIsActive={wheelsScreenActive && true}>
					{wheels.map(item => (
						<WheelsSelection
							onClick={() => {
								this.handleSelectWheels(item.price, item.id);
							}}
							key={item.id}
							label={item.label}
						/>
					))}
				</Wheels>

				<Final
					onClick={() => this.handleRebuild()}
					screenIsActive={finalScreenActive && true}
				/>

				<Footer
					amount={amount}
					label={labelsOnFooter}
					nextButtonActive={nextButtonActive}
					onClick={() => this.handleNextSection(screenNumber)}
				/>
			</>
		) : apiStatus === 'error' ? (
			<Error />
		) : (
			<Loading />
		);
	}
}
