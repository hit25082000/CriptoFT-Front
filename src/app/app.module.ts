import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes'; 

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { VideoComponent } from './pages/video/video.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HeaderModule } from './componentes/header/header.module';
import { FooterModule } from './componentes/footer/footer.module';
import { CryptoService } from './pages/home/crypto.service';
@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    VideoComponent
    // UserComponent,
    // LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule, 
    HttpClientModule
  ],
  providers: [CryptoService],
})
export class AppModule {
  ngDoBootstrap() {} 
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
