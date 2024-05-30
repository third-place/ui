import { endpoints } from '../utils/Config';

export default function getPosts(sessionToken) {
  return fetch(`${endpoints.community}/post`, {
    method: 'GET',
    headers: {
      'x-session-token': sessionToken,
    },
  });
}
