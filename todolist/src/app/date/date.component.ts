import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  currentDate = new Date();

  validateDate(dateInput: NgModel) {
    const inputDate = new Date(dateInput.value);
    if (inputDate > this.currentDate) {
      dateInput.control.setErrors({ futureDate: true });
    } else {
      dateInput.control.setErrors(null);
    }
  }

}
