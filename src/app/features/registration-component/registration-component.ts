import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-component',
  imports: [FormsModule],
  templateUrl: './registration-component.html',
  styleUrl: './registration-component.css',
})
export class RegistrationComponent
{
  utente = {nome: '', email:''}
  submitted: boolean = false

  onSubmit(): void{
    this.submitted = true
  }
}
