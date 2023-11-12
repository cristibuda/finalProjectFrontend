import {Component, EventEmitter, Output} from '@angular/core';
import {Item} from "../../models/Item";
import {ItemService} from "../../services/item.service";
import {CartService} from "../../services/cart.service";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  @Output() changeData: EventEmitter<any> = new EventEmitter<any>();

  usersList: Array<any> = [];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUserList().subscribe((usersList: Array<any>) => {
      this.usersList = usersList;
    });
  }


  onDelete(user: any): void {
    console.log(user);
    // user.id! => ! ii spune compilatorului ca proprietatea "id" este diferita de null.
    this.userService.deleteUser(user.id!);
  }

  onEdit(user: any): void {
    console.log("user list on edit")
    console.log(user);
    this.changeData.emit(user);
  }
}



