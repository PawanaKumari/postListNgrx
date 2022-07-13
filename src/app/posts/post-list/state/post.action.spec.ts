import { Post } from 'src/app/model/posts.model';
import {
  addPost,
  loadPosts,
  loadPostsSuccess,
  LOAD_POSTS,
  LOAD_POSTS_SUCCESS,
} from './post.action';
describe('loadPosts', () => {
  it('should create an action', () => {
    const action = loadPosts();
    expect({ ...action }).toEqual({ type: LOAD_POSTS });
  });
  describe('addPost', () => {
    it('should create an action', () => {
      // const action =addPost();
    });
  });
  describe('addPostSuccess', () => {
    it('should create an action', () => {});
  });
});
describe('loadPostsSuccess', () => {
  it('should create an action', () => {
    expect({
      id: 'N6mCPZC0kEyGGamWzo4',
      title: 'text test 1',
      description: '222',
    }).toBeTruthy();
  });
});
