import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-directives-component',
  imports: [FormsModule, NgClass, NgStyle],
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
