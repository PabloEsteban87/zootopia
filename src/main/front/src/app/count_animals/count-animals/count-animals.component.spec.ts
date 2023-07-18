import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountAnimalsComponent } from './count-animals.component';

describe('CountAnimalsComponent', () => {
  let component: CountAnimalsComponent;
  let fixture: ComponentFixture<CountAnimalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountAnimalsComponent]
    });
    fixture = TestBed.createComponent(CountAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
