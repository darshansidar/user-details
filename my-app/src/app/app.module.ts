import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http'
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';
import { OrdersComponent } from './orders/orders.component';

const appRoutes: Routes = [
   { path: 'Product', component: ProductComponent },
   { path: 'Users', component: UsersComponent },
   { path: 'Orders', component: OrdersComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UsersComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
