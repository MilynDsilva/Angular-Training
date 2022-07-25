import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawing-area',
  templateUrl: './drawing-area.component.html',
  styleUrls: ['./drawing-area.component.css']
})
export class DrawingAreaComponent implements OnInit {
 // public color:any
  colorOne = 'base';
  public classes :any;
  constructor() { }

  ngOnInit() {
    //this.colorOne = ''
    //this.changeColor('base')
  }

  changeColor(color: string) {
    this.colorOne = color
    //this.color = color
    this.classes = color //does not work
    // const doc = document.getElementById('color')
    // doc!.style.backgroundColor = color
    console.log("Color change was called from drawing area component", color)
  }
}
