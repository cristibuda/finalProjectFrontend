import {Component} from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-list-carts',
  templateUrl: './list-carts.component.html',
  styleUrls: ['./list-carts.component.css']
})
export class ListCartsComponent {
  cartList: Array<any> = [];

  constructor(private cartService: CartService) {
    this.cartService.readCarts().subscribe((response: any)=>{
      console.log(response);
      this.cartList= response.data;
    })
  }
  public onDeleteCart(cart: any){
    this.cartService.deleteCart(cart.id);
  }
}
