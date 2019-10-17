import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CustomModalComponent } from './custom-modal/custom-modal.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ShoppingCartComponent, CustomModalComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ShoppingCartComponent,
    CustomModalComponent
  ]
})
export class ComponentsModule { }
