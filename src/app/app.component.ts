import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  childTitles:string[]=["veg","fruit","spices"];
  items:string[][]=[
    ["oinon","tomato", "potato"],
    ["apple","banana","grape"],
    ["cardamon","conamon","pepper"]
  ]

  handleChildData(data, childCount){
    this.items[childCount].push(data);
  }
}
