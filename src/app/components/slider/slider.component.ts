import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../../models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() items: IMovie[] = [];

  constructor() {}

  ngOnInit(): void {}
}
