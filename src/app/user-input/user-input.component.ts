import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentData } from '../investment-data.model';
import { InvestmentService } from '../services/investment.service';

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // Properties to hold user input values
  investmentAmount = signal("");
  annualInvestment = signal("");
  expectedReturn = signal("");
  investmentDuration = signal("");

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
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
