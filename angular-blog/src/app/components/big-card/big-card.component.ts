import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css',
})
export class BigCardComponent {
  @Input() photoCover: string = '';
  
  @Input() cardTitle: string = '';

  @Input() cardDescription: string = '';
  @Input() id: string = '0';
}
