import type { AppRouteModule } from '/@/router/types';

const TestTable = () => import('/@/views/sys/testTable/index.vue');
import { LAYOUT } from '/@/router/constant';

const testTable: AppRouteModule = {
  path: '/test',
  name: 'test',
  component: LAYOUT,
  redirect: '/test/table',
  meta: {
    orderNo: 5000,
    icon: 'tabler:chart-dots',
    title: '测试表格',
  },
  children: [
    {
      path: '/test/table',
      name: 'biaoge',
      component: TestTable,
      meta: {
        title: '表格',
        icon: 'tabler:chart-dots',
      },
    },
  ],
};
export default testTable;
