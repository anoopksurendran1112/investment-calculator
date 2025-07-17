import { Component, EventEmitter, output, Output, signal } from '@angular/core';
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
 calculate = output<InvestmentData>();
  
  // Properties to hold user input values
  investmentAmount = signal("");
  annualInvestment = signal("");
  expectedReturn = signal("");
  investmentDuration = signal("");


  onSubmit() {
    // Emit the collected data when the form is submitted
    this.calculate.emit({
      initialInvestment: +this.investmentAmount(),
      annualInvestment: +this.annualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.investmentDuration()
    });
    // Reset the input fields after submission
    this.investmentAmount.set("");
    this.annualInvestment.set("");
    this.expectedReturn.set("");
    this.investmentDuration.set("");
  }
}
