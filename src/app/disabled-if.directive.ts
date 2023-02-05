import { Directive, Input, Self } from '@angular/core';
import { ControlContainer, NgControl } from '@angular/forms';

@Directive({
  selector: `
    [formControl][akoDisabledIf],
    [formControlName][akoDisabledIf]
  `,
  standalone: true,
})
export class DisabledControlIfDirective {
  @Input('akoDisabledIf') set disabledIf(condition: boolean) {
    const control = this.ngControl.control;

    condition ? control?.disable() : control?.enable();
  }

  constructor(@Self() private ngControl: NgControl) {}
}

@Directive({
  selector: `
    [formGroup][akoDisabledIf],
    [formGroupName][akoDisabledIf]
    [formArray][akoDisabledIf],
  `,
  standalone: true,
})
export class DisabledContainerIfDirective {
  @Input('akoDisabledIf') set disabledIf(condition: boolean) {
    const container = this.controlContainer.control;

    condition ? container?.disable() : container?.enable();
  }

  constructor(@Self() private controlContainer: ControlContainer) {}
}
