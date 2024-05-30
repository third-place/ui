import { endpoints } from '../utils/Config';

export default function signIn(email, password) {
  return fetch(
    `${endpoints.user}/session`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );
}
