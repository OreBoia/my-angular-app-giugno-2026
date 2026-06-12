import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService
{
  private items: string[] = ["Mela", "Pera", "Formaggio"]

  addItem(item: string) :void{
    this.items.push(item)
  }

  updateAllList(newList: string[]){
    this.items = newList
  }

  getItems() :string[] {
    return [...this.items]
  }
}
