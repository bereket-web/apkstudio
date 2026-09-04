import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.morsemaster.app',
  appName: 'MorseMaster',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
