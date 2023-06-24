import { Component } from '@angular/core';
import { Item } from '../item';
import { TasksServiceService } from '../tasks-service.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  title = 'todo';
  description = '';
  status = '';
  allItems: Item[];
  filter: 'all' | 'important' | 'unimportant' | 'done' = 'all';
  constructor(
    private taskService: TasksServiceService,
    private http: HttpClient
  ) {
    this.http.get<Item[]>('http://localhost:3000/items').subscribe({
      next: (data: any) => {
        this.allItems = data;
      },
    });
  }
  addItem(description: string, status: string) {
    if (!description || !status) {
      return;
    }
    const newItem: Item = {
      id: this.allItems.length + 1,
      description: this.description,
      status: this.status,
    };
    this.allItems.unshift(newItem);
    this.taskService.addItem(newItem).subscribe((todo) => console.log(todo));
    this.description = '';
  }
  removeItem(item: Item): void {
    const itemIdsArr = this.allItems.map((item) => item.id);
    itemIdsArr.forEach((id) => {
      this.http
        .delete(`http://localhost:3000/items/${id}`)
        .subscribe(() => console.log('deleted'));
    });
    this.allItems = this.allItems.filter((task) => task.id !== item.id);
    this.allItems.map((item, index) => {
      item.id = index + 1;
    });
    this.allItems.forEach((item) => {
      this.http
        .post<Item>('http://localhost:3000/items', item)
        .subscribe((todo) => console.log(todo));
    });
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
  ngOnInit() {
    this.taskService.getItems().subscribe({
      next: (data: any) => {
        this.allItems = data;
      },
    });
  }
}
