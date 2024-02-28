import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CounterButtonsComponent } from './counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe('CounterButtonsComponent', () => {
  let component: CounterButtonsComponent;
  let fixture: ComponentFixture<CounterButtonsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(provideMockStore)],
      declarations: [ CounterButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
