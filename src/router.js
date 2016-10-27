var routes = [
    { path: '/',
      name: 'index',
      component: require('./components/contents/hello.vue')
    },
    { path: '/hi',
      name: 'hi',
      component: require('./components/contents/hi.vue')
    },
    { path: '/login',
      name: 'login',
      component: require('./components/contents/login.vue')
    },
    { path: '/chat',
      name: 'chat',
      component: require('./components/chat/chat.vue')
    },
    { path: '*',
      component: require('./components/contents/hello.vue')
    }
]

module.exports = routes
