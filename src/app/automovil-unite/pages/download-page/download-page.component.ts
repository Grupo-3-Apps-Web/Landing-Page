import { Component } from '@angular/core';
import { Chip } from 'primeng/chip';

@Component({
  selector: 'app-download-page',
  imports: [
    Chip
  ],
  templateUrl: './download-page.component.html',
  styleUrl: './download-page.component.css'
})
export class DownloadPageComponent {
  abrirEnlace() {
    window.open('https://novacode-frontend.netlify.app/', '_blank');
  }
}
