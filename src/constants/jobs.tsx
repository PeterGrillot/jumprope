export interface Job {
	timer: number;
	name: string;
}

export const rest: Job = {
	name: 'Rest',
	timer: 10
};
export const longRest: Job = {
	name: 'Long Rest',
	timer: 60 + rest.timer
};

export const standardJob: Job[] = [
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
