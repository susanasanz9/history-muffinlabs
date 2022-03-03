import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../events.service';
import { EventsPerDay } from '../../interfaces/events-per-day.interface';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  constructor(private eventsService: EventsService) {
    this.eventsService.getEventsList(2, 14).subscribe((events: EventsPerDay) => {
      console.log('🚀 ~ EventsListComponent ~ constructor ~ aux', events);
    });
  }

  ngOnInit(): void {
  }

}
