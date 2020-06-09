import { Dialog } from 'vant'

/**
 * 登出指令
 */
export const logout = {
  bind(el, binding, vnode){

    el.addEventListener('click', e => {
      console.log(binding)
      Dialog.confirm({
        message: '确认要退出登录?',
      })
        .then(() => {
          vnode.context.$store.commit('DELETE_TOKEN')
          window.location.reload()
        })
    })
  }
}
