import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-mensage',
  templateUrl: './mensage.component.html',
  styleUrls: ['./mensage.component.scss'],
})
export class MensageComponent implements OnInit {
  @Input()
  mensage = '';

  constructor() {}

  ngOnInit(): void {}
}
