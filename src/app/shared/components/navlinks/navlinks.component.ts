import { Component, output } from '@angular/core';
import { NavlinkComponent } from '../navlink/navlink.component';
import { ROUTES_PATH } from '../../../app.routes';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChartLine, faHouse
} from '@fortawesome/free-solid-svg-icons';
import {
  faMessage, faFolder
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-navlinks',
  imports: [NavlinkComponent, FontAwesomeModule],
  templateUrl: './navlinks.component.html',
  styleUrl: './navlinks.component.css'
})
export class NavlinksComponent {
  protected PATH = ROUTES_PATH;
  protected faChartLine = faChartLine
  protected faMessage = faMessage
  protected faFolder = faFolder
  protected faHouse = faHouse

  onLinkClick = output<string>()

  onClick(event: string) {
    this.onLinkClick.emit(event);
  }
}
