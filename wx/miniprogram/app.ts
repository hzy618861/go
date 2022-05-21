import { IAppOption } from "./appoption"
import { coolcar } from "./service/proto_gen/test_pb"
import { Coolcar } from "./service/request"
import { getSetting, getUserInfo } from "./utils/wxapi"
import camelcaseKeys = require("camelcase-keys");
let resolveUserInfo: (value: WechatMiniprogram.UserInfo | PromiseLike<WechatMiniprogram.UserInfo>) => void
let rejectUserInfo: (reason?: any) => void

// app.ts
App<IAppOption>({
  globalData: {
    userInfo: new Promise((resolve, reject) => {
      resolveUserInfo = resolve
      rejectUserInfo = reject
    })
  },
  async onLaunch() {
    wx.request({
      url:"http://localhost:8080/test/1",
      method:"GET",
      success:res=>{
          const r =  coolcar.GetTestResponse.fromObject(
            camelcaseKeys(res.data as object,{deep:true})
          )
          console.log()
          r.test?.startPos?.latitude
          console.log(coolcar.TestStatus[r.test?.status!])
        
      },
      fail:console.error
    })
    // 登录
    Coolcar.login()

    // 获取用户信息
    try {
      const setting = await getSetting()
      if (setting.authSetting['scope.userInfo']) {
        const userInfoRes = await getUserInfo()
        resolveUserInfo(userInfoRes.userInfo)
      }
    } catch (err) {
      rejectUserInfo(err)
    }
  },
  resolveUserInfo(userInfo: WechatMiniprogram.UserInfo) {
    resolveUserInfo(userInfo)
  }
})