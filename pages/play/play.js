// pages/play.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    music: {},//接收音乐信息(一条))
    stuta: true,//播放状态
    module: "loop",
    index:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data1 = app.data.musicdata[options.id];
    // console.log(data1);
    // console.log(app.data.module);
    this.setData({
      des:0,
      index:options.id,
      music: data1,
      stuta:app.data.module,
      range_val: 0,//进度条进度
      actiontime:"00:00",//当前时间
      totaltime: '',//总时间
    })
  },
  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio');//获取audio标签
    console.log(this.audioCtx)
    this.audioCtx.play();//打开自动播放
  },
  // 更新时间,获取音乐时长及处理
  timeupdate: function (e) {
    //获取歌曲当前的位置 currentTime
    // duration 获取当前歌曲的总长
    var val = Math.round(e.detail.currentTime / e.detail.duration * 1000) / 10;
    var time1 = this.formatTime(e.detail.duration);
    var time2 = this.formatTime(e.detail.currentTime);
    this.setData({
      des: this.data.des + 1,
      range_val: val,//进度条
      totaltime: time1,
      actiontime: time2
    })
    },
    // 格式化时间（时间格式处理）
  formatTime: function (time) {
    time = Math.floor(time);
    var m = Math.floor(time / 60).toString();
    m = m.length < 2 ? '0' + m : m;
    var s = (time - parseInt(m) * 60).toString();
    s = s.length < 2 ? '0' + s : s;
    return m + ':' + s;
    },
    // 播放方式
  onloop: function (e) {
    var val = e.currentTarget.dataset.module;
    if (val == "loop") {
      this.setData({
        module: "single"
      })
    } else if (val == "single") {
      this.setData({
        module: "random"
      })
    } else {
      this.setData({
        module: "loop"
      })
    }
  },
    //上一首歌
  onUp: function () {
    var index2 = this.data.index;
    if (this.data.module == "random") {
      index2 = Math.round(Math.random() * app.data.musicdata.length - 1)
    } 
    else {
      if (index2 == 0) {
        index2 = app.data.musicdata.length - 1
      } else {
        index2--;
      }
    }
    this.setData({
      music: app.data.musicdata[index2],
      index: index2
    })
    if (this.data.stuta) {
      this.audioCtx.seek(0)
      this.audioCtx.play();
    }
  },
  // 播放按钮设置
  onplay: function (e) {
    if (!this.data.stuta) {
      this.audioCtx.play();
      this.setData({
        stuta: true
      })
    } else {
      this.audioCtx.pause();
      this.setData({
        stuta: false
      })
    }
  },
    // 下一首歌
  onNext: function () {
    var index2 = this.data.index;
    if (this.data.module == "random") {
      index2 = Math.round(Math.random() * app.data.musicdata.length - 1)
    }
    else {
      if (index2 == app.data.musicdata.length) {
        index2 = 0;
      } else {
        index2++;
      }
    }
    this.setData({
      music: app.data.musicdata[index2],
      index: index2
    })
    if (this.data.stuta) {
      this.audioCtx.play();
    }
  },
  // 当一首歌播放结束后自动播放下一首
  playend: function () {
    this.onNext();
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