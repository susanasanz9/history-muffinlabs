import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventsPerDay } from './interfaces/events-per-day.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getEventsList(day?: number, month?: number): Observable<EventsPerDay> {
    const params = (day && month) ? `/${ day }/${ month }` : '';
    return this.http.get<EventsPerDay>(environment.API_URL + params);
  }
}
