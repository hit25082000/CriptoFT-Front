import { Component, OnInit } from '@angular/core';
import {  FormBuilder,  FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { Article } from './Article';
import { TemplateService } from './template.service';
import { Title } from '@angular/platform-browser';
import { Scheme } from './Scheme';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [DropdownModule,ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit{
  formGroup!: FormGroup;
  schemes: Scheme[] = [{Name:"Principal"},{Name:"Segundario"}]
  activeIndex = 0
  articles: Article[] = [
    { Title: 'Australia'},
    { Title: 'Brazil'},
    { Title: 'China'},
    { Title: 'Egypt'},
    { Title: 'France'}
];;
  selectedArticle!: Article;

  constructor(private formBuilder: FormBuilder,
              private templateService: TemplateService){
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group(
      {
        selectedArticle: [],
      },)
    }
}
