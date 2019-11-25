import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentordboardComponent } from './mentordboard.component';

describe('MentordboardComponent', () => {
  let component: MentordboardComponent;
  let fixture: ComponentFixture<MentordboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentordboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentordboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
