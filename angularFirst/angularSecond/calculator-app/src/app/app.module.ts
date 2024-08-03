import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  // Import CommonModule

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppComponent,
    CalculatorComponent,
    CommonModule  // Include CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
