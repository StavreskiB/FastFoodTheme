import { Component, OnInit, OnDestroy, AfterViewChecked, EventEmitter, Output, ElementRef, Input, DoCheck, IterableDiffers } from '@angular/core';
import * as moment from 'moment';
declare const FullCalendar: any;

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit, AfterViewChecked, DoCheck, OnDestroy {

  @Input() externalsRef: ElementRef;

  calendar: any;
  differ: any;
  initialized: boolean;

  @Input() events: any[];
  @Output() eventsChange = new EventEmitter();

  constructor(private el: ElementRef, differs: IterableDiffers) {
    this.differ = differs.find([]).create();
    this.initialized = false;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.calendar) { 
      this.calendar.destroy();
      this.calendar = null;
    }
  }

  ngAfterViewChecked() {
    if (!this.initialized) {
      FullCalendar.dragula({
        containers: [this.externalsRef],
        copy: true
      })
      this.calendar = new FullCalendar.Calendar(this.el.nativeElement, {
        editable: true,
        droppable: true,
        defaultDate: '2018-07-26',
        defaultView: 'agendaDay',
        eventOverlap: false,
        drop: (date) => {
          console.log('drop: ', date);
        },
        eventReceive: (event) => {
          console.log('eventReceive: ', this.calendar.clientEvents());
        },
        eventDrop: (event, delta, revertFunc) => {
          console.log('eventDrop: ', this.calendar.clientEvents());
        }
      });
      this.calendar.render();
      if (this.events) {
        this.calendar.addEventSource(this.events);
      }
      this.initialized = true;   
    }
  }

  ngDoCheck() {
    const eventChanges = this.differ.diff(this.events);
    if (this.calendar && eventChanges) {
      this.calendar.removeEventSources();

      if (this.events) {
        this.calendar.addEventSource(this.events);
      }
    }
  }

}