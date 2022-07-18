import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Post } from '../model/posts.model';

import { PostsService } from './posts.service';

describe('PostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [PostsService]
  }));
   const service = TestBed.get(DataNewService)
  it('should be created', () => {
    const service: PostsService = TestBed.get(DataNewService);
    expect(service).toBeTruthy();
  });
  it('be able to retrieve posts from the API bia GET', () => {
    const dummyPosts: Post[] = [{
       
        id: 1,
        name: 'Http Client',
        email: 'paw@gmail.com'
        }, {
       
        id: 2,
        name: 'Hello World2',
        email: 'asasd@gmail.com'
    }];
    service.getPost().subscribe((posts: string | any[]) => {
        expect(posts.length).toBe(2);
        expect(posts).toEqual(dummyPosts);
    });
});
})

  function DataNewService(DataNewService: any) {
    throw new Error('Function not implemented.');
  }
