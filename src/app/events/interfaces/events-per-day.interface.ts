import { EventHistory } from './event.interface';

export interface EventsPerDay {
	data: {
		Births: EventHistory[],
		Deaths: EventHistory[],
		Events: EventHistory[]
	},
	date: string,
	url: string
}

