import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from './services/pokemon-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AppComponent,
    CardComponent,
    HttpClientModule,
    FormsModule
  ],
  providers: [PokemonService],
  template: `
    <app-card></app-card>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'my-app-service';
}
