import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  public image: string =
    'https://www.geekmi.news/__export/1623509727981/sites/debate/img/2021/06/12/zoro1.jpg_976912859.jpg';

  public Titulo: string = 'Curso de Angular con interpolacion';
  constructor() {}

  ngOnInit(): void {}
}
