import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { AstronomicalEvent } from '../models/event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: AstronomicalEvent[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getTodayEvents().subscribe(data => {
      this.events = data;
    });
  }
}