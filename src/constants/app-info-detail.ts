import { env } from './app-info';
const config = [
  {
    serverIP: ''
  },
  {
    serverIP: 'https://testing.cn'
  },
  {
    serverIP: 'https://staging.cn'
  },
  {
    serverIP: 'https://production.cn'
  }
];
export const SERVERINFO = {
  serverIP: config[env].serverIP
};
