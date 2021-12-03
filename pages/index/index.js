// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    clientname: '',
    constractnum: '',
    signingtime: '',
    saveyear: '',
    cell: '',
    savestatus: '',
    location: '',
    leftyear: '',
    interval:''//定义一个全局倒计时，以便在其他地方可以清除倒计时
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow: function () {
    let oThis = this
    try {
      var value = wx.getStorageSync('sessionuser')
      console.info(value+'$')
      if (!value) {
        console.info('*********')
        clearInterval(oThis.data.interval)
        oThis.setData({
          clientname: '',
          constractnum: '',
          signingtime: '',
          saveyear: '',
          cell: '',
          savestatus: '',
          location: '',
          leftyear: '',   
        })
      }else{   
        wx.request({
          url: "https://app.cell-stars.com/client/index/message",
          header: {
              "Content-Type": "application/x-www-form-urlencoded"
          },
          method: "POST",
          data: value,
          // data: {"sampleid": 1121032800079},
          complete: function (res) {
            oThis.setData({//登录后首页显示姓名
              clientname: res.data.clientname,
            })
            //年限倒计时
          let year=res.data.saveyear
          let savedate=year.replace(/年/,'')
          console.info(savedate+"#")
          oThis.data.interval=setInterval(function () {
            let startday=new Date(res.data.signingtime);  
            let end=new Date(startday);// 
             end.setFullYear(end.getFullYear()+parseInt(savedate)); //将年限转换为日期
             end.setDate(end.getDate()-parseInt(savedate)); 
            let endday=end
            let nowday = new Date();
            let time =endday.getTime() - nowday.getTime();
            let day = parseInt(time/(1000 * 3600 * 24))
            let leftyear=day+'天'
           oThis.setData({
            clientname: res.data.clientname,
            constractnum: res.data.constractnum,
            signingtime: res.data.signingtime,
            saveyear: res.data.saveyear,
            cell: res.data.cell,
            savestatus: res.data.savestatus,
            location: res.data.location,
            leftyear: leftyear,    
          })
                  }, 1000);
           
          },
          fail: function (res) {
              wx.showModal({title: '提示',content:"用户登录状态失效，请重新登录"})
          }
      })
      }
    } catch (e) {
     console.info(e)
    }
    // console.info("XXXX")
    // let oThis = this
    // wx.getStorage({
    //     key: 'sessionuser',
    //     success: function (session) { 
    //       let center=session.data
    //       console.info(center.phone+"$$$$$")
    //       if(!center){
    //         console.info("cccc")
    //         oThis.setData({
    //           clientname: '',
    //           constractnum: '',
    //           signingtime: '',
    //           saveyear: '',
    //           cell: '',
    //           savestatus: '',
    //           location: '',
    //           leftyear: '',
                
    //         })
    //       }else{ 
    //         console.info("咋回事")
    //           wx.request({
    //               url: "https://app.cell-stars.com/client/index/message",
    //               header: {
    //                   "Content-Type": "application/x-www-form-urlencoded"
    //               },
    //               method: "POST",
    //               data: center,
    //               // data: {"sampleid": 1121032800079},
    //               complete: function (res) {
    //               let year=res.data.saveyear
    //               let savedate=year.replace(/年/,'')
    //               console.info(savedate+"#")
    //               setInterval(function () {
    //                 let startday=new Date(res.data.signingtime);  
    //                 let end=new Date(startday);// 
    //                  end.setFullYear(end.getFullYear()+parseInt(savedate)); //将年限转换为日期
    //                  end.setDate(end.getDate()-parseInt(savedate)); 
    //                 let endday=end
    //                 let nowday = new Date();
    //                 let time =endday.getTime() - nowday.getTime();
    //                 let day = parseInt(time/(1000 * 3600 * 24))
    //                 let leftyear=day+'天'
    //                oThis.setData({
    //                 clientname: res.data.clientname,
    //                 constractnum: res.data.constractnum,
    //                 signingtime: res.data.signingtime,
    //                 saveyear: res.data.saveyear,
    //                 cell: res.data.cell,
    //                 savestatus: res.data.savestatus,
    //                 location: res.data.location,
    //                 leftyear: leftyear,    
    //               })
    //                       }, 1000);
                   
    //               },
    //               fail: function (res) {
    //                   wx.showModal({title: '提示',content:"用户登录状态失效，请重新登录"})
    //               }
    //           })
    //         }

    //     }
    // })
  },
  // onTabItemTap(item) { 
  //   console.info("sss")
  //   let That = this
  //   That.setData({
  //     clientname: '',
  //     constractnum: '',
  //     signingtime: '',
  //     saveyear: '',
  //     cell: '',
  //     savestatus: '',
  //     location: '',
  //     leftyear: '',
        
  //   })
  // },
  onLoad: function (options) {
   console.info('onload')
   },

})
