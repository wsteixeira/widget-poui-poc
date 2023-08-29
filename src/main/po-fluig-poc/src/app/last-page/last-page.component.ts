import { Component, OnInit } from '@angular/core';

import { PoPageAction } from '@po-ui/ng-components';

import { APP_CONFIG } from '../app.config';

@Component({
  selector: 'app-last-page',
  templateUrl: './last-page.component.html',
  styleUrls: ['./last-page.component.css'],
})
export class LastPageComponent implements OnInit {
  readonly pageActions: Array<PoPageAction> = [];

  readonly appRoot = APP_CONFIG.APP_ROOT;

  readonly srcImage = `${this.appRoot}/assets/img/po_inverse.svg`;

  constructor() {}

  ngOnInit() {}
}
