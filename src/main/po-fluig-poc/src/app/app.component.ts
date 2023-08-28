import { Component } from '@angular/core';

import { PoToolbarAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  readonly actions: Array<PoToolbarAction> = [
    {
      icon: 'po-icon po-icon-home',
      label: 'Home',
      //  url: '/home',
      action: this.onClick.bind(this),
    },
  ];

  //readonly menus: Array<PoMenuItem> = [
  //  { label: 'Home', action: this.onClick.bind(this) }
  //];

  private onClick() {
    alert('Clicked in menu item');
  }
}
