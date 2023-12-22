import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>();
  @Output() itemsCountChange = new EventEmitter<number>();
  @Output() sortChange = new EventEmitter<string>();

  sort = 'desc';
  itemsShowCount = 12;

  updateSort(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  updateItems(count: number): void {
    this.itemsShowCount = count;
    this.itemsCountChange.emit(count);
  }

  updateColumns(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
    console.log(colsNum + ' column');
  }
}
