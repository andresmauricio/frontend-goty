import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphycComponent } from './graphyc.component';

describe('GraphycComponent', () => {
  let component: GraphycComponent;
  let fixture: ComponentFixture<GraphycComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphycComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
