import { readFileSync } from 'fs';

export const routes = {
  root: {
    path: '/',
    template: readFileSync('./index.html')
  },
  message: {
    path: '/message',
    template: readFileSync('./message.html')
  }
};
