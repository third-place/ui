import { endpoints } from '../utils/Config';

export default function getNotifications(sessionToken) {
  return fetch(`${endpoints.notification}/notification`, {
    method: 'GET',
    headers: {
      'x-session-token': sessionToken,
    }
  });
}
