import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { NewsComponent } from './main/news/news.component';
import { LoginComponent } from './main/user/login/login.component';
import { UserComponent } from './main/user/user.component';
import { SigninComponent } from './main/user/signin/signin.component';
import { ClassroomComponent } from './main/classroom/classroom.component';

export const routes: Routes = [
  {path: '',
   component: HomeComponent},
  {path: 'home',
   component: HomeComponent},
  {path: 'news',
  component: NewsComponent},
  {path: 'classroom',
  component: ClassroomComponent},
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signin',
        component: SigninComponent,
      },
    ],
  },
  {path: '**', component: PageNotFoundComponent}
];
