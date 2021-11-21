import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule } from './shared/navbar/navbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SidebarModule,
    NavbarModule,
    HttpClientModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
