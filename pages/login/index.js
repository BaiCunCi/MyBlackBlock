// pages/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    angle:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("监听页面加载")
  },

  /**
     * 生命周期函数--监听页面显示
     */
  onShow: function () {
    console.log("监听页面显示")
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("监听页面初次渲染完成")
    let that=this
    //采用微信水平仪API 
    wx.onAccelerometerChange(function(res){
      let angle=-(res.x * 30).toFixed(1)
      if(angle>10){
        angle=10
      }else if(angle<-10){
        angle=-10
      }
      console.log("shezhi")
      that.setData({
        
        angle:angle
      })

    })
  },

  

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("监听页面隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("监听页面卸载")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("监听页面下拉到最顶层")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("监听页面上拉到最底层")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("点击分享按钮")
  },
  /**
   * 注册
   */
  toRegister:function(){
    console.log("注册")
    // 跳到注册页
    wx:wx.navigateTo({
      url: '../join/index',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
   * 招回密码
   */
  toFindPass:function(){
    console.log("找回")
    // // 跳到找回页
    wx: wx.navigateTo({
      url: '../forget/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 登录
   */
  goToIndex: function () {
    console.log("登录")
  }
})