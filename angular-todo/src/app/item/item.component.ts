import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';
import { TasksServiceService } from '../tasks-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  constructor(private taskService: TasksServiceService) {}
  editable = false;
  statusArr = ['important', 'unimportant', 'done'];
  @Input() item: Item;
  @Output() remove = new EventEmitter<Item>();
  saveItem(description: string, status: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;
    this.item.status = status;
    this.taskService.allItems[
      this.taskService.allItems.indexOf(this.item)
    ].description = description;
    this.taskService.allItems[
      this.taskService.allItems.indexOf(this.item)
    ].status = status;
    console.log(this.taskService.allItems);
  }
}
