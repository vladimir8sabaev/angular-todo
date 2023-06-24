import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';
import { TasksServiceService } from '../tasks-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent {
  constructor(
    private taskService: TasksServiceService,
    private http: HttpClient
  ) {}
  editable = false;
  description = '';
  status = '';
  statusArr = ['important', 'unimportant', 'done'];
  @Input() item: Item;
  @Output() remove = new EventEmitter<Item>();
  saveItem() {
    if (!this.description) return;
    this.editable = false;
    this.item.description = this.description;
    this.item.status = this.status;
    this.http
      .put(`http://localhost:3000/items/${this.item.id}`, {
        description: this.description,
        status: this.status,
      })
      .subscribe((res) => console.log(res));
  }
}
