module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'electron-renderer';
    }
    // load env variables from .env file
    return config;
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    JWT_SECRET: process.env.JWT_SECRET,
  },
};
