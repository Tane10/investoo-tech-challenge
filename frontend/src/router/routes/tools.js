const ToolsContainer = () => import(/* webpackChunkName: "routes-tools" */ '@/views/tools/index')
const TablePreview = () => import(/* webpackChunkName: "routes-tools" */ '@/views/tools/table-preview')

export default [
  {
    path: '/tools',
    component: ToolsContainer,
    redirect: { name: 'tools.table-preview' },
    meta: {
      title: 'Tools',
    },
    children: [
      {
        name: 'tools.table-preview',
        path: 'table-preview',
        component: TablePreview,
        meta: {
          title: 'Table Preview',
          info: 'This page will allow you to preview the ordering of offers based on the filters below',
        },
      },
    ],
  },
]
