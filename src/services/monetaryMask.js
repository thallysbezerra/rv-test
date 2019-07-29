const monetaryMask = value => {
	return `$ ${parseFloat(value / 1000).toFixed(3)}`;
};

export default monetaryMask;
