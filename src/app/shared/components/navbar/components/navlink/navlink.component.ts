import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-navlink',
  imports: [FontAwesomeModule, RouterLink, NgClass],
  templateUrl: './navlink.component.html',
  styleUrl: './navlink.component.css'
})
export class NavlinkComponent {
  readonly path = input<string>();
  readonly icon = input.required<any>();
  readonly label = input.required<string>();
  readonly isLogOut = input(false);

  onLinkClick = output<string>()

  onClick() {
    if (this.isLogOut() === true) {
      this.onLinkClick.emit('logout');
    } else {
      this.onLinkClick.emit('regular');
    }
  }
}