import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductsComponent } from './components/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { AlertMessagesComponent } from './components/alert-messages/alert-messages.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductsNavBarComponent } from './components/products/products-nav-bar/products-nav-bar.component';
import { ProductsListComponent } from './components/products/products-list/products-list.component';
import { ProductFalshMessagesComponent } from './components/products/product-falsh-messages/product-falsh-messages.component';
import { ProductsItemComponent } from './components/products/products-list/products-item/products-item.component';
import { StatsComponent } from './components/stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ProductsComponent,
    FooterComponent,
    ProductAddComponent,
    AlertMessagesComponent,
    ProductEditComponent,
    ProductsNavBarComponent,
    ProductsListComponent,
    ProductFalshMessagesComponent,
    ProductsItemComponent,
    StatsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbRatingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
