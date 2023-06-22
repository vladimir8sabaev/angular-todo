import { Component } from '@angular/core';
import { Item } from './item';
import { TasksServiceService } from './tasks-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo';
  description = '';
  status = '';
  allItems: Item[];
  filter: 'all' | 'important' | 'unimportant' | 'done' = 'all';
  constructor(private taskService: TasksServiceService) {
    this.allItems = taskService.getItems();
  }
  addItem() {
    this.taskService.addItem(this.description, this.status);
    this.allItems = this.taskService.getItems();
  }
  removeItem(item: Item): void {
    this.taskService.removeItem(item);
    this.allItems = this.taskService.getItems();
  }
  get filterItems() {
    if (this.filter === 'all') {
      return this.allItems;
    } else {
      return this.allItems.filter((item) => {
        return item.status === this.filter;
      });
    }
  }
}
