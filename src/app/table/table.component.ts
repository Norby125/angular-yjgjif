import { Component, AfterViewInit, Input, ContentChild, TemplateRef, ContentChildren } from '@angular/core';
import {PersonComponent} from '../person/person.component';
import {TableColumnComponent} from '../table-column/table-column.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  @Input() public data;
  @ContentChild('person', {read: TemplateRef, static: false}) personTemplateRef;
  @ContentChildren('person', {read: TemplateRef}) personTemplatesRef;
  @ContentChildren(TableColumnComponent) tableColumns;
  constructor() { }

  ngAfterViewInit() {
    console.log(this.personTemplateRef);
    console.log(this.personTemplatesRef);
    console.log(this.tableColumns);
  }

}