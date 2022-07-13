import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { PostsService } from './posts.service';

describe('PostsService', () => {
  let httpClientSpy:jasmine.SpyObj<HttpClient>
  let service: PostsService;
  let mockResponse = [
    {
      title: '	hhhhhhhhhhhh',
      description: '',
      id: '-N6DStTjBaK8WKQxY24W',
    },
    {
      title: 'New post 5',
      description: '',
      id: '-N6HP5Ey1GHiuyUe4eeZ',
    },
 
  ];
  let mockHttpClient: HttpClient;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient',['get'])
    service = new PostsService(httpClientSpy);
  
  });

 
describe('getPosts()',()=>{
  it('should be response', () => {
   
   httpClientSpy.get.and.returnValue(of(mockResponse));
   service.getPosts().subscribe({
     next:(posts)=>{
       expect(posts).toEqual(posts)
     },
     error:(err)=>{
       'this is error'
     }
   });
   expect(httpClientSpy.get).toHaveBeenCalledTimes(1)
  });
})

});
