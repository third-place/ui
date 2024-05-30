import { endpoints } from '../utils/Config';

export function createPost(sessionToken, userUuid, newPostText, draft, images) {
  return fetch(`${endpoints.community}/post`, {
    method: 'POST',
    headers: {
      'x-session-token': sessionToken,
    },
    body: JSON.stringify({
      user: {uuid: userUuid},
      text: newPostText,
      draft,
      images,
    }),
  });
}
