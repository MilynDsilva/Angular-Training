import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawing-area',
  templateUrl: './drawing-area.component.html',
  styleUrls: ['./drawing-area.component.css']
})
export class DrawingAreaComponent implements OnInit {
  public color:any
  constructor() { }

  ngOnInit(){
    this.changeColor('base')
  }

  changeColor(color:string){
    this.color = color
    const doc = document.getElementById('color')
    doc!.style.backgroundColor = color
    console.log("Color change was called from drawing area component",color)    
  }
}
