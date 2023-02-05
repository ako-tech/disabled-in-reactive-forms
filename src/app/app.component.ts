import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  deliveryForm = new FormGroup({
    deliveryOption: new FormControl('shipping'),
    address: new FormControl(''),
  });

  get deliveryOption() {
    return this.deliveryForm.controls['deliveryOption'];
  }
}
