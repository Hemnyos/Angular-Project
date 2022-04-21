import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyPageComponent } from './disney-page.component';

describe('DisneyPageComponent', () => {
  let component: DisneyPageComponent;
  let fixture: ComponentFixture<DisneyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisneyPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisneyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
