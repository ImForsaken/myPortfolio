import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNameContainerComponent } from './header-name-container.component';

describe('HeaderNameContainerComponent', () => {
  let component: HeaderNameContainerComponent;
  let fixture: ComponentFixture<HeaderNameContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNameContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderNameContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
