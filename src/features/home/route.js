import {
  DefaultPage,
} from './index';

export default {
  path: '/home',
  name: 'home',
  childRoutes: [
    { path: 'default-page', component: DefaultPage, isIndex: true },
  ],
};
