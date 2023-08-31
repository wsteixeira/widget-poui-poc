import { Component, OnInit } from '@angular/core';

import { PoMenuItem, PoToolbarAction } from '@po-ui/ng-components';
import { APP_CONFIG } from './app.config';
import { FluigService } from './shared/fluig.service';
import { Router } from '@angular/router';

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
    {
      icon: 'po-icon po-icon-exit',
      label: 'Logout',
      action: this.onLogout.bind(this),
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
    {
      icon: 'po-icon po-icon-exit',
      label: 'Logout',
      action: this.onLogout.bind(this),
      shortLabel: 'Logout',
    },
  ];

  constructor(private service: FluigService, private router: Router) {}

  ngOnInit(): void {}

  onLogout() {
    this.router.navigate(['/']);
    this.service.logout().subscribe({
      next: () => window.location.reload(),
      error: () => window.location.reload(),
    });
  }
}
