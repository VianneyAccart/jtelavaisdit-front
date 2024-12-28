import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ROUTES_PATH } from '../../../app.routes';
import packageJson from '../../../../../package.json';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  protected PATH = ROUTES_PATH;
  protected version = packageJson.version;
}
