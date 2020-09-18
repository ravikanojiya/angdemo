import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseFevoraitComponent } from './exercise-fevorait.component';

describe('ExerciseFevoraitComponent', () => {
  let component: ExerciseFevoraitComponent;
  let fixture: ComponentFixture<ExerciseFevoraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseFevoraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseFevoraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
