import { Component, OnInit, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-table-column',
  templateUrl: './table-column.component.html',
  styleUrls: ['./table-column.component.css']
})
export class TableColumnComponent implements OnInit {
  @Input() public columnTemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}