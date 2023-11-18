import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portifolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portifolio.component.html',
  styleUrl: './portifolio.component.css'
})
export class PortifolioComponent implements OnInit{
  constructor(private parametrizador: ActivatedRoute, private navegador: Router){
    this.parametrizador.params.subscribe(
      res => console.log(res)
    )

    this.parametrizador.queryParams.subscribe(
      res => console.log(res)
    )

    this.parametrizador.firstChild?.params.subscribe(
      res => console.log(res)
    )
  }
  ngOnInit(): void {
  }
}
