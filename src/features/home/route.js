import {
  DefaultPage,
} from './index';

export default {
  path: '',
  name: 'home',
  childRoutes: [
    { path: 'default-page', component: DefaultPage, isIndex: true },
  ],
};
