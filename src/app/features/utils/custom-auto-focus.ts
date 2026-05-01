import { Directive, afterNextRender, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appCustomAutoFocus]',
  standalone: true,
})
export class CustomAutoFocus {
  private elementRef: ElementRef<HTMLElement> = inject(ElementRef);

  constructor() {
    afterNextRender(() => {
      this.elementRef.nativeElement.focus();
    });
  }
}
