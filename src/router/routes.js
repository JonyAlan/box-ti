 
export default [
  {
    path: '/',  
    meta: { name:'Home' }, 
    component: () => { return import('../view/Home')
    }
  },
  {
    path: '/detail',  
    meta: { name:'Detail' }, 
    component: () => { return import('../view/Detail')
    }
  },
]

