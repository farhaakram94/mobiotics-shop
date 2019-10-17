import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { BroadcasterService } from '../../services/broadcaster.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  title = 'modal-app';
  showModal = false;
  productList = []
  totalPrice = 0 
  totalQuantity = 0

  toggleModal = () => {
    this.showModal = !this.showModal;
  }

  constructor(private productService: ProductService, private broadcasterService: BroadcasterService) { 
    this.broadcasterService.isTransactionComplete().subscribe(
      transactionComplete=>{
        if(transactionComplete){
          this.totalPrice = 0;
          this.refreshCart()
        }

      }
    )
  }

  ngOnInit() {
    var self = this;
    this.productService.getProductList().then(function(json){
      self.productList = json;
      self.refreshCart()
  });
  }

  getImageLocation(product){
    return './assets/product-images/' + product.image + '.png';
  }

  refreshCart(){
    this.productList.forEach(product=>{
      product.amount = product.price
      product.initialWeight = product.weight
      product.quantity = 0
    })
  }

  onPlus(i, addCart?){
    let product = this.productList[i]
    product.quantity+=1
    product.amount = product.quantity * product.price
    product.weight = product.quantity * product.initialWeight 
    this.productList[i] = product
    this.totalPrice += product.price
    this.totalQuantity += 1
    this.broadcasterService.cartUpdated({qty: this.totalQuantity, total: this.totalPrice});


  }

  onMinus(i){
    let product = this.productList[i]
    if(product.quantity != 0 ){
      product.quantity-=1;
      if(product.quantity != 0){
        product.weight = product.initialWeight* product.quantity
        product.amount = product.quantity * product.price

      }
      else{
        product.amount = product.price
        product.weight = product.initialWeight
      }
      this.totalPrice -= product.price
      if(this.totalQuantity > 0)
        this.totalQuantity -= 1

    }
    this.productList[i] = product
    this.broadcasterService.cartUpdated({qty: this.totalQuantity, total: this.totalPrice})



  }
}
