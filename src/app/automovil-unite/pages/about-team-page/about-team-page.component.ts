import { Component } from '@angular/core';
import { Chip } from 'primeng/chip';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-about-team-page',
  standalone: true,
  imports: [Chip, Button],
  templateUrl: './about-team-page.component.html',
  styleUrl: './about-team-page.component.css'
})
export class AboutTeamPageComponent {}

