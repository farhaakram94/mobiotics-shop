import { Component, OnInit } from '@angular/core';
import { BroadcasterService } from '../../services/broadcaster.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  subscription: Subscription;
  cartTotal: Number = 0;
  checkoutMessage:String;
  title = 'modal-app';
  showModal = false;
  qty: Number = 0

  toggleModal = () => {
    this.showModal = !this.showModal;
  }

  constructor(private broadcasterService: BroadcasterService) {

    this.subscription = this.broadcasterService.isCartUpdated().subscribe(
      updatedAmt=>{

          this.cartTotal = updatedAmt.total
          this.qty = updatedAmt.qty
      }
    )
   }

  ngOnInit() {
  }
  checkout(){
    if(this.cartTotal == 0){
      this.checkoutMessage = "Your cart is empty!! Please add items to your cart to checkout."
    }
    else{
      this.checkoutMessage="Transaction Successful";
    }
    this.showModal = !this.showModal;
this.broadcasterService.transactionComplted(true)
  }
  

}
