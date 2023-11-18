import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../../data/dataFake';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  private id: string | null = '0';

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id');
    });

    this.setValuesComponent(this.id)
  }

  @Input() photoCover: string = '';

  @Input() contentTitle: string = '';

  @Input() contentDescription: string = '';

  setValuesComponent(id: string | null) {
    const [result] = dataFake.filter((article) => article.id === Number(id));

    console.log(result)
    if (result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description
      this.photoCover = result.photo
    }
  }
}
