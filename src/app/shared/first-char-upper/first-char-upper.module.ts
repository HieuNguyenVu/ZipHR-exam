import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FirstCharUpperPipe } from './first-char-upper.pipe';

@NgModule({
  declarations: [FirstCharUpperPipe],
  imports: [CommonModule],
  exports: [FirstCharUpperPipe],
})
export class FirstCharUpperModule {}
