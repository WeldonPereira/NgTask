import { Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly _items = signal<Array<Todo>>([
    { id: crypto.randomUUID(), title: 'Implementar App Mobile', completed: false },
    { id: crypto.randomUUID(), title: 'Implementar App Web', completed: true },
    { id: crypto.randomUUID(), title: 'Implementar API REST', completed: false },
  ]);

  readonly items = this._items.asReadonly();

  toogle(id: string) {
    this._items.update((items) => {
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    });
  }
}
