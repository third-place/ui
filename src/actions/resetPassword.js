import { endpoints } from '../utils/Config';

export default function (email, password, code) {
  return fetch(`${endpoints.user}/forgot-password`, {
    method: 'PUT',
    body: JSON.stringify({
      user: {
        email,
        password,
      },
      code,
    }),
  })
}
