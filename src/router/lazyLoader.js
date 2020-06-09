/**
 * 异步组件加载处理函数
 * @param {Object} AsycnView 需要加载的组件
 * @return {Object} 返回一个promise对象
 * **/
export default  AsycnView => {

  const AsyncHandler = () => ({
    component: AsycnView,
    loading: require('@/components/common/RouteLoading'),
    error: require('@/components/common/RouteError'),
    delay: 200,
    timeout: 10000
  })

  return Promise.resolve({
    functional: true,
    render(h, {data, children}){
      return h(AsyncHandler, data, children)
    }
  })

}
