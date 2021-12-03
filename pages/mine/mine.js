// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login:false,
    clientname:'',
  },
  onShow:function(){
   
    let oThis=this
    wx.getStorage({
      key:"sessionuser",
      success:function(session){
        let user=session.data
        console.info(session.data)
        wx.request({
          url: "https://app.cell-stars.com/client/username/show",
          header: {"Content-Type": "application/x-www-form-urlencoded"},
          method: "POST",
          data: user,
          // data: {"barcode": 1121032800079},
          complete: function (res) {
              console.info(res.data.clientname)
              oThis.setData({
                login:true,
                clientname:res.data.clientname
              })         
   
          }
      })
        // console.info("success")
        // oThis.setData({
        //   login:true,
        //   clientname:session.data.clientname
        // })
      },
      fail:function(){
        oThis.setData({
          login:false,
        })
      }
    })
  },
  
  //跳转注册页面
  registerpage:function(e){
      wx.navigateTo({
        url: "../mine/register"
      })
    },
    loginpage:function(){
      let oThis=this
      if(this.data.login){
        wx.removeStorage({
          key: 'sessionuser',
          success: function(res) {
            // console.info(res.data.clientname+"***")
            oThis.setData({login:false})
            wx.switchTab({
              url: '../mine/mine',
            })
          },
        })
  
      }else{
        wx.navigateTo({
          url: '../mine/login',
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


})