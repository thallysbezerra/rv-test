import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import {
	handleRebuild,
	handleSelectEngine,
	handleSelectColor,
	handleSelectWheel
} from './App';

configure({ adapter: new Adapter() });

// Application

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

// Functions

it('() => handleRebuild() should be a function ', () => {
	expect(() => handleRebuild()).to.be.a('function');
});

it('() => handleSelectEngine() should be a function ', () => {
	expect(() => handleSelectEngine()).to.be.a('function');
});

it('() => handleSelectColor() should be a function ', () => {
	expect(() => handleSelectColor()).to.be.a('function');
});

it('() => handleSelectWheel() should be a function ', () => {
	expect(() => handleSelectWheel()).to.be.a('function');
});

// Initial states

describe('Initial states', () => {
	it('should return initial states correctly', () => {
		const wrapper = shallow(<App />);

		expect(wrapper.state('amount')).to.be.equal(63000);
		expect(wrapper.state('carName')).to.be.equal('Model R');
		expect(wrapper.state('enginePrice')).to.be.equal(0);
		expect(wrapper.state('colorPrice')).to.be.equal(0);
		expect(wrapper.state('wheelsPrice')).to.be.equal(0);
	});
});
