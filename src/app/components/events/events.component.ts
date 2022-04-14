import { Component, OnInit } from '@angular/core';
declare const FullCalendar: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  resources: any = [];
  externalEvents: any = [];
  events: any = [];
  options = {
    
    defaultView: 'agendaMonth',
    defaultDate: '2018-07-26',
    // minTime: '08:00:00',
    // maxTime: '18:00:00',
    // slotDuration: '00:15:00',
    editable: true,
    droppable: true,
    slotEventOverlap: false,
    // header: {
    //   left: '',
    //   center: '',
    //   right: ''
    // }
  };

  constructor() { }

  ngOnInit() {
    this.resources = [
      {
        id: '1',
        title: '',
      },
    ];

    this.events = [
      {
        title: 'Test Event',
        start: '2018-07-26T10:00:00',
      },
    ];

    this.externalEvents = [
      {
        title: 'Some Event',
        duration: '01:00:00',
        background: true,
      },
    ];
  }

  ngAfterViewChecked() {}

  getEvent(event) {
    return JSON.stringify(event);
  }


}
