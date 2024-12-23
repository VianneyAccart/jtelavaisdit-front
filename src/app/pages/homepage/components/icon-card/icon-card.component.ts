import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'homepage-icon-card',
  imports: [FontAwesomeModule],
  templateUrl: './icon-card.component.html',
  styleUrl: './icon-card.component.css',
})
export class IconCardComponent {
  readonly title = input.required<string>();
  readonly text = input.required<string>();
  readonly icon = input.required<any>();
}
