import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { DrawingAreaComponent } from './drawing-area/drawing-area.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    DrawingAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
