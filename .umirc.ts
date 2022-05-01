import { defineConfig } from 'umi';
import zhCN from 'antd/lib/locale/zh_CN';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    config: {
      locale: zhCN,
    }
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/table', component: '@/pages/table/index' },
    { path: '/crudTable', component: '@/pages/crudTable/index' },
    { path: '/form', component: '@/pages/form/index' },
  ],
  fastRefresh: {},
});
