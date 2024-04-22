const allEndpoints = {
  production: {
    web: 'https://thirdplaceapp.com',
    user: 'https://user-service.thirdplaceapp.com',
    community: 'https://community-service.thirdplaceapp.com',
    image: 'https://image-service.thirdplaceapp.com',
    notification: 'https://notification-service.thirdplaceapp.com',
  },
  development: {
    web: 'https://thirdplaceappdev.com',
    user: 'https://user-service.thirdplaceappdev.com',
    // community: 'https://community-service.thirdplaceappdev.com',
    community: 'http://localhost:8080',
    image: 'https://image-service.thirdplaceappdev.com',
    notification: 'https://notification-service.thirdplaceappdev.com',
  },
};

const env = __DEV__ ? 'development' : 'production';

const endpoints = allEndpoints[env];

export {
  endpoints,
};
