import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable({
  providedIn: 'root',
})
export class TasksServiceService {
  constructor() {}
  allItems: Item[] = [
    { description: 'eat1', status: 'important' },
    { description: 'sleep2', status: 'unimportant' },
    { description: 'play3', status: 'important' },
    { description: 'laugh4', status: 'unimportant' },
  ];
  addItem(description: string, status: string) {
    if (!description || !status) {
      return;
    }
    this.allItems.unshift({
      description,
      status,
    });
  }
  getItems(): Item[] {
    return [...this.allItems];
  }
  removeItem(item: Item): void {
    this.allItems = this.allItems.filter((task) => task !== item);
  }
  changeItem(item: Item, description: string, status: string): void {
    this.allItems[this.allItems.indexOf(item)].description = description;
    this.allItems[this.allItems.indexOf(item)].status = description;
  }
}
