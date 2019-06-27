import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  data: Person[] = [
    {age: 10, name: "John"}, 
    {age: 20, name: "Doe"},
    {age: 30, name: "Jay"},
    {age: 40, name: "Lead"}
  ]
}

interface Person {
  name: string;
  age: number;
}
