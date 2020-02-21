export interface Job {
	timer: number;
	name: string;
}

const ready: Job = {
	name: 'Ready',
	timer: 5
};

const rest: Job = {
	name: 'Rest',
	timer: 10
};
const longRest: Job = {
	name: 'Long Rest',
	timer: 60 + rest.timer
};

export const standardJob: Job[] = [
	{ ...ready },
	{
		name: 'Standard',
		timer: 30
	},
	{ ...rest },
	{
		name: 'Switch Foot',
		timer: 30
	},
	{ ...rest },
	{
		name: 'High Knee',
		timer: 30
	},
	{ ...rest },
	{
		name: 'Twist',
		timer: 30
	},
	{ ...rest },
	{
		name: 'Skip Jump',
		timer: 30
	},
	{ ...longRest }
];
