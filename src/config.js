const env = 'dev';

const envConfig = {
  dev: {
    API_URL: '',
    CHAT_URL: '',
    SOCKET_URL: '',
    APP_URL: '',
  },
};

if (!envConfig[env]) {
  throw new Error('[CONFIG] Invalid environment');
}

const config = {
  ENV: env,
  APP_ID: 'fr.sidapp.rnclient',
  ONESIGNAL_APP_ID: '7bc31635-6cb2-4dae-9dcc-2211002fc485',
  SUPPORT_EMAIL: 'support@pharnumx.com',
  ...envConfig[env],
};

export default config;
