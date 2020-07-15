import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadearticulosComponent } from './listadearticulos.component';

describe('ListadearticulosComponent', () => {
  let component: ListadearticulosComponent;
  let fixture: ComponentFixture<ListadearticulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadearticulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadearticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
