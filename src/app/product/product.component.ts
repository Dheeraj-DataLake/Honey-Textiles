import { Component, OnInit } from '@angular/core';

import { HoneyService } from '../honey.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: any[];

  constructor(private honeyService: HoneyService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.honeyService.getProducts()
      .subscribe(heroes => this.products = heroes);
  }

  viewProductImage(param) {
    window.open(param);
  }

}