import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesAllComponent } from './pipes-all.component';

describe('PipesAllComponent', () => {
  let component: PipesAllComponent;
  let fixture: ComponentFixture<PipesAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
