import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import {PersonComponent} from '../person/person.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() public data;
  @ContentChild('person', {read: TemplateRef, static: false}) personTemplateRef;
  constructor() { }

  ngOnInit() {
  }

}