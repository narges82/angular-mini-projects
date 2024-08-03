import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarsListComponent } from './cars/cars-list.component';
import { CommonModule } from '@angular/common';
import {AppModule} from'./app.module'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CarsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cars app';
}
