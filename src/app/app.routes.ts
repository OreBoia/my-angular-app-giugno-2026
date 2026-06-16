import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home-component/home-component';
import { AboutComponent } from './features/pages/about-component/about-component';
import { SignalExampleComponent } from './features/signal-example-component/signal-example-component';
import { ParentComponent } from './features/InputOutputExample/parent-component/parent-component';
import { ErrorPageComponent } from './features/pages/error-page-component/error-page-component';
import { UserProfileComponent } from './features/pages/user-profile-component/user-profile-component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},

  {path: 'signal-ex', component: SignalExampleComponent},
  {path: 'parent', component: ParentComponent},

  {path: 'user/:id', component: UserProfileComponent},

  {path: '**', component: ErrorPageComponent }
];
