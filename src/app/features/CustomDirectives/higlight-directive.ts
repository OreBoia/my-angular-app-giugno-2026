import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[customHighlight]',
})
export class HiglightDirective
{
  constructor(el: ElementRef)
  {
    el.nativeElement.style.backgroundColor = 'yellow'
  }
}
