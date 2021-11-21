import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumWithCommasPipe } from './num-with-commas.pipe';

@NgModule({
  declarations: [NumWithCommasPipe],
  imports: [CommonModule],
  exports: [NumWithCommasPipe],
})
export class NumWithCommasModule {}
