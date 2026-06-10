import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[customHighlight]',
})
export class HiglightDirective implements OnInit
{
  @Input() customHighlight: boolean = false
  constructor(private el: ElementRef)
  {

  }

  ngOnInit(): void
  {
    if(this.customHighlight) this.el.nativeElement.style.backgroundColor = 'yellow'
  }


}
