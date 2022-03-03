import { Component, OnInit, ViewChild } from '@angular/core';
import { EventsService } from '../../events.service';
import { EventsPerDay } from '../../interfaces/events-per-day.interface';
import { EventHistory } from '../../interfaces/event.interface';
import { EventType } from '../../interfaces/event-type.enum';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  @ViewChild('viewDetailModal') viewDetailModal: any;

  events: EventHistory[] = [];
  filteredEvents: EventHistory[] = [];
  rows = ['year', 'type', 'text'];
  loading: boolean = true;
  eventsType: string[] = Object.values(EventType);
  form: FormGroup;

  eventDetail: EventHistory = {
    html: "",
    links: [],
    no_year_html: "",
    text: "",
    year: ""
  }

  constructor(private eventsService: EventsService, private formBuilder: FormBuilder, private modalService: NgbModal) {
    this.getEvents();
    this.form = this.formBuilder.group({
      type: this.formBuilder.array([], null)
    });
  }

  ngOnInit(): void { }

  onCheckboxChange(e: any) {
    const eventsType: FormArray = this.form.get('type') as FormArray;
    if (e.target.checked) {
      eventsType.push(new FormControl(e.target.value));
    } else {
      const index = eventsType.controls.findIndex(x => x.value === e.target.value);
      eventsType.removeAt(index);
    }
    this.filterEvents(this.form.value.type);
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

    this.filteredEvents = this.events;
  }

  filterEvents(filters: EventType[]) {
    if (filters.length === 0) {
      this.filteredEvents = this.events;
    } else {
      this.filteredEvents = [];
      filters.forEach((filter) => {
        this.filteredEvents = this.filteredEvents.concat(this.events.filter((event) => {
          return event.type === filter
        }))
      });
    }
  }

  viewDetail(idx: number) {
    this.open(this.viewDetailModal, idx);
  }

  open(viewModal: any, idx: number) {
    this.modalService.open(viewModal);
    this.eventDetail = this.filteredEvents[idx];
  }

}
