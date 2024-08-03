import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class CalculatorComponent {
  firstOperand: string = '';
  secondOperand: number = 0;
  operator: string | null = null;
  result: number | null = null;
  isFirstOperandNaN: boolean = false;

  setFirstOperand(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const parsedValue = parseFloat(value);
    const isFloat = !Number.isInteger(parsedValue);

    if (isNaN(parsedValue)) {
      this.isFirstOperandNaN = true;
    } else if (isFloat) {
      this.isFirstOperandNaN = true;
      alert("Please enter an integer value.");
      this.firstOperand = ''; 
    } else {
      this.isFirstOperandNaN = false;
      this.firstOperand = value;
    }
  }

  setSecondOperand(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.secondOperand = parseFloat(value);
  }

  getOperation(op: string) {
    this.operator = op;
    this.calculate();
  }

  calculate() {
    if (this.operator && !this.isFirstOperandNaN) {
      const firstOperandNumber = parseFloat(this.firstOperand);
      switch (this.operator) {
        case '+':
          this.result = firstOperandNumber + this.secondOperand;
          break;
        case '-':
          this.result = firstOperandNumber - this.secondOperand;
          break;
        case '*':
          this.result = firstOperandNumber * this.secondOperand;
          break;
        case '/':
          this.result = firstOperandNumber / this.secondOperand;
          break;
        default:
          this.result = null;
          break;
      }
    }
  }

  clear() {
    this.firstOperand = '';
    this.secondOperand = 0;
    this.operator = null;
    this.result = null;
    this.isFirstOperandNaN = false;
  }
}
