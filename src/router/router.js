const home = r => require.ensure([], () => r(require('../page/Home')), 'home')

const testLogin = r => require.ensure([], () => r(require('../test/TestLogin')), 'testLogin')

const defaultPath = () =>  process.env.NODE_ENV == 'development'? 'home': 'home'

const m = {
  template: `<div>
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive">
            </router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>`
}

export default [
    {
        path: '',
        redirect:  '/m'
    },
    {
        path: '/m',
        component: m,
        children: [
            //地址为空时跳转home页面
            {
                path: '',
                redirect: defaultPath
            },
            //home页
            {
                name: 'home',
                path: 'home',
                component: home
            },
            {
                path: 'test',
                component: m,
                children: [
                    {
                        path: '',
                        redirect: 'testLogin'
                    },
                    {
                        path: 'testLogin',
                        component: testLogin
                    }
                ]
            }
        ]
    }
]
