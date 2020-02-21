import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	border-radius: .6rem;
	font-size: 2.2rem;
	padding: 0.2rem 1rem;
	border: none;
	background: var(--purple);
	color: white;
`;

type Props = {
	children: string;
	onClick: () => void;
	disabled?: boolean;
};

export const Button = (props: Props) => <StyledButton {...props}>{props.children}</StyledButton>;
