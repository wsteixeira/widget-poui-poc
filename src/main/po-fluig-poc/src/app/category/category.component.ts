import { Component, OnInit } from '@angular/core';

import { PoPageAction } from '@po-ui/ng-components';
import { ProtheusService } from '../shared/protheus.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  readonly pageActions: Array<PoPageAction> = [];

  items = [];

  constructor(private service: ProtheusService) {}

  ngOnInit() {
    this.service.getResources().subscribe((response) => {
      console.log(response);
      this.items = response.items;
    });
  }
}
