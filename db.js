
const token = new Date().getTime()

//user基本信息
const userBase = {
  name: "admin",
  pkId: "001",
  phone: "13877644873",
  avatar: "./assets/tmp/img/avatar.jpg",
  roleId: "1",
  dept: "杭州创盾科技",
  deptId: "001",
  roleName: "ADMIN"
}

//user详情
const userInfo = {
  ...userBase,
  createTime: new Date().getTime(),
  updateTime: new Date().getTime(),
  lastLoginTime: new Date().getTime(),
  other: "其他信息"
}

//project bean
const projectBean = {
  key: 0,
  disabled: true,
  href: "https://ant.design",
  avatar: "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
  no: "TradeCode 0",
  title: "一个任务名称 0",
  owner: "不知道",
  description: "这是一段描述",
  callNo: 381,
  status: 2,
  statusText: "已上线",
  statusType: "success"
}

module.exports = {
  token, userBase, userInfo, projectBean
}