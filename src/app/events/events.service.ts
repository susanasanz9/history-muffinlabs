import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventsPerDay } from './interfaces/events-per-day.interface';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  apiUrl = 'https://history.muffinlabs.com/date';

  constructor(private http: HttpClient) { }

  getEventsList(): Observable<EventsPerDay> {
    return this.http.get<EventsPerDay>(this.apiUrl);
  }
}
