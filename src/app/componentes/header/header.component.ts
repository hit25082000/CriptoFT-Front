import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscribable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
logout() {
throw new Error('Method not implemented.');
}
user$: Observable<unknown> | Subscribable<unknown> | Promise<unknown> | undefined;

}
