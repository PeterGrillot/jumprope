import React from 'react';
import styled from 'styled-components';

type StyledProps = {
	set: Array<string>;
};

const StyledUl = styled.ul`
	display: flex;
	list-style: none;
	font-size: 2rem;
	color: var(--green);
	position: absolute;
	top: 0;
	margin: 1rem 0;
	padding: 0;
`;

const Sets = (props: StyledProps) => {
	const { set } = props;
	return (
		<StyledUl>
			{set.map((item, index) => <li key={index}>{item}</li>)}
			{set.length !== 0 && <li>({set.length})</li>}
		</StyledUl>
	);
};

export { Sets };
