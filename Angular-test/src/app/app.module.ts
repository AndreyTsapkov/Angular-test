import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { ProductService } from './services/products.service';
import { purchaseApp } from './components/purchaseApp/purchaseApp.component';

@NgModule({
  declarations: [AppComponent, ProductComponent, InputComponent, purchaseApp],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
