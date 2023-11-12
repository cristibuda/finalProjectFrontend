import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
// import {MovieService} from "../services/movie.service";
import {Item} from "../../models/Item";
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.component.html',
  styleUrls: ['./add-edit-item.component.css']
})
export class AddEditItemComponent  implements OnChanges {
  @Input("item") item: Item = new Item("", "", "");

  id: string = "";
  title = new FormControl('', [Validators.required]);
  description = new FormControl('', [Validators.required]);
  category = new FormControl('', [Validators.required]);

  constructor(private itemService: ItemService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Add edit delete movie");
    console.log(this.item);
    this.id = this.item.id!;
    this.title = new FormControl(this.item.title, [Validators.required]);
    this.description = new FormControl(this.item.description, [Validators.required]);
    this.category = new FormControl(this.item.category, [Validators.required]);
  }

  getErrorMessage(formControl: FormControl) {
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    }

    return "";
  }

  onSave(): void {
    let item: Item = new Item(this.title.getRawValue()!, this.description.getRawValue()!, this.category.getRawValue()!);

    item.title = this.title.getRawValue()!;
    item.description = this.description.getRawValue()!;
    item.category = this.category.getRawValue()!;

    item.id = this.id;

    this.resetFrom();

    if(item.id == "") {
      this.itemService.createItem(item);
    } else {
      this.itemService.updateItem(item);
    }

    console.log(item);
    // this.movieService.addMovie(movie);
  }

  private resetFrom() {
    this.id = "";
    this.title = new FormControl('', [Validators.required]);
    this.description = new FormControl('', [Validators.required]);
    this.category = new FormControl('', [Validators.required]);
  }
}
