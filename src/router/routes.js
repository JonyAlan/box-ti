 
export default [
  {
    path: '/',  
    meta: { name:'dashboard' }, 
    component: () => { return import('../view/home')
    }
  },
]

