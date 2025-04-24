import { Component } from '@angular/core';
import {Divider} from 'primeng/divider';

@Component({
  selector: 'app-footer',
  imports: [
    Divider
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email:string='automovil-unite@gmail.com';
}
