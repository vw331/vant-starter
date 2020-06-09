
import store from '@/store'

//无须登录即可访问
const noPermission = ['Login', 'Register', '404', 'Landing']

export default (to, from, next) => {

  if(noPermission.includes(to.name)){
    next()
    return false
  }

  if(store.state.token){
    next()
  }else{
    alert('请登录')
    next({ path: '/login' })
  }

}
