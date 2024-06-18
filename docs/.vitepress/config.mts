import { defineConfigWithTheme } from 'vitepress'

const projectUrl = 'https://github.com/SuiteOpenTeam'; 
const serviceMail = 'service@suiteboot.cn';
const base = '/website/'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  title: "SUITEBOOT ",
  // titleTemplate: 'SUITEBOOT',
  description: "低代码 零代码 开发平台",
  appearance: 'force-dark',
  base: base,
  head: [['link', { rel: 'icon', href: base+'logo.svg' }]],
  themeConfig: {
    logo: '/logo.svg',
    logoLink: '/',
    // https://vitepress.dev/reference/default-theme-config
    nav: [ // note: 增加 desc 
      { text: '产品',
       items: [
          { text: 'SuiteBoot 开源版', link: projectUrl, desc: '支持单机和集群模式，一键部署', noIcon: true },
          // { text: 'SuiteCloud', link: projectUrl, desc: '全托管云服务 7x24 官方支持' },
        ] 
      },
      { text: '解决方案',
        items: [
          { text: '仓库管理系统WMS', link: 'http://144.24.22.126/wms', desc: '出入库，进销存', noIcon: true },
          // { text: 'CRM系统', link: '/', desc: '销售线索，订单追踪，人员管理' },
          // { text: '报表系统', link: '/', desc: '自定义视图，更灵活的报表' },
        ] 
      },
      {
        text: '入门指南',
        items: [
          //{ text: '快速上手', link: 'https://suiteopenteam.github.io/docs/', noIcon: true },
          { text: '官方文档', link: 'https://suiteopenteam.github.io/docs/', noIcon: true },
          { text: '源码下载', link:  projectUrl, noIcon: true },
        ]
      },
      { text: '关于我们', link: projectUrl, noIcon: true }
    ],
    socialLinks: [ // note: text 优先
      { text: '联系我们', link: 'mailto:'+serviceMail }
    ],
    footer: {
      copyright: '©2024 云管易(北京)科技有限公司 ', // <a class="icp" href="https://beian.miit.gov.cn/" target="_blank" data-v-6370503a="">京ICP备xxxx号</a>
    },
    // 页面配置 首页
    index: {
      title: '低&零代码开发平台',
      slogn: '开启数字想象力, 共创未来',
      desc: '帮助开发人员解决70%的重复工作，让开发更多关注业务，既能快速提高效率，节省研发成本，同时又不失灵活性！',
      btnText: '快速体验',
      btnLink: 'http://144.24.22.126/wms',
      features: {
        title: 'SuiteBoot特点',
        desc: '更灵活, 更快, 更全面',
        btnText: '更多',
        items: [  // 4个
            { title: '灵活性', desc: '自定义对象, 表单, 视图, 按钮, 转换关系, 支持20+字段类型, 自由控制全流程数据', icon:base+'assets/rocket.svg' },
            { title: '性能', desc: '用 Java 编写，可持续、更安全、高性能，存储成本超低。', icon: base+'assets/hot.svg' },
            { title: '全面性', desc: '完善的权限管理，操作与数据权限自由配置', icon: base+'assets/subtree.svg' },
            { title: '可扩展', desc: '利用解耦的架构，轻松独立地扩展前后端每个模块。', icon: base+'assets/cpu.svg' },
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
      },
      concat: {
        title: '加入我们的社区',
        desc: '获取最新更新，并于官方开发者和其他用户讨论。', 
        github: { title: '加入我们的开发者社区', desc: 'SuiteBoot 已开源。欢迎关注我们的GitHub！', link: projectUrl },
        join: { title: '联系我们', desc: '发送邮件到'+serviceMail+'，及时获取最新反馈。', link: 'mailto:'+serviceMail },
      }
    },
    
  }
})
