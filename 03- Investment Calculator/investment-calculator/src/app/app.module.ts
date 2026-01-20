import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@NgModule({
 declarations: [
       AppComponent,
       HeaderComponent , 
       UserInputComponent ,
       InvestmentResultsComponent
    ],
})

export class AppModule {}