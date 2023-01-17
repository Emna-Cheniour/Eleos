import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../model/Event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  title: String = "Upcoming Events";
  events: Event[] = [];
  @Input() show : boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.events = [
      new Event('event-1.jpg','01-Jan-45','8:00 - 10:00','New York','Lorem ipsum dolor sit','Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor'),
      new Event('event-2.jpg','02-Jan-45','8:00 - 10:00','New York','Lorem ipsum dolor sit','Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor'),
      new Event('event-1.jpg','03-Jan-45','8:00 - 10:00','New York','Lorem ipsum dolor sit','Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor'),
      new Event('event-2.jpg','04-Jan-45','8:00 - 10:00','New York','Lorem ipsum dolor sit','Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor')
    ]
  }

}
