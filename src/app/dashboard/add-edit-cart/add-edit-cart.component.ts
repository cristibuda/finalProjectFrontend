import { Component } from '@angular/core';
import {Item} from "../../models/Item";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-add-edit-cart',
  templateUrl: './add-edit-cart.component.html',
  styleUrls: ['./add-edit-cart.component.css']
})
export class AddEditCartComponent {

  items: Array<Item> =[];
  constructor(private cartService: CartService) {
    this.cartService
      .getCart()
      .subscribe((cartItems:Array<Item>)=>{this.items=cartItems})
  }
  public onRemove(item: Item){
    this.cartService.removeFromCart(item);
  }

}
