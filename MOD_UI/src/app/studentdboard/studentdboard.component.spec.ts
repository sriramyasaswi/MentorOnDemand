import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdboardComponent } from './studentdboard.component';

describe('StudentdboardComponent', () => {
  let component: StudentdboardComponent;
  let fixture: ComponentFixture<StudentdboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentdboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentdboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
