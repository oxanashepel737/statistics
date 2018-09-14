import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { StarsComponent } from './stars/stars.component';
import { ModalComponent } from './modal/modal.component';
import { CookieService } from 'ngx-cookie-service';
import { PropsModalComponent } from './props-modal/props-modal.component';
import {CanActivateGuard} from './can-activate.guard';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    LoginComponent,
    StarsComponent,
    ModalComponent,
    PropsModalComponent
  ],
  imports: [
      FormsModule,
      BrowserModule,
    AppRoutingModule,
      NgbPaginationModule,
      NgbAlertModule,
      NgbModule
  ],
  providers: [CookieService, CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
