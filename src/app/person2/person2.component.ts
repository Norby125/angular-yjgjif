import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person2',
  templateUrl: './person2.component.html',
  styleUrls: ['./person2.component.css']
})
export class Person2Component implements OnInit {
  @Input() person: any;
  constructor() { }

  ngOnInit() {
  }

}