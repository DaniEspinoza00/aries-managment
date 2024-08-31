import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { HomeCardComponent } from './home-card/home-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage,HomeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{

}
