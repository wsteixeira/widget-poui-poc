import { Component, OnInit } from '@angular/core';

import { PoMenuItem, PoToolbarAction } from '@po-ui/ng-components';
import { ProtheusService } from './share/protheus.service';
import { APP_CONFIG } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  readonly actions: Array<PoToolbarAction> = [
    {
      icon: 'po-icon po-icon-users',
      label: 'Categoria',
      url: '/category',
    },
    {
      icon: 'po-icon po-icon-home',
      label: 'Home',
      url: '/home',
    },
    {
      icon: 'po-icon po-icon-user',
      label: 'Login',
      url: '/login',
    },
  ];

  readonly appRoot = APP_CONFIG.APP_ROOT;

  readonly profileActions: Array<PoToolbarAction> = [
    {
      icon: 'po-icon po-icon-user',
      label: 'Login',
      url: '/login',
    },
  ];

  readonly logoTotvs = `${this.appRoot}/assets/img/totvs-logo.png`;

  readonly menus: Array<PoMenuItem> = [
    {
      icon: 'po-icon po-icon-home',
      label: 'Home',
      link: '/home',
      shortLabel: 'Home',
    },
    {
      icon: 'po-icon po-icon-users',
      label: 'Categoria',
      link: '/category',
      shortLabel: 'Categoria',
    },
    {
      icon: 'po-icon po-icon-user',
      label: 'Login',
      link: '/login',
      shortLabel: 'Login',
    },
  ];

  constructor(private service: ProtheusService) {}

  ngOnInit(): void {}
}
