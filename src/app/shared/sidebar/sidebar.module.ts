import { NgModule } from '@angular/core';
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { SideBarComponent } from './sidebar.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule, NgbNavModule, RouterModule, FontAwesomeModule],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  exports: [SideBarComponent],
})
export class SidebarModule {}
