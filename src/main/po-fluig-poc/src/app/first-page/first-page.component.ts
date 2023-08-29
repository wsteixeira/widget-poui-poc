import { Component, OnInit } from '@angular/core';

import { PoPageAction } from '@po-ui/ng-components';

import { APP_CONFIG } from '../app.config';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
})
export class FirstPageComponent implements OnInit {
  readonly pageActions: Array<PoPageAction> = [];

  readonly appRoot = APP_CONFIG.APP_ROOT;

  readonly srcImage = `${this.appRoot}/assets/img/po_color_bg.svg`;

  constructor() {}

  ngOnInit() {}
}
