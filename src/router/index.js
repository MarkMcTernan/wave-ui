import Vue from 'vue'
import VueRouter from 'vue-router'
import WhyWaveUI from '@/documentation/views/why-wave-ui'
import Home from '@/documentation/views/home'

Vue.use(VueRouter)
// The loading state of Vue Router is appended to $router, so a
// spinner can be shown while loading. This status needs to be reactive, it is
// set to true on beforeRoute and false on afterRoute.
const status = Vue.observable({ loading: true })

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/why-wave-ui',
    name: 'why-wave-ui',
    component: WhyWaveUI
  },
  {
    path: '/getting-started',
    name: 'getting-started',
    component: () => import(/* webpackChunkName: "getting-started" */ '@/documentation/views/getting-started.vue')
  },
  {
    path: '/browser-support',
    name: 'browser-support',
    component: () => import(/* webpackChunkName: "browser-support" */ '@/documentation/views/browser-support.vue')
  },
  {
    path: '/customization',
    name: 'customization',
    component: () => import(/* webpackChunkName: "customization" */ '@/documentation/views/customization.vue')
  },
  {
    path: '/breakpoints',
    name: 'breakpoints',
    component: () => import(/* webpackChunkName: "breakpoints" */ '@/documentation/views/breakpoints.vue')
  },
  {
    path: '/colors',
    name: 'colors',
    component: () => import(/* webpackChunkName: "colors" */ '@/documentation/views/colors.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    redirect: '/layout--spaces'
  },
  {
    path: '/layout--spaces',
    name: 'layout-spaces',
    component: () => import(/* webpackChunkName: "layout-spaces" */ '@/documentation/views/layout-spaces.vue')
  },
  {
    path: '/layout--grid-system',
    name: 'layout-grid-system',
    component: () => import(/* webpackChunkName: "layout-grid-system" */ '@/documentation/views/layout-grid-system.vue')
  },
  {
    path: '/layout--flex',
    name: 'layout-flex',
    component: () => import(/* webpackChunkName: "layout-flex" */ '@/documentation/views/layout-flex.vue')
  },
  {
    path: '/typography',
    name: 'typography',
    component: () => import(/* webpackChunkName: "typography" */ '@/documentation/views/typography.vue')
  },
  {
    path: '/transitions',
    name: 'transitions',
    component: () => import(/* webpackChunkName: "transitions" */ '@/documentation/views/transitions.vue')
  },
  {
    path: '/form',
    name: 'form-elements',
    redirect: '/w-form'
  }
]

const components = [
  { id: 'accordion', label: 'Accordion' },
  { id: 'alert', label: 'Alert' },
  { id: 'app', label: 'App' },
  { id: 'breadcrumbs', label: 'Breadcrumbs' },
  { id: 'button', label: 'Button' },
  { id: 'badge', label: 'Badge' },
  { id: 'card', label: 'Card' },
  { id: 'checkbox', label: 'Checkbox' },
  { id: 'dialog', label: 'Dialog' },
  { id: 'divider', label: 'Divider' },
  { id: 'drawer', label: 'Drawer' },
  { id: 'form', label: 'Form' },
  { id: 'icon', label: 'Icon' },
  { id: 'image', label: 'Image' },
  { id: 'input', label: 'Input' },
  { id: 'list', label: 'List' },
  { id: 'menu', label: 'Menu' },
  { id: 'notification', label: 'Notification' },
  { id: 'overlay', label: 'Overlay' },
  { id: 'parallax', label: 'Parallax' },
  { id: 'progress', label: 'Progress' },
  { id: 'rating', label: 'Rating' },
  { id: 'select', label: 'Select' },
  { id: 'slider', label: 'Slider' },
  { id: 'spinner', label: 'Spinner' },
  { id: 'steps', label: 'Steps' },
  { id: 'switch', label: 'Switch' },
  { id: 'radio', label: 'Radio' },
  { id: 'tabs', label: 'Tabs' },
  { id: 'tag', label: 'Tag' },
  { id: 'textarea', label: 'Textarea' },
  { id: 'toolbar', label: 'Toolbar' },
  { id: 'tooltip', label: 'Tooltip' }
]

const externalComponents = [
  { id: 'calendar', label: 'Calendar', path: '/calendar' },
  { id: 'slideshow', label: 'Slideshow', path: '/slideshow' },
  { id: 'splitter', label: 'Splitter', path: '/splitter' }
]

components.concat(externalComponents).forEach(item => {
  routes.push({
    path: item.path || `/w-${item.id}`,
    name: item.id,
    component: () => import(/* webpackChunkName: "[request]" */ `@/documentation/views/ui-components/${item.id}/index.vue`)
  })
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // Update through the property observer getter for reactivity.
  status.loading = true
  router.status = status
  next()
})

router.afterEach(() => (status.loading = false))

export default router
