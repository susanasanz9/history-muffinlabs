import { EventType } from './event-type.enum';

export interface EventHistory {
	html: string,
	links: EventHistoryLink[],
	no_year_html: string;
	text: string;
	year: string;
	type: EventType
}

export interface EventHistoryLink {
	link: string,
	title: string
}

export interface EventHistorySummary {
	text: string;
	year: string;
	eventType: EventType
}