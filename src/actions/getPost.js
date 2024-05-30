import { endpoints } from '../utils/Config';

export default function getPost(sessionToken, uuid) {
  return fetch(`${endpoints.community}/post/${uuid}`, {
    method: 'GET',
    headers: {
      'x-session-token': sessionToken,
    },
  });
}
