import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NoticesComponent } from './pages/notices/notices.component';
import { VideoComponent } from './pages/video/video.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    HomeComponent
    // HeaderComponent,
    // FooterComponent,
    // NoticesComponent,
    // VideoComponent,
    // UserComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
  ],
  providers: [],
})
export class AppModule {
  ngDoBootstrap() {} 
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
