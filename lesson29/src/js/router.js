import './bootstrap'

let routes = [
  {
    path: '/home',
    component: require('./views/Home')
  },
  {
    path: '/about',
    component: require('./views/About')
  }
]

let router = new VueRouter({
  routes
})

export default router
