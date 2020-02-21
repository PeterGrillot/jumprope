import React from 'react';
import styled from 'styled-components';
import jumprope from './jumprope.svg';

type StyledProps = {
	active: boolean;
	children?: any;
};

const StyledLogo = styled.div`
	display: ${(props: StyledProps) => (!props.active ? 'block' : 'none')};
	position: relative;
	> img {
		animation: jump 1s infinite linear;
		transform-origin: top;
	}
	> span {
		position: absolute;
		left: 0;
		font-size: 1rem;
		top: 0;
		display: flex;
		flex-grow: 1;
		flex-basis: 100%;
		height: 100%;
		width: 100%;
		justify-content: center;
	}
	@keyframes jump {
		from {
			transform: rotateX(0deg);
		}
		to {
			transform: rotateX(360deg);
		}
	}
`;

const Logo = (props: StyledProps) => (
	<StyledLogo active={props.active}>
		<img src={jumprope} alt="Logo" />
		<span>JumpRope</span>
	</StyledLogo>
);

export { Logo };
