import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostsListComponent } from './posts-list.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { deletePost } from '../state/posts.actions';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;
  let store: Store;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(provideMockStore)],
      declarations: [PostsListComponent],
      providers: [provideMockStore()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display posts and count correctly', () => {
    const mockPosts = [
      { id: '1', title: 'Post 1' },
      { id: '2', title: 'Post 2' },
    ];
    const mockCount = 2;

    spyOn(store, 'select').and.returnValues(of(mockPosts), of(mockCount));

    component.ngOnInit();

    component.posts.subscribe((posts: any) => {
      expect(posts).toEqual(mockPosts);
    });

    component.count.subscribe((count) => {
      expect(count).toEqual(mockCount);
    });
  });

  it('should dispatch deletePost action when onDeletePost is called with confirmation', () => {
    const postId = '1';

    spyOn(window, 'confirm').and.returnValue(true);
    spyOn(store, 'dispatch');

    component.onDeletePost(postId);

    expect(store.dispatch).toHaveBeenCalledWith(deletePost({ id: postId }));
  });

  fit('should not dispatch deletePost action when onDeletePost is called without confirmation', () => {
    const postId = '1';

    spyOn(window, 'confirm').and.returnValue(false);
    spyOn(store, 'dispatch');

    component.onDeletePost(postId);

    expect(store.dispatch).not.toHaveBeenCalled();
  });
});
