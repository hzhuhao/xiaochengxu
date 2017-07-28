"use strict";

var root_path = "../../../";
var index_obj = require(root_path+'function/collection.js')
var figure_obj = require(root_path+'function/information_figure.js')
var api = require(root_path+'api/information_api.js');
var menu_static = 0;
Page({
    
  data: {
    hid: false,
    menuStatic: menu_static,
    dis:"display_block",
    menu: ['推荐', '热点', '绿茶', '红茶', '黑茶', '白茶', '普洱'],
    imgUrls: [   //首页banner
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicatorDots:false,
  },
  onPullDownRefresh: function () {  //下拉刷新
    console.log('onPullDownRefresh', new Date())
  },
  stopPullDownRefresh: function () {
    wx.stopPullDownRefresh({
      complete: function (res) {
        console.log(res, new Date())
      }
    })
  },
  onReady:function(){
      var that = this;
      setTimeout(function () {
          that.setData({ hid: true });
      }, 2000);
  },

  onShow:function(){
      var that = this;
      setTimeout(function () {
          that.setData({ dis:"display_none" });
      }, 1500);

      if(figure_obj.get_figure_cookie()){
          this.setData({ dis:"display_none" });
      }else{
          figure_obj.set_figure_cookie();
      }
  },

  detail: function(event) {
      index_obj.redirectTo_index(event);
  },

  click_menu: function (event) {
    this.menu_static = event.currentTarget.id;
    this.setData({
      menuStatic: this.menu_static
    });
    console.log(this.menu_static);
  }
  
});
