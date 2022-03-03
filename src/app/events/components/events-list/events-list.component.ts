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
  pageSize: number = 10;
  page: number = 1;

  constructor(private eventsService: EventsService) {
    this.eventsService.getEventsList(2, 14).subscribe((events: EventsPerDay) => {
      this.events = events.data.Births;

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
    });
  }

  ngOnInit(): void {
  }

}
