import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent {

  deleteTableRow = false;

  @Input() userDetails: any[] = [];
  @Output() deletePopup = new EventEmitter<number>();
  @Output() selectTableRow = new EventEmitter<any>();

  updateInputData(user: any) {
    this.selectTableRow.emit(user);
    // console.log(user);
    // console.log('Data is ready for updating.');
  }

  indexObject!: number;
  deleteData(index = this.indexObject) {
    this.deletePopup.emit(index);
    console.log('Data at position ' + index + ' is deleted from the table.');
  }
  
  popup(index: number) {
    this.indexObject = index;
    console.log('Data at position ' + index + ' is ready to be deleted.');
  }
}
