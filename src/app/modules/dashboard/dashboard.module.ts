// Angular Imports
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { NumWithCommasModule } from 'src/app/shared/num-with-commas/num-with-commas.module';

// This Module's Components
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
    NumWithCommasModule,
    NgxGalleryModule,
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
