import React from 'react';
import Title from './Title';

import renderer from 'react-test-renderer';

describe('Title UI', () => {
	it('<Title /> must have the snapshot version.', () => {
		const tree = renderer.create(<Title />);

		expect(tree.toJSON()).toMatchSnapshot();
	});
});
