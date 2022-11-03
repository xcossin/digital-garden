
import { defaultTheme } from '@vuepress/theme-default'

export default {
  theme: defaultTheme({
    home: '/',
    //自定义主页地址，用于顶部菜单配置的logo的点击效果和404页面的返回主页效果。
    logo: '/index/logo.png', 
    // 顶部菜单显示logo图片，支持文件名称或者url
    logoDark: '/index/logo-flower-dark.png', 
    // 可为深色模式设置单独的logo地址
    colorModeSwitch: true, 
    // 显示模式设置 false-关闭 true-开启
    colorMode:'light', 
    // 自定义显示模式 当colorModeSwitch设置为false时生效可设置为”light"或“dark”
    lastUpdated: true,
    lastUpdatedText: '最近更新时间',
    // 最近更新时间戳 标签的文字
    contributorsText: '修改者',
    // 是否启用 贡献者列表 
    editLink: false,
    nextLinks: true, 
    // 显示下一篇链接, 默认为 true
    prevLinks: true,
    // 显示上一篇链接, 默认为 true
    repo: 'https://github.com/xcossin/digital-garden',
    // 版本仓库地址，就是大家经常在开源软件介绍站点看见的那个Github按钮，如果你设置的是类似“extrame/baijiafan”这种/风格的两段字符串，会被默认按github渲染
    // repoLabel: '',
    // 上一项配置中显示的Source字样可以通过这个配置项修改，例如配置为“源代码仓库”
    tip: '小提示',
    // Tip 自定义容器 的默认标题。
    warning: '警告',
    // Warning 自定义容器 的默认标题
    notFound:['Not Found','没有找到','搞错了吧'],


    // 在这里进行配置
    navbar: [
         // NavbarItem
        {
          text: '首页',
          link: '/',
        },
        // NavbarGroup
        {
            text: '菜单',
            children: [
                '/page/echarts/README.md', 
                '/page/element-ui/README.md'
            ],
        },
        // 字符串 - 页面文件路径 - 测试
        // '/page/starting/README.md',
    ],
    sidebar: [
        {
            text: 'echarts',
            link: '/page/echarts/README.md',
            collapsible: false, // 是否折叠侧边菜单，默认值是 true
            children: [
                {
                    text: '柱状图',
                    link: '/page/echarts/bar.md',
                },
                {
                    text: '饼图',
                    link: '/page/echarts/pie.md',
                }
            ],
        },
        {
            text: 'element-ui',
            link: '/page/element-ui/README.md',
            children: [
                {
                    text: '按钮',
                    link: '/page/element-ui/button.md',
                },
                {
                    text: '输入框',
                    link: '/page/element-ui/input.md',
                }
            ],
        },
    ]
  }),
}