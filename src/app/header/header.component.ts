import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable, Subscribable } from 'rxjs';

@Component({
  standalone: true,
  imports: [RouterLink,CommonModule],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  login = true
}
