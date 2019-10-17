import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProductList(){
    return fetch("./assets/inventory.json").then(function(response){
      return response.json();
  })
  }
}
