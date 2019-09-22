import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    data: {auth: 'auth'}
  },
  {
    path: 'auth',
    component: AuthComponent,
    data: {auth: 'auth'}
  },
  {
    path:'contact',
    component:ContactComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ], exports: [RouterModule]
})


export class AppRoutingModule {
}


