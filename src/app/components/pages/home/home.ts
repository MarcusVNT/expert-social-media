import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { HowItWorks } from './how-it-works/how-it-works';
import { Testimonials } from './testimonials/testimonials';

@Component({
  selector: 'app-home',
  imports: [Hero, HowItWorks, Testimonials],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {}
