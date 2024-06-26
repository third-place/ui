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
    // user: 'https://user-service.thirdplaceappdev.com',
    // community: 'https://community-service.thirdplaceappdev.com',
    // image: 'https://image-service.thirdplaceappdev.com',
    // notification: 'https://notification-service.thirdplaceappdev.com',
    community: 'http://localhost:8091',
    image: 'http://localhost:8092',
    notification: 'http://localhost:8093',
    user: 'http://localhost:8094',
  },
};

const env = __DEV__ ? 'development' : 'production';

const endpoints = allEndpoints[env];

export {
  endpoints,
};
