import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon-service';
import { HttpClientModule } from '@angular/common/http';
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  pokemon: PokemonData = {
    id: 0,
    name: '',
    sprites: {
      front_default: '',
    },
    types: [
      {
        type: {
          name: '',
        },
      },
    ],
  };

  constructor(private service: PokemonService) {}

  ngOnInit(): void {
    this.getPokemon('pikachu');
  }

  getPokemon(searchName: string) {
    this.service.getPokemon(searchName).subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types,
        };
        console.log(this.pokemon);
      },
      error: (res) => console.log('not found'),
    });
  }
}
