import { Component, Input, ViewChild } from '@angular/core';
import { UserInputComponent } from './user-input/user-input.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent {

  @ViewChild(UserInputComponent) userInput!: UserInputComponent;
  
  itemsList: any[] = [];
  @Input() selectedDetails: any = [];

  addNewData(newData: any) {
    this.itemsList.push(newData);
    console.log(newData);
    console.log('Data is added to the table component.');
  }

  updateData(updatedData: any) {
    if (this.selectedDetails !== null) {
      const index = this.itemsList.indexOf(this.selectedDetails);
      this.itemsList[index] = updatedData;
      console.log('You have selected to update - ', this.selectedDetails);
      console.log('Details are updated to - ', updatedData);
      console.log('Data is moved from input to table component.');
      this.userInput.isDisabled = false;
      this.userInput.showButton = false;
    }
  }
  
  selectRow(value: any) {
    this.selectedDetails = value;
    console.log(this.selectedDetails);
    console.log('Data is moved from table to input component to be updated.');
    this.userInput.selectedInputs = this.selectedDetails;
    this.userInput.getInputData();
    this.userInput.showButton = true;
    this.userInput.isDisabled = true;
  }
  
  deleteRow(index: number) {
    this.itemsList.splice(index, 1);
  }
  
}
