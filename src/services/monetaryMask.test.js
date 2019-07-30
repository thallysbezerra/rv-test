import monetaryMask from './monetaryMask';
import { expect } from 'chai';

it('() => monetaryMask() should be a function ', () => {
	expect(() => monetaryMask()).to.be.a('function');
});

it('monetaryMask(1250) should return "$ 1.250"', () => {
	expect(monetaryMask(1250)).to.be.equal('$ 1.250');
});

it('monetaryMask(63000) should return "$ 63.000"', () => {
	expect(monetaryMask(63000)).to.be.equal('$ 63.000');
});
