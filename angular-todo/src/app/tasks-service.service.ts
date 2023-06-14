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
    if (!description) {
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
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}