import React from 'react';
import { Timer } from './components/Timer/Timer.component';
import styled from 'styled-components';

const StyledBackground = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const App = () => {
	return (
		<StyledBackground>
			<Timer />
		</StyledBackground>
	);
};

export default App;
