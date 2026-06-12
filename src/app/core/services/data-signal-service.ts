import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataSignalService
{
  private _items = signal<string[]>(["Mela", "Pera", "Formaggio"])

  readonly items = this._items.asReadonly()
  readonly itemsCount = computed(() => this._items().length)

  addItem(item:string):void{
    this._items.update((currentItems) => [...currentItems, item])
  }

  getItems(): string[]{
    return this._items()
  }
}
