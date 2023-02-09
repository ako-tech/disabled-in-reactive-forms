import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  deliveryForm = new FormGroup({
    deliveryOption: new FormControl('shipping'),
    address: new FormControl(''),
  });

  get deliveryOption() {
    return this.deliveryForm.controls.deliveryOption;
  }
  get address() {
    return this.deliveryForm.controls.address;
  }

  subcription?: Subscription;

  ngOnInit(): void {
    this.subcription = this.deliveryOption.valueChanges.subscribe(
      (deliveryOption) =>
        deliveryOption === 'pickup'
          ? this.address.disable()
          : this.address.enable()
    );
  }

  ngOnDestroy(): void {
    this.subcription?.unsubscribe();
  }
}
