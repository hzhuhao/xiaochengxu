"use strict";
var app = getApp();
var root_path = "../../../";
var collection = require(root_path + 'function/collection.js')
var index_obj = require(root_path+'function/personal_index.js')

Page({
  data:{
    userInfo: {},
    y_menus:[
      {title:'我的收藏'},
      {title:'浏览历史'},
    ]
  },
  onLoad:function(options){
    var that = this;
    app.getUserInfo(function(userInfo){
        console.log(userInfo);
        
        //设置用户信息
        that.setData({
            userInfo:userInfo
        })
    });
  },
  detail: function (event) {
    collection.redirectTo_index(event);
  },
  onReady:function(){
        index_obj.set_title();
  },
  onShow:function(){
        index_obj.set_title();
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})