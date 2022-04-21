import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecettePageComponent } from './recette-page.component';

describe('RecettePageComponent', () => {
  let component: RecettePageComponent;
  let fixture: ComponentFixture<RecettePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecettePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecettePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
