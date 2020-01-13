// pages/songlist/songlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gedanlist:[],
    songlistid:"",
    songlistindex:""
  },
  // 测试成功
  test:function(){
    console.log(this.data.gedanlist.data[this.data.songlistid][this.data.songlistindex].text);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var myid=options.id
    var myindex=options.index
    const eventChannel = this.getOpenerEventChannel()
    var mydatas = '';
    eventChannel.on('acceptDataFromOpenerPage',function(data){
      mydatas = data;//这里接收到的是一个大的数据对象,因此里面还有一个data对象
      mydatas = mydatas.data[myid][myindex]
    })
    this.setData({
      gedanlist: mydatas,
      songlistid:myid,
      songlistindex:myindex
    })
    console.log(this.data.gedanlist)
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