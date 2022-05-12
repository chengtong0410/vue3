import type { AppRouteModule } from '/@/router/types';

const VTest = () => import('/@/views/sys/vtest/index.vue');

import { LAYOUT } from '/@/router/constant';

const testTable: AppRouteModule = {
  path: '/vdemo',
  name: 'vdemo',
  component: LAYOUT,
  redirect: '/vdemo/table',
  meta: {
    orderNo: 5001,
    icon: 'tabler:chart-dots',
    title: '测试vue3',
  },
  children: [
    {
      path: '/vdemo/table',
      name: 'vtest',
      component: VTest,
      meta: {
        title: '语法练习',
        icon: 'tabler:chart-dots',
      },
    },
  ],
};
export default testTable;
