import { defineConfigWithTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  title: "SUITEBOOT ",
  // titleTemplate: 'SUITEBOOT',
  description: "低代码 零代码 开发平台",
  appearance: 'force-dark',
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  themeConfig: {
    logo: '/logo.svg',
    logoLink: '/',
    // https://vitepress.dev/reference/default-theme-config
    nav: [ // note: 增加 desc 
      { text: '产品',
       items: [
          { text: 'SuiteBoot 开源版', link: '/api-examples', desc: '支持单机和集群模式，一键部署' },
          { text: 'SuiteCloud', link: '/markdown-examples', desc: '全托管云服务 7x24 官方支持' },
        ] 
      },
      { text: '解决方案',
        items: [
          { text: '仓库管理系统WMS', link: '/a', desc: '出入库，进销存' },
          { text: 'CRM系统', link: '/b', desc: '销售线索，订单追踪，人员管理' },
          { text: '报表系统', link: '/b', desc: '自定义视图，更灵活的报表' },
        ] 
      },
      {
        text: '入门指南',
        items: [
          { text: '快速上手', link: 'https://github.com/', noIcon: true },
          { text: '官方文档', link: 'https://github.com/' },
          { text: '源码下载', link:  'https://github.com/' },
        ]
      },
      { text: '关于我们', link: '/cc' }
    ],
    socialLinks: [ // note: text 优先
      { text: '联系我们', link: '/concat' }
    ],
    footer: {
      copyright: '©2024 云管易(北京)技术咨询有限公司 <a class="icp" href="https://beian.miit.gov.cn/" target="_blank" data-v-6370503a="">京ICP备2028042号</a>',
    },
    // 页面配置 首页
    index: {
      title: '低&零代码开发平台',
      slogn: '开启数字想象力, 共创未来',
      desc: '帮助开发人员解决70%的重复工作，让开发更多关注业务，既能快速提高效率，节省研发成本，同时又不失灵活性！',
      features: {
        title: 'SuiteBoot特点',
        desc: '更灵活, 更快, 更全面',
        btnText: '更多',
        items: [  // 4个
            { title: '灵活性', desc: '自定义对象, 表单, 视图, 按钮, 转换关系, 支持20+字段类型, 自由控制全流程数据' },
            { title: '性能', desc: '用 Java 编写，可持续、更安全、高性能，存储成本超低。' },
            { title: '全面性', desc: '完善的权限管理，操作与数据权限自由配置' },
            { title: '可扩展', desc: '利用解耦的架构，轻松独立地扩展前后端每个模块。' },
        ]
      },
      clouds: {
        title: 'SuiteCloud',
        desc: '云原生，分布式部署，基于新一代边缘计算',
        btnText: '即将开放...',
        items: [
            { title: '开箱即用', desc: '秒速启用，无需任何配置。内置查询控制台、仪表盘和数据库接口更快使用。' },
            { title: '广泛集成', desc: '从常用的编程语言到各种工具，更好地配合大部分熟练使用的工具。' },
            { title: '无服务器可扩展', desc: '专注于你的数据，根据数据接收率和查询来分配容量，而不是 CPU 或内存资源。'},
            { title: '开箱即用', desc: '秒速启用，无需任何配置。内置查询控制台、仪表盘和数据库接口更快使用。' }
        ]
      }
    },
    
  }
})
