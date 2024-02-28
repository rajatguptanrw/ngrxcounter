import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SinglePostComponent } from './single-post.component';
import { StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { getPostById } from '../state/posts.selector';

describe('SinglePostComponent', () => {
  let component: SinglePostComponent;
  let fixture: ComponentFixture<SinglePostComponent>;
  let store: any;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [SinglePostComponent],
      providers: [provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePostComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select a post from the store', () => {
    const mockPost: any = { id: 1, title: 'Test Post', body: 'Test Body' };
    const mockPostId = 1;

    // Provide a mock implementation for the getPostById selector
    spyOn(store, 'select').and.returnValue(of(mockPost));

    // Initialize the component
    component.ngOnInit();

    // Check if the store.select method was called with the correct selector
    expect(store.select).toHaveBeenCalledWith(getPostById);

    // Check if the component's post property has been set with the mock post
    component.post.subscribe((post) => {
      expect(post).toEqual(mockPost);
    });
  });
});
