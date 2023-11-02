import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})

export class UserInputComponent {

  submitted = false;
  showButton = false;
  createPopup = false;
  updatePopup = false;
  isDisabled = false;
  
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    age: new FormControl('', [Validators.required, Validators.maxLength(3)]),
    gender: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    occupation: new FormControl('', [Validators.required, Validators.maxLength(20)])
  });
  
  get validFunc() { return this.userForm.controls; }

  @Input() selectedInputs : any[] = [];
  @Output() addTableRow = new EventEmitter<any>();
  @Output() updateDataToTable = new EventEmitter<any>();
  
  addData() {
    if (this.userForm.invalid) {
      console.log(this.userForm.value);
      this.submitted = true;
      return;
    }

    this.addTableRow.emit(this.userForm.value);
    this.createPopup = true;
    this.userForm.reset();
    // console.log(this.userForm.value);
    // console.log('Data is emitted to the table.');
  }
  
  onUpdate() {
    this.updateDataToTable.emit(this.userForm.value);
    this.updatePopup = true;
    this.userForm.reset();
    // console.log('You have selected to update - ', this.selectedInputs)
    // console.log('Details are updated to - ', this.userForm.value);
    // console.log('Data is emitted to table component.');
  }
  
  getInputData() {
    let data: any = this.selectedInputs;
    console.log(data);
    this.validFunc['name'].setValue(data.name)
    this.validFunc['age'].setValue(data.age)
    this.validFunc['gender'].setValue(data.gender)
    this.validFunc['occupation'].setValue(data.occupation)
  }

  onKeyPress(event: KeyboardEvent): boolean {
    const regex = /[a-z A-Z]/i;
    const isValidInput = regex.test(event.key);
    return isValidInput;
  }

  onNumberPress(event: KeyboardEvent): boolean {
    const regex = /[0-9]/i;
    const isValidInput = regex.test(event.key);
    return isValidInput;
  }

}
