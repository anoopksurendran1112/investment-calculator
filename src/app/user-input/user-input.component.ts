import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData } from '../investment-data.model';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // This component collects user input for investment calculations
  @Output() calculate = new EventEmitter<InvestmentData>();
  
  // Properties to hold user input values
  investmentAmount: string = "0";
  annualInvestment: string = "0"; 
  expectedReturn: string = "0";
  investmentDuration: string = "0";


  onSubmit() {
    // Emit the collected data when the form is submitted
    this.calculate.emit({
      initialInvestment: +this.investmentAmount,
      annualInvestment: +this.annualInvestment,
      expectedReturn: +this.expectedReturn,
      duration: +this.investmentDuration
    });
  }
}
