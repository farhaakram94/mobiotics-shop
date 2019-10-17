import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class BroadcasterService {

  private cart: Subject<any> = new Subject<any>();
  private transaction: Subject<Boolean> = new Subject<Boolean>();
    constructor() {
  }

  cartUpdated(data: any){
    this.cart.next(data);
  }

  isCartUpdated(): Observable<any> {
    return this.cart.asObservable()
  }

  transactionComplted(data: any){
    this.transaction.next(data)
  }

  isTransactionComplete(): Observable<Boolean>{
    return this.transaction.asObservable()
  }


 
}
