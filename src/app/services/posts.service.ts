import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Post } from '../model/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  getPosts():Observable<Post[]>{
    return this.http.get<Post[]>(`https://gorest.co.in/public/v2/users/?access-token=5eddb3f281a147450dff703cb60fd7745a1ec55b827b50e3fe4429dba8fbbe39`).pipe(map((data)=>{
      const posts:Post[]=[];
      for(let key in data){
        posts.push({...data[key]})
      }
      return posts;
    }))
  }
  addPost(post: Post[]|any) {
    return this.http.post<any>(
      'https://gorest.co.in/public/v2/users?access-token=5eddb3f281a147450dff703cb60fd7745a1ec55b827b50e3fe4429dba8fbbe39',
      post
    );
  }

  updatePost(post: Post|any,id:number) {
    // const postData = {
    //   [post.id]: {id:post.id, name: post.name, email: post.email },
    // };
    return this.http.put(
      "https://gorest.co.in/public/v2/users/"+"/"+id,
      post
    );
  }
  deletePost(id: number) {
    return this.http.delete<any>(
      "https://gorest.co.in/public/v2/users"+"/"+id
    );
  }
}
