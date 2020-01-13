//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    mydata:[
      { image: "http://p1.music.126.net/hlsuj2IV31pB3NNY4BTZcQ==/18948983393104199.jpg?param=40y40", name: "土拨鼠是真滴⑧行", date: "2011-11-11", content:"爱死介个小程序廖！！！"},
      { image: "http://p1.music.126.net/ySDBDbozrxaxcmNY4qHftA==/109951163761324748.jpg?param=40y40", name: "无吐不快乐", date: "2017-03-15", content: "也就随便试试" },
      { image: "http://p1.music.126.net/bA4uXKH3uo3Kr4Y_Xqk_bw==/18575149441684661.jpg?param=40y40", name: "掌着伞挑着灯", date: "2017-03-15", content: "介是一个什么无用的界面" },
      { image: "http://p1.music.126.net/cLbMaKrJeTyYsoTyFux06w==/109951163565118457.jpg?param=40y40", name: "呐呐呐呐呐呐呐呐", date: "2017-03-15", content: "阿诺列，阿诺列！二刺螈这样说话难道有错吗？" },
      { image: "http://p1.music.126.net/Vt_Bom_lFORMl9GvdeJ9lg==/109951164489933842.jpg?param=40y40", name: "黄颜色头发妹妹", date: "2019-03-15", content: "我是真的⑧去酒吧，憋骚扰我辣！" },
      { image: "http://p1.music.126.net/4WDKrVTMS3K9YFk8GXEomg==/109951164244017233.jpg?param=40y40", name: "满头dar♂汗", date: "2017-03-15", content: "一起来van游戏！" },
      { image: "http://p1.music.126.net/Eei5uncybbLlKaprpVkYhA==/109951163714553443.jpg?param=40y40", name: "同性♂交友", date: "2017-03-15", content: "激情视频尽在pilipili.com！" },
      { image: "/images/8.jpeg", name: "俩黄颜色头发妹妹", date: "2017-03-15", content: "我俩是真妹有去酒霸！" }
    ]
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  },

  onGetUserInfo: function(e) {
    if (!this.data.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    
  },
            

})
