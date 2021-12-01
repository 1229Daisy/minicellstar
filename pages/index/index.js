// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad(options) {
    let clientname = options.clientname
    let oThis = this
    wx.getStorage({
        key: 'sessionuser',
        success: function (res) {
            oThis.setData({
                phone: res.data.phone,
                clientname: clientname,
            })
            let data = {}
            data.clientname = clientname
            data.tel = res.data.phone
            wx.request({
                url: "https://bainuo.beijingepidial.com/client/index/message",
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                method: "POST",
                data: data,
                // data: {"sampleid": 1121032800079},
                complete: function (res) {
                console.info(res.data.clientname+"#")
                    oThis.setData({
                      clientname: res.data.clientname,
                      constractnum: res.data.constractnum,
                      signingtime: res.data.signingtime,
                      saveyear: res.data.saveyear,
                      cell: res.data.cell,
                      savestatus: res.data.savestatus,
                      location: res.data.location,
                      leftyear: res.data.leftyear,
                        
                    })
                },
                fail: function (res) {
                    wx.showModal({title: '提示',content:"用户登录状态失效，请重新登录"})
                }
            })

        }
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
