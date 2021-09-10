import 'es6-promise/auto' // 一些第三方包会依赖 Promise 环境

// 全局样式
import 'normalize.css'
import '@/style/app.less'

import '@ionic/vue/css/core.css'
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'
import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'

// 根元素添加 --vh 变量
document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
window.addEventListener('resize', () => document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`))

import { Plugins } from '@capacitor/core'
const { StatusBar } = Plugins
StatusBar.setStyle({ style: 'DARK' })

import { axios } from '@/util'
window.axios = axios

import { createApp } from 'vue'
import App from '@/app'
import { IonicVue } from '@ionic/vue'
import router from '@/router'

const app = createApp(App).use(IonicVue, {}).use(router)
router.isReady().then(() => app.mount('#app'))

import _ from 'lodash'
app.config.globalProperties.$get = _.get // 挂载全局变量

import baseComponent from '@/component/base-component'
baseComponent(app) // base-* 组件全局注册
