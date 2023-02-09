import { Directive, Input } from '@angular/core';
import { ControlContainer, NgControl } from '@angular/forms';

@Directive({
  selector: `
    [formControl][akoDisabledIf],
    [formControlName][akoDisabledIf]
  `,
  standalone: true,
})
export class ControlDisabledIfDirective {
  @Input('akoDisabledIf') set disabledIf(condition: boolean) {
    const control = this.ngControl.control;

    condition ? control?.disable() : control?.enable();
  }

  constructor(private ngControl: NgControl) {}
}

@Directive({
  selector: `
    [formGroup][akoDisabledIf],
    [formGroupName][akoDisabledIf],
    [formArrayName][akoDisabledIf]
  `,
  standalone: true,
})
export class ContainerDisabledIfDirective {
  @Input('akoDisabledIf') set disabledIf(condition: boolean) {
    const container = this.controlContainer.control;

    condition ? container?.disable() : container?.enable();
  }

  constructor(private controlContainer: ControlContainer) {}
}
