import screenStatus from './screenStatus';
import { expect } from 'chai';

it('() => screenStatus() should be a function ', () => {
	expect(() => screenStatus()).to.be.a('function');
});

it('screenStatus(true) should return "screen--active"', () => {
	expect(screenStatus(true)).to.be.equal('screen--active');
});

it('screenStatus(false) should return "screen--inactive"', () => {
	expect(screenStatus(false)).to.be.equal('screen--inactive');
});
