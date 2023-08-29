import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PoPageModule } from '@po-ui/ng-components';

import { LastPageComponent } from './last-page.component';

describe('LastPageComponent', () => {
  let component: LastPageComponent;
  let fixture: ComponentFixture<LastPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PoPageModule
      ],
      declarations: [ LastPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
