import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover: string = 'https://images5.alphacoders.com/598/598731.jpg';
  @Input()
  cardTitle: string = 'Naruto e sua familia';
  @Input()
  cardDescription = '';
  @Input()
  id: string = '0';

  constructor() {}

  ngOnInit(): void {}
}
