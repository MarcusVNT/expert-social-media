import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { HowItWorks } from './how-it-works/how-it-works';

@Component({
  selector: 'app-home',
  imports: [Hero, HowItWorks],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {}
