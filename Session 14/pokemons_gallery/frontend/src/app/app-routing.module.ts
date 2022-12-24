import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserComponent } from './user/user.component';
import { LoginAndRegisterGuard } from './guards/login-and-register.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'gallery/:id',
    component: GalleryComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginAndRegisterGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginAndRegisterGuard],
  },
  {
    path: 'user/:id',
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
