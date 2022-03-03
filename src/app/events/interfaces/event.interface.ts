import { EventType } from './event-type.enum';

export interface Event {
	html: string,
	links: string[],
	no_year_html: string;
	text: string;
	year: string;
	eventType: EventType
}
