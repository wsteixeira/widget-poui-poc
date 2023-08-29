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

  readonly avatar = `${this.appRoot}/assets/img/po_inverse.png`;

  contact = {
    name: 'Mr. Dev PO',
    email: 'dev.po@po-ui.com',
    phone: '47912012015',
  };

  constructor() {}

  ngOnInit() {}

  callContact(phone: any) {
    window.open(`tel:${phone}`, '_self');
  }

  sendContact(email: any) {
    window.open(`mailto:${email}`, '_self');
  }

  formatPhoneNumber(phone: any) {
    return `(${phone.substring(0, 2)}) ${phone.substring(
      2,
      7
    )}-${phone.substring(7)}`;
  }
}
