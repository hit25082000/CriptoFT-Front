import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterModule } from "./componentes/footer/footer.module";
import { HeaderModule } from "./componentes/header/header.module";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, FooterModule, HeaderModule]
})
export class AppComponent {
  title = 'CriptoFTs';
}
