import React from 'react';

const Heading = props => {
	return <h2 style={{ textDecoration: 'underline' }}>{props.children}</h2>;
};

export default Heading;
