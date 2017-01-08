import {
  DefaultPage,
} from './index';

export default {
  path: '',
  name: 'taggr',
  childRoutes: [
    { path: 'default-page', component: DefaultPage, isIndex: true },
  ],
};
