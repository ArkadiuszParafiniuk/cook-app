import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesBrowserComponent } from './recipes-browser.component';

describe('RecipesBrowserComponent', () => {
  let component: RecipesBrowserComponent;
  let fixture: ComponentFixture<RecipesBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipesBrowserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
