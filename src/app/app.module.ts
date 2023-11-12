import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListItemsComponent } from './dashboard/list-items/list-items.component';
import {AddEditItemComponent} from "./dashboard/add-edit-item/add-edit-item.component";
import {MatSelectModule} from "@angular/material/select";
import { AddEditCartComponent } from './dashboard/add-edit-cart/add-edit-cart.component';
import {MatIconModule} from "@angular/material/icon";
import { AddEditUserComponent } from './dashboard/add-edit-user/add-edit-user.component';
import { ListUsersComponent } from './dashboard/list-users/list-users.component';
import { ListCartsComponent } from './dashboard/list-carts/list-carts.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    AddEditItemComponent,
    ListItemsComponent,
    AddEditCartComponent,
    AddEditUserComponent,
    ListUsersComponent,
    ListCartsComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    MatSelectModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
