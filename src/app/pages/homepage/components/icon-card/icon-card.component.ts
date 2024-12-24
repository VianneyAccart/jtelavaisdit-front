import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'homepage-icon-card',
  imports: [NgClass],
  templateUrl: './icon-card.component.html',
  styleUrl: './icon-card.component.css',
})
export class IconCardComponent {
  readonly title = input.required<string>();
  readonly text = input.required<string>();
  readonly icon = input.required<any>();
}
