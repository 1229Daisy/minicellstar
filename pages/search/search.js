// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    showpdf2: function (e) {
        let oThis = this
        wx.getStorage({
              key: 'sessionuser',
              success: function (res) {
                let tofindpdf=res.data
                console.info(tofindpdf)
               
                wx.request({
                      url: "https://app.cell-stars.com/client/check/report",
                      header: { "Content-Type": "application/x-www-form-urlencoded"},
                      method: "POST",
                      data: tofindpdf,
                      // data: {"sampleid": 1121032800079},
                      complete: function (res) {
                        // wx.showLoading({
                        //   title: '加载中',
                        //   duration:10000,
                        //   mask: true
                        // })
                        if (res.data.immunity) {
                            wx.showLoading({
                                title: '加载中',
                                duration:10000,
                                mask: true
                              })
                           wx.downloadFile({
                          url: "https://app.cell-stars.com/" +res.data.immunity,
                          header: {},
                          success: function (res) {
                            wx.showLoading({
                              title: '加载中',
                              duration:10000,
                              mask: true
                            })
                            var filePath = res.tempFilePath;
                            console.log(res);
                              wx.openDocument({
                                filePath: filePath,
                                fileType: 'pdf',
                                success: function (res) {
                                  wx.hideLoading()
                                  console.log(res);
                                  wx.showToast({
                                    title: "打开成功",
                                    icon: 'success',
                                    duration: 2000
                                  })
                                },
                                fail: function (res) {
                                  wx.hideLoading()
                                  wx.showToast({
                                    title: "打开失败",
                                    icon: 'success',
                                    duration: 2000
                                  })
                                },
                                complete: function (res) {

                                  console.log(res);
                                }
                              })
                           
                          },
                          fail: function (res) {
                            console.info(res)
                            console.log('文件下载失败');
                          },
                          complete: function (res) {},

                        })
                     
                    }
                    else {
                      wx.hideLoading()
                      wx.showModal({
                        title: '提示',
                        content: "报告未生成，请等候"
                      })
                    }


                  },
                  fail: function (res) {}
              })
          },
          fail: function (e) {
            wx.navigateTo({
              url: '../mine/login'
            })
          }
      })

  },
  showpdf1: function (e) {
    let oThis = this
    wx.getStorage({
          key: 'sessionuser',
          success: function (res) {
            let tofindpdf=res.data
            console.info(tofindpdf)
           
            wx.request({
                  url: "https://app.cell-stars.com/client/check/report",
                  header: { "Content-Type": "application/x-www-form-urlencoded"},
                  method: "POST",
                  data: tofindpdf,
                  // data: {"sampleid": 1121032800079},
                  complete: function (res) {
                    console.info("https://app.cell-stars.com/" +res.data.physical)
                    // wx.showLoading({
                    //   title: '加载中',
                    //   duration:10000,
                    //   mask: true
                    // })
                    if (res.data.physical) {
                     
                        wx.showLoading({
                            title: '加载中',
                            duration:10000,
                            mask: true
                          })
                       wx.downloadFile({
                      url: "https://app.cell-stars.com/" +res.data.physical,
                      header: {},
                      success: function (res) {
                        wx.showLoading({
                          title: '加载中',
                          duration:10000,
                          mask: true
                        })
                        var filePath = res.tempFilePath;
                        console.log(res);
                          wx.openDocument({
                            filePath: filePath,
                            fileType: 'pdf',
                            success: function (res) {
                              wx.hideLoading()
                             
                              wx.showToast({
                                title: "打开成功",
                                icon: 'success',
                                duration: 2000
                              })
                            },
                            fail: function (res) {
                              wx.hideLoading()
                              wx.showToast({
                                title: "打开失败",
                                icon: 'success',
                                duration: 2000
                              })
                            },
                            complete: function (res) {

                              console.log(res);
                            }
                          })
                       
                      },
                      fail: function (res) {
                        console.info(res)
                        console.log('文件下载失败');
                      },
                      complete: function (res) {},

                    })
                 
                }
                else {
                  wx.hideLoading()
                  wx.showModal({
                    title: '提示',
                    content: "报告未生成，请等候"
                  })
                }


              },
              fail: function (res) {}
          })
      },
      fail: function (e) {
        wx.navigateTo({
          url: '../mine/login'
        })
      }
  })

},
showpdf3: function (e) {
  let oThis = this
  wx.getStorage({
        key: 'sessionuser',
        success: function (res) {
          let tofindpdf=res.data
          console.info(tofindpdf)
         
          wx.request({
                url: "https://app.cell-stars.com/client/check/report",
                header: { "Content-Type": "application/x-www-form-urlencoded"},
                method: "POST",
                data: tofindpdf,
                // data: {"sampleid": 1121032800079},
                complete: function (res) {
                  // wx.showLoading({
                  //   title: '加载中',
                  //   duration:10000,
                  //   mask: true
                  // })
                  if (res.data.cellsave) {
                      wx.showLoading({
                          title: '加载中',
                          duration:10000,
                          mask: true
                        })
                     wx.downloadFile({
                    url: "https://app.cell-stars.com/" +res.data.cellsave,
                    header: {},
                    success: function (res) {
                      wx.showLoading({
                        title: '加载中',
                        duration:10000,
                        mask: true
                      })
                      var filePath = res.tempFilePath;
                      console.log(res);
                        wx.openDocument({
                          filePath: filePath,
                          fileType: 'pdf',
                          success: function (res) {
                            wx.hideLoading()
                            console.log(res);
                            wx.showToast({
                              title: "打开成功",
                              icon: 'success',
                              duration: 2000
                            })
                          },
                          fail: function (res) {
                            wx.hideLoading()
                            wx.showToast({
                              title: "打开失败",
                              icon: 'success',
                              duration: 2000
                            })
                          },
                          complete: function (res) {

                            console.log(res);
                          }
                        })
                     
                    },
                    fail: function (res) {
                      console.info(res)
                      console.log('文件下载失败');
                    },
                    complete: function (res) {},

                  })
               
              }
              else {
                wx.hideLoading()
                wx.showModal({
                  title: '提示',
                  content: "报告未生成，请等候"
                })
              }


            },
            fail: function (res) {}
        })
    },
    fail: function (e) {
      wx.navigateTo({
        url: '../mine/login'
      })
    }
})

},
showpdf4: function (e) {
  let oThis = this
  wx.getStorage({
        key: 'sessionuser',
        success: function (res) {
          let tofindpdf=res.data
          console.info(tofindpdf)
         
          wx.request({
                url: "https://app.cell-stars.com/client/check/report",
                header: { "Content-Type": "application/x-www-form-urlencoded"},
                method: "POST",
                data: tofindpdf,
                // data: {"sampleid": 1121032800079},
                complete: function (res) {
                  // wx.showLoading({
                  //   title: '加载中',
                  //   duration:10000,
                  //   mask: true
                  // })
                  if (res.data.celltest) {
                      wx.showLoading({
                          title: '加载中',
                          duration:10000,
                          mask: true
                        })
                     wx.downloadFile({
                    url: "https://app.cell-stars.com/" +res.data.celltest,
                    header: {},
                    success: function (res) {
                      wx.showLoading({
                        title: '加载中',
                        duration:10000,
                        mask: true
                      })
                      var filePath = res.tempFilePath;
                      console.log(res);
                        wx.openDocument({
                          filePath: filePath,
                          fileType: 'pdf',
                          success: function (res) {
                            wx.hideLoading()
                            console.log(res);
                            wx.showToast({
                              title: "打开成功",
                              icon: 'success',
                              duration: 2000
                            })
                          },
                          fail: function (res) {
                            wx.hideLoading()
                            wx.showToast({
                              title: "打开失败",
                              icon: 'success',
                              duration: 2000
                            })
                          },
                          complete: function (res) {

                            console.log(res);
                          }
                        })
                     
                    },
                    fail: function (res) {
                      console.info(res)
                      console.log('文件下载失败');
                    },
                    complete: function (res) {},

                  })
               
              }
              else {
                wx.hideLoading()
                wx.showModal({
                  title: '提示',
                  content: "报告未生成，请等候"
                })
              }


            },
            fail: function (res) {}
        })
    },
    fail: function (e) {
      wx.navigateTo({
        url: '../mine/login'
      })
    }
})

},
showpdf5: function (e) {
  let oThis = this
  wx.getStorage({
        key: 'sessionuser',
        success: function (res) {
          let tofindpdf=res.data
          console.info(tofindpdf)
         
          wx.request({
                url: "https://app.cell-stars.com/client/check/report",
                header: { "Content-Type": "application/x-www-form-urlencoded"},
                method: "POST",
                data: tofindpdf,
                // data: {"sampleid": 1121032800079},
                complete: function (res) {
                  // wx.showLoading({
                  //   title: '加载中',
                  //   duration:10000,
                  //   mask: true
                  // })
                  if (res.data.inventory) {
                      wx.showLoading({
                          title: '加载中',
                          duration:10000,
                          mask: true
                        })
                     wx.downloadFile({
                    url: "https://app.cell-stars.com/" +res.data.inventory,
                    header: {},
                    success: function (res) {
                      wx.showLoading({
                        title: '加载中',
                        duration:10000,
                        mask: true
                      })
                      var filePath = res.tempFilePath;
                      console.log(res);
                        wx.openDocument({
                          filePath: filePath,
                          fileType: 'pdf',
                          success: function (res) {
                            wx.hideLoading()
                            console.log(res);
                            wx.showToast({
                              title: "打开成功",
                              icon: 'success',
                              duration: 2000
                            })
                          },
                          fail: function (res) {
                            wx.hideLoading()
                            wx.showToast({
                              title: "打开失败",
                              icon: 'success',
                              duration: 2000
                            })
                          },
                          complete: function (res) {

                            console.log(res);
                          }
                        })
                     
                    },
                    fail: function (res) {
                      console.info(res)
                      console.log('文件下载失败');
                    },
                    complete: function (res) {},

                  })
               
              }
              else {
                wx.hideLoading()
                wx.showModal({
                  title: '提示',
                  content: "报告未生成，请等候"
                })
              }


            },
            fail: function (res) {}
        })
    },
    fail: function (e) {
      wx.navigateTo({
        url: '../mine/login'
      })
    }
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