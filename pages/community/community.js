// pages/community/community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recommendlist:[
      {
        "picUrl": "http://p1.music.126.net/TeUQYWvx6lgQGIcfe8CjHQ==/109951164511483048.jpg?param=140y140", "text": '给自己放假！日系舒缓纯音', "author": "小攀哟", "authorpic":"http://p1.music.126.net/uu0xetQLs8dIrJxxXe9lQQ==/109951164469805739.jpg?param=40y40","songs":[
          { "songname": "大団円", "singer": "Falcom Sound" },
          { "songname": "君との契約", "singer":"松田彬人"},
          { "songname": "慕情", "singer": "和田薫" },
    ]},
      {
        "picUrl": "http://p1.music.126.net/em_fXgUJDApoV_3_8HYkNg==/109951164362973668.jpg?param=140y140", "text":"成长篇|认识到自己的平凡并且接受", "author": "鱼骨与飞鸟集", "authorpic":"http://p1.music.126.net/DCxrQFDCnT4IaJ8buhwUEQ==/109951164466157992.jpg?param=40y40","song":[
          { "songname": "像我这样的人", "singer": "毛不易" },
        { "songname": "知足", "singer": "五月天" },
        { "songname": "你在烦恼什么", "singer": "苏打绿" },
      ] },
      { "picUrl": "http://p1.music.126.net/hL3cWk9fHhcKSiSbDXA1kg==/109951164434267856.jpg?param=140y140", "text": '你要勇敢的去爱，我们都会慢慢好起来', "author": "12" },
      { "picUrl": "http://p1.music.126.net/taX10g-tJ7NAqR3mHldGhw==/109951164006548445.jpg?param=140y140", "text": '只有努力，才能过上自己想要的生活', "author": "22" },
      ] ,
    nightlist:[
      { "picUrl": "http://p1.music.126.net/E0tYYA6kC9M44Yym_WJ0mA==/109951164159619879.jpg?param=140y140", "text": '【复习 论文 码字 代码 刷题】静心音乐大全', "author": "树莓小雪糕" },
      { "picUrl": "http://p1.music.126.net/B3P1C4DC5Si2RWXlmlk2sg==/109951163125148539.jpg?param=140y140", "text": '【睡觉专用】适合晚上安静听的纯音乐', "author": "201909-24" },
      { "picUrl": "http://p2.music.126.net/rMgAZvuMOFfmfam_4TOL7g==/109951163603775360.jpg?param=140y140", "text": '日食记背景乐【用美食来治愈你的矫情】', "author": "不二大叔呀" },
      { "picUrl": "http://p1.music.126.net/VVMRN646ppPvtp1fHowTsw==/109951163651371660.jpg?param=140y140", "text": '温柔睡眠曲 只有猫和音乐伴我入睡', "author": "鹿白川" },
    ],
    afternoonlist:[
      { "picUrl": "http://p2.music.126.net/5hBafDKJKp2bzqvqw0R_Ig==/18524571905101908.jpg?param=140y140", "text": "【法国咖啡馆2】浪漫风琴·塞纳河印象", "author":"双鱼脆脆"},
      { "picUrl": "http://p2.music.126.net/kkUrqP4M5mwIUJzZ8hJ4jA==/109951163798672859.jpg?param=140y140", "text": "展厅背景轻音乐｜读书益用", "author": "白龍BiL"},
      { "picUrl": "http://p2.music.126.net/Zuao0qGaRjKksGz-9WwE_w==/2923601419389486.jpg?param=140y140", "text": "英文歌曲——适合学习英语", "author": "冷小石" },
      { "picUrl": "http://p2.music.126.net/OXNkkGFQf0CA9BfLYz4wgw==/6627856093104076.jpg?param=140y140", "text": "躁动的资本主义情怀", "author": "墨尔本的情书" },
    ]
      }
  ,
// 进入歌单页
  go: function (e) {
    // var test = e.currentTarget.dataset.id
    var datas=new Array()
    datas=[this.data.recommendlist,this.data.nightlist,this.data.afternoonlist]
    var datas =datas
    console.log(datas)
    wx.navigateTo({
      url: "../songlist/songlist?id=" + e.currentTarget.dataset.id + "&index=" + e.currentTarget.dataset.index,
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
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: datas})
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