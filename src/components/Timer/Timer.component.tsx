import React from 'react';
import styled from 'styled-components';

import { standardJob } from '../../constants/jobs';

import { Cluster } from '../Cluster/Cluster.component';
import { Button } from '../Button/Button.component';
import { Logo } from '../Logo/Logo.component';
import { Sets } from '../Sets/Sets.component';

interface StyledProps {
	level: string;
}

type Props = {};
type State = {
	timer: number;
	rep: number;
	set: Array<string>;
	engaged: boolean;
};

const DEFAULT_STATE = {
	timer: standardJob[0].timer,
	rep: 0,
	set: [],
	engaged: false
};

const StyledTimer = styled.div`
	text-align: center;
	font-size: 10rem;
	color: var(--green);
	transition: all 1s;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	small {
		font-size: 1.6rem;
		displayl block;
		margin: 2rem 0;
	}
	${(props: StyledProps) =>
		props.level === 'danger' &&
		`
    color: var(--red);
  `};
	${(props: StyledProps) =>
		props.level === 'rest' &&
		`
    color: var(--blue);
	`};
`;

const getLevel = (time: number, status: string): string => {
	if (status === 'Rest') return 'rest';
	if (time <= 2) return 'danger';
	return 'success';
};

export class Timer extends React.Component<Props, State> {
	private timerID: any;
	private videoElement: any;
	private audioElement: any;
	state = DEFAULT_STATE;

	componentDidMount() {
		this.videoElement = document.getElementById('NOOP_VIDEO');
		this.audioElement = document.getElementById('BELL_RING_AUDIO');
	}
	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	startTimer = () => {
		this.videoElement.play();
		this.setState({ engaged: true });
		this.timerID = setInterval(() => this.tick(), 1000);
	};

	pauseTimer = () =>
		this.setState({ engaged: false }, () => {
			if (document) {
				this.videoElement.pause();
			}
			clearInterval(this.timerID);
		});

	nextRep = () => {
		this.pauseTimer();
		if (this.state.rep !== standardJob.length - 1) {
			this.setState(
				(previousState) => ({
					timer: standardJob[previousState.rep + 1].timer,
					rep: previousState.rep + 1
				}),
				this.startTimer
			);
			return;
		}
		this.setComplete();
	};

	setComplete = () => {
		this.setState({
			timer: standardJob[0].timer,
			rep: 0,
			engaged: false,
			set: [ ...this.state.set, '*' ]
		});
	};

	tick = () => {
		this.setState(
			{
				timer: this.state.timer - 1
			},
			() => {
				if (this.state.timer === 0) {
					this.audioElement.play();
					this.nextRep();
					return false;
				}
			}
		);
	};

	getNext = () => {
		const nextrep = this.state.rep + 1;
		if (!standardJob[nextrep]) {
			return 'Done!';
		}
		return standardJob[nextrep].name;
	};

	render() {
		return (
			<StyledTimer level={getLevel(this.state.timer, standardJob[this.state.rep].name)}>
				<Sets set={this.state.set} />
				<Logo active={this.state.engaged} />
				{this.state.engaged ? (
					<React.Fragment>
						<Cluster timer={this.state.timer} name={standardJob[this.state.rep].name} />
						<small>Up Next: {this.getNext()}</small>
						<Button onClick={this.pauseTimer}>Pause</Button>
					</React.Fragment>
				) : (
					<React.Fragment>
						<Button onClick={this.startTimer} disabled={this.state.engaged}>
							Start
						</Button>
					</React.Fragment>
				)}
			</StyledTimer>
		);
	}
}
