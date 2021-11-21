import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumWithZeroPipe } from './num-with-zero.pipe';

@NgModule({
  declarations: [NumWithZeroPipe],
  imports: [CommonModule],
  exports: [NumWithZeroPipe],
})
export class NumWithZeroModule {}
