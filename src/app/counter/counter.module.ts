import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterComponent } from './counter/counter.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';

const routes: Routes = [{ path: '', component: CounterComponent }];
@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomCounterInputComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],

})
export class CounterModule {}
