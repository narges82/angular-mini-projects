import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IC } from "./ic";

@Component({
  selector: 'cars',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cars-list.component.html',
})
export class CarsListComponent {
  showImages: boolean = false;
  _filterText: string = '';
    set listFilter(value: string){
        this._filterText = value;
    }
  cars: IC[] = [
    { 
      carName: 'Toyota Camry', 
      carCode: 'CAM001', 
      releaseDate: '2023-01-01', 
      price: 25000, 
      rating: 5, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4C8W3t-qUHHDDAU9x5QpIzumsU8lQXt4n1Q&s'
    },
    { 
      carName: 'Honda Accord', 
      carCode: 'ACC001', 
      releaseDate: '2022-11-15', 
      price: 28000, 
      rating: 4.5, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpJonVcYhlGnd71xz8TrIRgAhEP6ZnEQMekw&s'
    },
    { 
      carName: 'Ford Mustang', 
      carCode: 'MUS001', 
      releaseDate: '2023-03-20', 
      price: 35000, 
      rating: 4.7, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwsDRi13xZ32udtpH1co4LfZyBjmUAfeiMg&s'
    },
    { 
      carName: 'Chevrolet Corvette', 
      carCode: 'COR001', 
      releaseDate: '2023-02-10', 
      price: 60000, 
      rating: 4.8, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcrgh6Y5IO5DuUxo99Vd0wqwgGdUpgSAL_Q&s'
    },
    { 
      carName: 'Tesla Model S', 
      carCode: 'TES001', 
      releaseDate: '2023-04-05', 
      price: 80000, 
      rating: 4.9, 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtAvyXbPD7pljHyRcahKOxc6eZ8PtCOgi4A&s'
    }
  ];

  get filteredCars() {
    return this.cars.filter(car => 
      car.carName.toLowerCase().includes(this._filterText.toLowerCase())
    );
  }
  toggleImages() {
    this.showImages = !this.showImages;
  }
}
