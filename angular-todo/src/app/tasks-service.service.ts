import { Injectable } from '@angular/core';
import { Item } from './item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksServiceService {
  constructor(private http: HttpClient) {}

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>('http://localhost:3000/items', item);
  }
  getItems() {
    return this.http.get<Item[]>('http://localhost:3000/items');
  }
}
