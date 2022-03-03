import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../events.service';
import { EventsPerDay } from '../../interfaces/events-per-day.interface';
import { EventHistory } from '../../interfaces/event.interface';
import { EventType } from '../../interfaces/event-type.enum';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  events: EventHistory[] = [];
  rows = ['year', 'type', 'text'];
  loading: boolean = true;

  constructor(private eventsService: EventsService) {
    this.getEvents();
  }

  ngOnInit(): void {
  }

  getEvents(day?: number, month?: number) {
    this.eventsService.getEventsList(2, 14).subscribe((events: EventsPerDay) => {
      events.data.Births.forEach((event: EventHistory) => {
        event.type = EventType.BIRTH;
        this.events.push(event);
      });
      events.data.Deaths.forEach((event: EventHistory) => {
        event.type = EventType.DEATH;
        this.events.push(event);
      });
      events.data.Events.forEach((event: EventHistory) => {
        event.type = EventType.EVENT;
        this.events.push(event);
      });
      this.loading = false;
    });
  }

}
