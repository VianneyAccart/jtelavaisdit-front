import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navlink',
  imports: [RouterLink, NgClass, RouterLinkActive],
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
    } else if (this.path() !== undefined) {
      this.onLinkClick.emit(this.path()!);
    }
  }

  getIconClasses() {
    return {
      [this.icon()]: true,
      'text-red-600': this.isLogOut()
    };
  }
}
