import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CarsListComponent } from './cars/cars-list.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    AppComponent,
    CarsListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
