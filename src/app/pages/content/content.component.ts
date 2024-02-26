import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFeke';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoDescription: string = '';
  titleDescription: string = '';
  Description: string =
    'Naruto após salvar o mundo na saga, se torna hokage, e constrói uma grande família na qual os filhos podem ser os mais fortes de uma nova geração!';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));

    this.setValuesToComponent(this.id);
  }
  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id == id)[0];

    this.titleDescription = result.title;
    this.Description = result.description;
    this.photoDescription = result.photo;
  }
}
