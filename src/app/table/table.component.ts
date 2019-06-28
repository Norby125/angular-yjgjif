import { Component, AfterViewInit, Input, ContentChild, TemplateRef, ContentChildren, QueryList } from '@angular/core';
import {PersonComponent} from '../person/person.component';
import {TableColumnComponent} from '../table-column/table-column.component';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  @Input() public data;
  @ContentChildren(TableColumnComponent) tableColumns: QueryList<TableColumnComponent>;
  constructor() { }

  ngAfterViewInit() {
    
  }

  getTemplateRef(index: number){
    if(this.tableColumns){
      const column = this.tableColumns.toArray()[index];
      return column.columnTemplate;
    }
    
  }

}