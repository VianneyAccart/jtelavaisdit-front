import { Component, input } from '@angular/core';

@Component({
  selector: 'homepage-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  readonly title = input.required<string>();
  readonly text = input.required<string>();
}
