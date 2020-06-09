const { token, userBase, userInfo, projectBean,  } = require('./db.js')

/**
 * 返回结果
 */
const Result = {
  success: (data, msg = '成功') => ({
    code: 0,
    message: msg,
    ok: true,
    success: true,
    data
  }),
  fail: () => ({
    code: -1,
    message: '错误',
    ok: false,
    success: false,
    data: null
  })
}

/**
 * sleep
 * @param {} ms
 * @param {*} par
 */
const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve,ms));
}

module.exports = app => {


  /**
   * 登录接口
   */
  app.post('/api/login', async (req, res) => {

    await sleep( 3000 )
    res.json( Result.success({ token, ...userBase }, '登录成功') )

  })

  /**
   * 获取用户详情接口
   * @param
   * @return object
   **/
  app.get('/api/getUserInfo', (req, res) => {

    res.json( Result.success(userInfo) )

  })

  /***
   * 获取任务列表
   * @param { number } pageSize.required --分页参数
   * @param { number } pageNumber.required --分页页码
   * @return object
   */
  app.get('/api/project/:id', (req, res) => {

    const { pageSize=20, pageNumber=1 } = req.params

    const projects =  new Array(20).fill(projectBean).map((item, index) => {
      return {
        ...item,
        id: ( pageNumber-1 )*pageSize + index
      }
    })

    res.json( Result.success(projects) );

  })



}
