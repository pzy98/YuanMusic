// pages/music/music.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:0,
    music:{},
    musicl:"00:00",
    dang:"00:00",
    stuta: true,//打开播放页面时为播放按钮图片
    module:"loop"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.data.musicdata)
    var rd = Math.round(Math.random() * app.data.musicdata.length - 1)
    var data1 = app.data.musicdata[rd];
    this.setData({
      index: rd,
      music:data1,
      module: module,
      des:0,
      musicl:"00:00",
      perl:0,
      dang:"00:00"
    })
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  
  onReady: function () {
    this.audioCtx = wx.createAudioContext('myAudio');
    this.audioCtx.play();//点击歌曲进入页面是进行播放
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

  },

  //播放与暂停事件
   onplay : function (){
    
     if(!this.data.stuta){
       this.audioCtx.play();
       this.setData({
         stuta: true
       })
     }else{
       this.audioCtx.pause();
       this.setData({
         stuta: false
       })
     }
   },

   //播放模式事件
  onloop: function (e) {
    console.log(e.currentTarget.dataset.module);
    var val=e.currentTarget.dataset.module;
    if(val=="loop"){
      this.setData({
        module:"single"
      })
    }else if(val=="single"){
      this.setData({
        module:"random"
      })
    }else{
      this.setData({
        module:"loop"
      })
    }
  },
  //下一曲
  onNext:function(){
    var index2 = this.data.index;
    
    if (this.data.module == "random") {
      index2 = Math.round(Math.random() * app.data.musicdata.length - 1)
    } else {
    if(index2==app.data.musicdata.length){
      index2=0;
    }else{
      index2++;
    }
    }
    this.setData({
      music:app.data.musicdata[index2],
      index:index2,
      des: 0
    })

    if(this.data.stuta){
      this.audioCtx.seek(0);
      this.audioCtx.play();
    }
  },
//上一首
   onUp:function(){
     var index2 = this.data.index;

     if(this.data.module=="random"){
       index2 = Math.round( Math.random() * app.data.musicdata.length - 1)
     }else{
     if (index2 == 0) {
       index2 = app.data.musicdata.length-1;
     } else {
       index2--;
     }
   }
     this.setData({
       music: app.data.musicdata[index2],
       index: index2,
       des:0
     })

     if (this.data.stuta) {
       this.audioCtx.seek(0);
       this.audioCtx.play();
     }
   },
   //播放完毕后的事件
   playend:function(){
     this.onNext();
   },


    //播放时候的事件
   timeupdate:function(e){
     var val = Math.round(e.detail.currentTime/e.detail.duration*1000)/10;
     var t = this.formatTime(e.detail.duration);
     var t2 = this.formatTime(e.detail.currentTime);

     this.setData({
       des:this.data.des+0.7,
       musicl:t2,
       perl:val,
       dang:t
     })
   },

  formatTime: function (time) {
    time = Math.floor(time);
    var m = Math.floor(time / 60).toString();
    m = m.length < 2 ? '0' + m : m;

    var s = (time - parseInt(m) * 60).toString();
    s = s.length < 2 ? '0' + s : s;

    return m + ':' + s;
  },

//转发
  onShareAppMessage: function () {
    wx.showShareMenu({
      withShareTicket: true,
      success: function () {
        wx.showToast({
          title: "分享成功",
          duration: 2000
        });
      }
    })
  }


})