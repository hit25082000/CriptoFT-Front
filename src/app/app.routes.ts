import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NoticesComponent } from './pages/notices/notices.component';
import { VideoComponent } from './pages/video/video.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'notices', component: NoticesComponent },
  { path: 'video', component: VideoComponent },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
