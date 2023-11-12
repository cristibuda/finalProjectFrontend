import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Item} from "../models/Item";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartObservable = new BehaviorSubject<Array<Item>>([]);

  constructor() {
  }

  public addToCart(item: Item): void {
    let items: Item[] = this.cartObservable.getValue();
    items.push(item);
    this.cartObservable.next(items);
  }

  public removeFromCart(item:Item):void{
    let items: Item[]= this.cartObservable.getValue();
    // items=items.filter((it: Item)=>{
    //   if(it.id == item.id){
    //     return false;
    //   }else{ return true};
    // })
    items= items.filter((it:Item)=>it.id!= item.id)
    this.cartObservable.next(items);
  }
  public getCart(){
    return this.cartObservable.asObservable()
  }
}
