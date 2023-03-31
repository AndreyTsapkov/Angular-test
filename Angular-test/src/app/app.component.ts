import { Component, OnInit } from '@angular/core';
import { IProduct } from './modules/product';
import { ProductService } from './services/products.service';
// import { products as data } from './data/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

///
export class AppComponent implements OnInit {
  title = 'angular app';

  products: IProduct[] = [];

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
  }
}
