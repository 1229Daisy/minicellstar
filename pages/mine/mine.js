// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login:false,
    clientname:'用户姓名',
  },
  onShow:function(){
    let oThis=this
    wx.getStorage({
      key:"sessionuser",
      success:function(session){
        console.info(session.data)
        console.info("success")
        oThis.setData({
          login:true,
          clientname:session.data.clientname
        })
      },
      fail:function(){
        oThis.setData({
          login:false,
          phone:''
        })
      }
    })
  },
  //跳转登录页面
  loginpage:function(e){
    let oThis=this
    if(this.data.login){
      wx.removeStorage({
        key: 'sessionuser',
        success: function(res) {
          oThis.setData({login:false,clientname:''})
          wx.switchTab({
            url: '../index/index',
          })
        },
      })

    }else{
      wx.navigateTo({
        url: '../mine/login',
      })
    }
  },
  //跳转注册页面
  registerpage:function(e){
      wx.navigateTo({
        url: "../mine/register"
      })
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