import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/list',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/QuestionsListPage.vue') }],
  },
  {
    path: '/edit',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/QuestionEditPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
