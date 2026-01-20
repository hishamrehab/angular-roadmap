import { Injectable, signal } from "@angular/core";
import type { InvestmentInput } from "./investment-input.model";

@Injectable({
  providedIn: 'root'
})

export class InvestmentService {
    resultData = 
    signal<{
      year: number,
      interest: number,
     valueEndOfYear: number,
    annualInvestment: number,
        totalInterest: number,
        totalAmountInvested: number,
    }[] | undefined>(undefined); 
 

  onCalculateInvestmentResults(
    data : InvestmentInput
     ) {
   const {
     initialInvestment 
    , annualInvestment 
    , expectedReturn 
    , duration 
  } = data;
  const annualData: any[] | undefined = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push();
  }
  
  console.log(annualData);

  this.resultData.set(annualData);
 }
}