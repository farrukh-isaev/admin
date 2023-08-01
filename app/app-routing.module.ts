import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { TodoComponent } from './todo/todo.component';
import { BurgerMenuComponent } from './components/burger-menu/burger-menu.component';
import { NewComponent } from './components/new/new.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  // { path: 'todo', component: TodoComponent },
  {
    path: 'burger-menu',
    component: BurgerMenuComponent,
    canActivate: [AuthGuard],
  },
  { path: 'registration', component: RegistrationComponent },
  { path: 'new', component: NewComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
