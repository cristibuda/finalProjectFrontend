import { Component } from '@angular/core';
import {Item} from "../models/Item";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  selectedItem: Item = new Item("", "", "");
  selectedUser: any;
  onChangeItem(item: Item): void {
    console.log("dashboard on change data");
    console.log(item);
    this.selectedItem = item;
  }
  onChangeUser(user: any): void {
    console.log("dashboard on change data");
    console.log(user);
    this.selectedUser= user;
  }

}
