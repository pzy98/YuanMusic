//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    background: ['http://p1.music.126.net/HWAUmcwzEi2icWSGW-F9uQ==/109951164515936827.jpg?imageView&quality=89', '/img/lb2.jpg', '/img/lb3.jpg', 'http://kwimg1.kuwo.cn/star/upload/75/4/1574836239414_.jpg', '/img/lb.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    iconsrc: '/icon/more.png',
    musicSrc: '',
    isplay: false,
    mid: '',
    musicinfo: [],
    title:'',
    minyao:[
      {'id':'1', 'name': "成都", 'artists': "赵雷", 'mp3Url':"", 'picUrl': "/img/zhaolei.jpg", 'albumname':"123" },
      { 'id': '2','name': "消愁", 'artists': "毛不易", 'mp3Url':"", 'picUrl': "/img/mao.jpg", 'albumname':""},
      { 'id': '3','name': "我们的时光", 'artists': "赵雷", 'mp3Url':"", 'picUrl': "/img/zhaolei2.jpg", 'albumname': "" },
    ],
    huayu: [
      { 'name': "听妈妈的话", 'artists': "周杰伦", 'mp3Url': "", 'picUrl': "https://dss1.bdstatic.com/6OF1bjeh1BF3odCf/it/u=2707570791,3663464503&fm=74&app=80&f=JPEG&size=f121,90?sec=1880279984&t=bc996217a2c5f80b07df43d358c9dc6a", 'albumname': "" },
      { 'name': "平凡之路", 'artists': "朴树", 'mp3Url': "", 'picUrl': "https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/whfpf%3D82%2C102%2C50/sign=7e8926cee7dde711e78710b6c1d2f629/500fd9f9d72a60598ec677d12a34349b023bba23.jpg", 'albumname':"" },
      { 'name': "你的背包", 'artists': "陈奕迅", 'mp3Url': "", 'picUrl': "https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=1401446225,183606336&fm=74&app=80&f=JPEG&size=f121,121?sec=1880279984&t=77a8fedb0e9f3125d8b4be29a4678781", 'albumname':""},
      { 'name': "年少有为", 'artists': "李荣浩", 'mp3Url': "", 'picUrl': "/img/lrh.jpg", 'albumname': "" },
    ],
    yueyu:[
      { 'name': "喜欢你", 'artists': "G.E.M.邓紫棋", 'mp3Url': "", 'picUrl': "/img/dengziqi.jpg", 'albumname': "" },
      { 'name': "人来人往", 'artists': "陈奕迅", 'mp3Url': "", 'picUrl': "/img/rlrw.jpg", 'albumname': "" },
      { 'name': "面具", 'artists': "许义东廷铿", 'mp3Url': "",'picUrl': "/img/mianju.jpg", 'albumname': "" },
    ],
    coder:[
      { 'name': "追梦赤子心", artists: "GALA乐队", 'mp3Url': "", 'picUrl': "/img/zhuimeng.jpg", 'albumname': "" },
      { 'name': "我的天空", artists: "南征北战NZBZ", 'mp3Url': "", 'picUrl': "/img/mysky.jpg", 'albumname': "青春派" },
      { 'name': "メインテーマ", artists: "伊藤賢治", 'mp3Url': "", 'picUrl': "/img/timg.jpg", 'albumname': "" },
    ]
  },

  // 
  gogo:function(){
    wx.navigateTo({
      url: '/pages/songclass/songclass',
    })
  },
  // 
  onReady: function () {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    // this.audioCtx = wx.createInnerAudioContext()
    // 网络请求数据
    var this1=this;
    wx.request({
      url: 'http://t2.ossjk.com/api/getMusic', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application / json' // 默认值
      },
      success(res){
        // console.log(res.data)打印测试
        this1.setData({
            musicinfo: res.data,
            title:'推荐歌曲'
          })
        app.data.musicdata = res.data;
        // console.log(app.data.musicdata)
      }
    })
  },
  /**
   * 播放事件
  */
  onplay: function (e) {
    wx.navigateTo({
      url: "../play/play?id="+e.currentTarget.dataset.index,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function (data) {
          console.log(data)
        },
        someEvent: function (data) {
          console.log(data)
        }
  },
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      }
    })
  },
  // 音乐类型
  // 推荐
  tuijianclick:function(){
    var this1 = this;
    wx.request({
      url: 'http://t2.ossjk.com/api/getMusic', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application / json' // 默认值
      },
      success(res) {
        this1.setData({
          musicinfo: res.data,
          title: '推荐音乐'
        })
        app.data.musicdata = res.data;
        // console.log(app.data.musicdata)
      }
    })
  },
  // 民谣
  minyaoclick:function(){
    var this1 = this;
    this1.setData({
      musicinfo: this1.data.minyao,
      title: '民谣'
    })
    app.data.musicdata=this1.data.minyao
    //console.log(this1.data.minyao)
  },
  //华语
  huayuclick:function(){
    var this1 = this;
    this1.setData({
      musicinfo: this1.data.huayu,
      title: '华语'
    })
    app.data.musicdata=this1.data.huayu
    // console.log(this1.data.huayu)
  },
  //粤语
  yueyuclick: function () {
    var this1 = this;
    this1.setData({
      musicinfo: this1.data.yueyu,
      title: '粤语'
    })
    app.data.musicdata = this1.data.yueyu
    // console.log(this1.data.yueyu)
  },
  //码农频道
  coderclick:function(){
    var this1 = this;
    this1.setData({
      musicinfo: this1.data.coder,
      title: '码农频道'
    })
    app.data.musicdata = this1.data.coder
  }

  
})
