import { Component, input } from '@angular/core';
import { InvestmentResultData } from '../investment-data.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-result',
  imports: [CurrencyPipe],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  resultData= input<InvestmentResultData[]>();

}
