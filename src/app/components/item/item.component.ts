import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../../models/movie';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: IMovie | null = null;

  constructor() {}

  ngOnInit(): void {}
}
