import { EventsPerDay } from './../../interfaces/events-per-day.interface';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsListComponent } from './events-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EventsService } from '../../events.service';
import { of } from 'rxjs';

const eventsPerDayMock: EventsPerDay = {
  data: {
    Births: [
      {
        html: '',
        links: [
          {
            link: "",
            title: ""
          }
        ],
        no_year_html: '',
        text: 'Leon Battista Alberti, Italian painter, poet, and philosopher (d. 1472)',
        year: '1402'
      },
      {
        html: '',
        links: [
          {
            link: "",
            title: ""
          }
        ],
        no_year_html: '',
        text: 'John FitzAlan, 14th Earl of Arundel (d. 1435)',
        year: '1408'
      }
    ],
    Deaths: [
      {
        html: '',
        links: [
          {
            link: "",
            title: ""
          }
        ],
        no_year_html: '',
        text: 'Alberti, Italian painter, poet, and philosopher (d. 1472)',
        year: '1404'
      }
    ],
    Events: [
      {
        html: '',
        links: [
          {
            link: "",
            title: ""
          }
        ],
        no_year_html: '',
        text: 'FitzAlan, 14th Earl of Arundel (d. 1435)',
        year: '1408'
      }
    ]
  },
  date: "",
  url: ""
}
const eventsServiceMock = {
  getEventsList: () => of(eventsPerDayMock)
}

describe('EventsListComponent', () => {
  let component: EventsListComponent;
  let fixture: ComponentFixture<EventsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventsListComponent],
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: EventsService,
          useValue: eventsServiceMock
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getEvents should return eventsPerDay from service and generate events array of objects', () => {
    fixture.debugElement.injector.get(EventsService);
    expect(component.events.length).toBe(4);
  });
});
