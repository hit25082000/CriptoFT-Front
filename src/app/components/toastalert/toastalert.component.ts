import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastalert',
  standalone: true,
  imports: [],
  templateUrl: './toastalert.component.html',
  styleUrl: './toastalert.component.scss'
})
export class ToastalertComponent {
  constructor(private toast: ToastrService){

  }
}
