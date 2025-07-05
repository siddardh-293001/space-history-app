import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AstronomicalEvent } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = 'http://localhost:8080/api/events/today';

  constructor(private http: HttpClient) {}

  getTodayEvents(): Observable<AstronomicalEvent[]> {
    return this.http.get<AstronomicalEvent[]>(this.apiUrl);
  }
}
