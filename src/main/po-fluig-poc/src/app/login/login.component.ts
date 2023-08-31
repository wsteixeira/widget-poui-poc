import { Component, OnInit } from '@angular/core';

import { PoPageAction } from '@po-ui/ng-components';
import { ProtheusService } from '../shared/protheus.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  readonly pageActions: Array<PoPageAction> = [
    { label: 'Login', action: this.onLogin.bind(this), icon: 'po-icon-user' },
  ];

  loginResponse: string = '';

  constructor(private service: ProtheusService) {}

  ngOnInit() {
    sessionStorage.removeItem('PO_USER_LOGIN');
  }

  onLogin() {
    const param: any = {
      grant_type: 'password',
      password: 'cespub@123',
      username: 'conselhos_api',
    };
    this.service.login(param).subscribe({
      next: this.handleResponse.bind(this),
      error: this.handleError.bind(this),
    });
  }

  private handleResponse(response: any) {
    console.log(response);
    this.loginResponse =
      `access_token: ${response.access_token}\n\n` +
      `expires_in: ${response.expires_in}\n\n` +
      `refresh_token: ${response.refresh_token}\n\n` +
      `scope: ${response.scope}\n\n` +
      `token_type: ${response.token_type}`;
    sessionStorage.setItem('PO_USER_LOGIN', JSON.stringify(response.data));
    //this.router.navigate(['/']);
  }

  private handleError(error: any) {
    console.log('Login error: ', error);
  }
}
