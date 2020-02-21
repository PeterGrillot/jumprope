import React from 'react';
import styled from 'styled-components';

const StyledCluster = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 50vh;
	div,
	figure {
		align-items: center;
		justify-content: center;
		display: flex;
		margin: 0;
	}
	div {
		font-size: 10rem;
		flex-basis: 40vh;
	}
	figure {
		font-size: 2.6rem;
		flex-basis: 10vh;
	}
`;

export const Cluster = (props: { timer: number; name: string }) => (
	<StyledCluster>
		<div>{props.timer}</div>
		<figure>{props.name}</figure>
	</StyledCluster>
);
