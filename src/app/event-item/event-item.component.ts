import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../model/Event';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() event!: Event;

  constructor() { }

  ngOnInit(): void {
  }

}
