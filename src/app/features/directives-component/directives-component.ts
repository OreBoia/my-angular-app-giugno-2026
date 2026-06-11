import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HiglightDirective } from "../custom-directives/higlight-directive";

@Component({
  selector: 'app-directives-component',
  imports: [FormsModule,
    NgClass,
    NgStyle,
    HiglightDirective],
  templateUrl: './directives-component.html',
  styleUrl: './directives-component.css',
})
export class DirectivesComponent
{
  isVisible: boolean = true
  userLevel: number = 1

  frameworks: string[] = ['Angular', 'React', 'Vue.js', 'Three.js']
  favFramework: string = 'Angular'

  showList: boolean = true

  incrementLevel(): void
  {
    if(this.userLevel < 4)
      this.userLevel++
    else
      this.userLevel = 1
  }
}
