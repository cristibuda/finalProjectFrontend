import { Component } from '@angular/core';
import {Item} from "../models/Item";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  selectedItem: Item = new Item("", "", "");

  onChangeData(item: Item): void {
    console.log("dashboard on change data");
    console.log(item);
    this.selectedItem = item;
  }
}
