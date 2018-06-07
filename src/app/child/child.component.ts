import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { StaticInjector } from '@angular/core/src/di/injector';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input('title') childTitle:string="default Title";
@Input('items') thing:string[]=["q","d","g"];
@Output('send') emitter:EventEmitter<string>= new EventEmitter<string>();
item:string;
  constructor() { }

  ngOnInit() {
  }
  sendToParent(){
this.emitter.emit(this.item);
  }

}
