import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomCounterInputComponent } from './custom-counter-input.component';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe('CustomCounterInputComponent', () => {
  let component: CustomCounterInputComponent;
  let fixture: ComponentFixture<CustomCounterInputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(provideMockStore)],
      declarations: [ CustomCounterInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCounterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
