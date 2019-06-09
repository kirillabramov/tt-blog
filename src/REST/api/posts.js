import { MAIN_URL } from '../config';

export default class Posts {
  getAllPosts() {
    return fetch(`${MAIN_URL}/posts`, {
      method: 'GET',
    });
  }

  getPost(id) {
    return fetch(`${MAIN_URL}/posts/${id}?_embed=comments`, {
      method: 'GET',
    });
  }

  createComment(body) {
    return fetch(`${MAIN_URL}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  }
}
