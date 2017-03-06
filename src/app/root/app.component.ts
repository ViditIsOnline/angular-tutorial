import { Component } from '@angular/core';

import { ROUTES } from '../common/constants/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes = ROUTES;
}
