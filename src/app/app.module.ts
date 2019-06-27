import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { PersonComponent } from './person/person.component';
import { TableColumnComponent } from './table-column/table-column.component';
import { Person2Component } from './person2/person2.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TableComponent, PersonComponent, TableColumnComponent, Person2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
