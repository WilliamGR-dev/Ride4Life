const env = 'dev';

const envConfig = {
  dev: {
    API_URL: 'http://rider4life.herokuapp.com/api',
    APP_URL: '',
  },
};

if (!envConfig[env]) {
  throw new Error('[CONFIG] Invalid environment');
}

const config = {
  ENV: env,
  APP_ID: 'fr.rider.rnclient',
  SUPPORT_EMAIL: 'support@rider4life.com',
  ...envConfig[env],
};

export default config;
