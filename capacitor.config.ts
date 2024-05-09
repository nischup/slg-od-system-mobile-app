import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.slg',
  appName: 'slgApp',
  webDir: 'www',
  bundledWebRuntime: false,


  server: {
    androidScheme: 'https'
  },

  plugins: {
    "LocalNotifications": {
      "iconColor": "#488AFF",
    },
  },

};

export default config;
