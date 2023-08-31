import { Component, OnInit } from '@angular/core';

import { PoPageAction } from '@po-ui/ng-components';
import { APP_CONFIG } from '../app.config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  readonly pageActions: Array<PoPageAction> = [];

  readonly appRoot = APP_CONFIG.APP_ROOT;

  readonly srcImage = `${this.appRoot}/assets/img/po_color_bg.svg`;

  constructor() {}

  ngOnInit() {}
}
