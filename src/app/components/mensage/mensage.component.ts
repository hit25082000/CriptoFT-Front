import { MensageService } from './mensage.service';
import { Component, inject, Input, input, OnDestroy, TemplateRef } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-mensage',
  templateUrl: './mensage.component.html',
  styleUrls: ['./mensage.component.scss'],
})
export class MensageComponent  {
  @Input() mensage = ""
}
