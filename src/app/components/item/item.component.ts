import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../../models/movie';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: IMovie | null = null;

  readonly imagesSizes = IMAGES_SIZES;

  constructor() {}

  ngOnInit(): void {}
}
