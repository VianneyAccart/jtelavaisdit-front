import { Component, output } from '@angular/core';
import { NavlinkComponent } from '../navlink/navlink.component';
import { ROUTES_PATH } from '../../../app.routes';

@Component({
  selector: 'app-navlinks',
  imports: [NavlinkComponent],
  templateUrl: './navlinks.component.html',
  styleUrl: './navlinks.component.css'
})
export class NavlinksComponent {
  protected PATH = ROUTES_PATH;

  onLinkClick = output<string>()

  onClick(event: string) {
    this.onLinkClick.emit(event);
  }
}
