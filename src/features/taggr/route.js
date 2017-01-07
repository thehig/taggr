import {
  DefaultPage,
} from './index';

export default {
  path: 'taggr',
  childRoutes: [
    { path: 'default-page', component: DefaultPage, isIndex: true },
  ],
};
