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
	timer: 1
};
const longRest: Job = {
	name: 'Long Rest',
	timer: 6 + rest.timer
};

export const standardJob: Job[] = [
	{ ...ready },
	{
		name: 'Standard',
		timer: 3
	},
	// { ...rest },
	// {
	// 	name: 'Switch Foot',
	// 	timer: 3
	// },
	// { ...rest },
	// {
	// 	name: 'High Knee',
	// 	timer: 3
	// },
	// { ...rest },
	// {
	// 	name: 'Twist',
	// 	timer: 3
	// },
	// { ...rest },
	{
		name: 'Skip Jump',
		timer: 3
	},
	{ ...longRest }
];
