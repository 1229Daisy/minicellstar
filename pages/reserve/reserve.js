// pages/reserve/reserve.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        project: [
            {
                id: 0,
                name: '体检'
              },
            {
              id: 1,
              name: '免疫力评估'
            },
            {
              id: 2,
              name: '干细胞干预'
            },
            {
              id: 3,
              name: '免疫细胞干预'
            },
            {
                id: 4,
                name: '续存'
              },
              {
                id: 5,
                name: 'DNA甲基化早筛'
              }
          ],
          projectindex: "",
          startDate:new Date().toDateString()
    },
//绑定输入的姓名 
bininput_username: function (e) {
  console.info('姓名',e.detail.value)
    this.setData({
        username: e.detail.value
    })
},
//绑定用户选择的预约日期
bininput_reservedate: function (e) {
  console.info('预约日期',e.detail.value)
this.setData({
reservedate: e.detail.value
})
},
//绑定用户选择的项目
bininput_project: function(e) {
console.log('预约项目的索引号：', e.detail.value)
this.setData({
    projectindex: e.detail.value
})
},
//绑定用户选择的使用日期
bininput_usedate: function (e) {
  console.info('使用日期',e.detail.value)
this.setData({
usedate: e.detail.value
})
},
//用户提交预约信息表单
submitReserve: function (e) {
  if(!this.data.username){
      wx.showToast({
          title: '姓名必填',
          icon: 'error',
          duration: 2000
      })
  }else if (!this.data.reservedate) {
      wx.showToast({
          title: '请选择预约时间',
          icon: 'error',
          duration: 2000
      })
  }else if (!this.data.projectindex) {
    wx.showToast({
        title: '请选择预约项目',
        icon: 'error',
        duration: 2000
    })
} else if (!this.data.usedate) {
  wx.showToast({
      title: '请选择使用时间',
      icon: 'error',
      duration: 2000
  })
} 
  else{
  let oThis = this
  let formdata = {}
  formdata.clientname = this.data.username
  formdata.reservedate = this.data.reservedate
  formdata.item = this.data.projectindex
  formdata.usedate = this.data.usedate
  console.info(formdata)
  wx.getStorage({
      key: 'sessionuser',
      success: function (sessionuser) {
       formdata.phone=sessionuser.data.phone
          wx.request({
              url: "https://bainuo.beijingepidial.com/client/cellstar/reserveform",
              header: {"Content-Type": "application/x-www-form-urlencoded"},
              method: "POST",
              data: formdata,
              complete: function (res) {
                wx.showToast({
                  title: '已提交',
                  icon: 'success',
                  duration: 2000
              })
              oThis.setData({
                username:'',
                reservedate:'',
                projectindex:'',
                usedate:''
              })

                  // wx.navigateTo({
                  //     url: '../mine/mine'
                  // })
              }
          })
      },
      fail: function (res) {
          //wx.showModal({title: '提示',content:"用户登录状态失效，请重新登录"})
          wx.navigateTo({
            url: '../mine/login',
          })
      }
  })
}
},
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})