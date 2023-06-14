import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  editable = false;
  statusArr = ['important', 'unimportant', 'done'];
  @Input() item: Item;
  @Input() newItem: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string, status: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
    this.item.status = status;
  }
}
