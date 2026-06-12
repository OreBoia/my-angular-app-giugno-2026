import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from './features/base-component/base-component';
import { TitleComponent } from './features/component-exercise/title-component/title-component';
import { ParagraphComponent } from './features/component-exercise/paragraph-component/paragraph-component';
import { ImageComponent } from './features/component-exercise/image-component/image-component';
import { BindingComponent } from "./features/binding-component/binding-component";
import { DirectivesComponent } from "./features/directives-component/directives-component";
import { RegistrationComponent } from "./features/registration-component/registration-component";
import { LoginComponent } from "./features/login-component/login-component";
import { ParentComponent } from "./features/InputOutputExample/parent-component/parent-component";
import { SignalExampleComponent } from "./features/signal-example-component/signal-example-component";
import { ItemListComponent } from "./features/item-list-component/item-list-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    BaseComponent,
    TitleComponent,
    ParagraphComponent,
    ImageComponent,
    BindingComponent,
    DirectivesComponent,
    RegistrationComponent, LoginComponent, ParentComponent, SignalExampleComponent, ItemListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('my-angular-app');
}
