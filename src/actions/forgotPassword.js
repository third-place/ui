import { endpoints } from '../utils/Config';

export default function forgotPassword(email) {
  return fetch(`${endpoints.user}/forgot-password`, {
    method: 'POST',
    body: JSON.stringify({
      email,
    }),
  });
}
