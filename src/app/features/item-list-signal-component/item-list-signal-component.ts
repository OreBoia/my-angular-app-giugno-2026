import { Component, inject } from '@angular/core';
import { DataSignalService } from '../../core/services/data-signal-service';

@Component({
  selector: 'app-item-list-component',
  imports: [],
  templateUrl: './item-list-signal-component.html',
  styleUrl: './item-list-signal-component.css',
})
export class ItemListComponent {
  private dataService = inject(DataSignalService)

  items = this.dataService.items
  itemsCount = this.dataService.itemsCount

  addSampleItem(): void {
    this.dataService.addItem(`Nuovo elemento ${this.itemsCount() + 1}`)
  }
}
