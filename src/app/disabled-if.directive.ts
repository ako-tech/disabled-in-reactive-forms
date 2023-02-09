import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: `
    [formControl][akoDisabledIf],
    [formControlName][akoDisabledIf]
  `,
  standalone: true,
})
export class DisabledIfDirective {
  @Input('akoDisabledIf') set disabledIf(condition: boolean) {
    const control = this.ngControl.control;

    condition ? control?.disable() : control?.enable();
  }

  constructor(private ngControl: NgControl) {}
}
