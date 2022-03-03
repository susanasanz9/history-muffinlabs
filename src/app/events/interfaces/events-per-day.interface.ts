export interface EventsPerDay {
	data: {
		Births: Event[],
		Deaths: Event[],
		Events: Event[]
	},
	date: string,
	url: string
}

