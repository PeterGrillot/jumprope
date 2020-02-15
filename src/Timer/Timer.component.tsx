import React from 'react';
import styled from 'styled-components';

import { standardJob } from '../constants/jobs';

import { Cluster } from '../Cluster/Cluster.component';
import { Button } from '../Button/Button.component';

import jumprope from '../jumprope.svg';

interface StyledProps {
	level: string;
}

type Props = {};
type State = {
	timer: number;
	step: number;
	engaged: boolean;
};

const StyledTimer = styled.div`
	text-align: center;
	font-size: 10rem;
	color: var(--blue);
	transition: all 1s;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	${(props: StyledProps) =>
		props.level === 'danger' &&
		`
    color: var(--red);
  `};
	${(props: StyledProps) =>
		props.level === 'rest' &&
		`
    color: var(--purple);
  `};
	.logo--animation {
		animation: jump 1s infinite linear;
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

const getLevel = (time: number, status: string): string => {
	if (status === 'Rest') return 'rest';
	if (time <= 2) return 'danger';
	return 'success';
};

export class Timer extends React.Component<Props, State> {
	private timerID: any; // stops a warning in DidMount

	state = {
		timer: standardJob[0].timer,
		step: 0,
		engaged: false
	};

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	stopTimer = () => {
		this.pauseTimer();
		this.setState((previousState) => ({
			timer: standardJob[0].timer,
			step: 0
		}));
	};
	startTimer = () => {
		if (document) {
			document.getElementsByTagName('video')[0].play();
		}
		this.setState({ engaged: true });
		this.timerID = setInterval(() => this.tick(), 1000);
		if (this.state.step === standardJob.length - 1) {
			this.stopTimer();
		}
	};

	pauseTimer = () =>
		this.setState({ engaged: false }, () => {
			if (document) {
				document.getElementsByTagName('video')[0].pause();
			}
			clearInterval(this.timerID);
		});

	resetTimer = () => {
		this.pauseTimer();
		if (this.state.step !== standardJob.length - 1) {
			this.setState(
				(previousState) => ({
					timer: standardJob[previousState.step + 1].timer,
					step: previousState.step + 1
				}),
				this.startTimer
			);
		}
	};

	tick = () => {
		if (this.state.timer === 0) {
			this.resetTimer();
			return false;
		}
		this.setState((previousState) => ({
			timer: previousState.timer - 1
		}));
	};

	render() {
		return (
			<StyledTimer level={getLevel(this.state.timer, standardJob[this.state.step].name)}>
				{this.state.engaged ? (
					<React.Fragment>
						<Cluster timer={this.state.timer} name={standardJob[this.state.step].name} />
						<Button onClick={this.pauseTimer}>Pause</Button>
					</React.Fragment>
				) : (
					<React.Fragment>
						<img alt="logo" className="logo--animation" src={jumprope} />
						<Button onClick={this.startTimer} disabled={this.state.engaged}>
							Start
						</Button>
					</React.Fragment>
				)}
			</StyledTimer>
		);
	}
}
