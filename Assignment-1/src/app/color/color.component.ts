import { Component, OnInit } from '@angular/core';
import { DrawingAreaComponent } from '../drawing-area/drawing-area.component';

@Component({
  providers: [DrawingAreaComponent],
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  public message = '';
  public availableColors = ["red", "green", "blue"];
  constructor(private drawingArea: DrawingAreaComponent) { }

  ngOnInit(): void {
  }

  onClick(inputColor: string) {
    if (!inputColor) {
      this.message = 'Field Cannot be empty!'
      return;
    }
    if (!this.availableColors.includes(inputColor)) {
      console.log(inputColor)
      this.message = 'Try with some other color :(';
      return;
    }
    console.log(`You entered ${inputColor}`)
    this.drawingArea.changeColor(inputColor)
    this.message = ''
  }
}
