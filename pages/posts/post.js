const postsData = require("../../data/posts-data.js") //这里只能使用相对路径,使用绝对路径会报错

Page({
  data: {

  },

  onLoad: function(options) {
    this.setData({
      contentKeys: postsData.postList,
    });
  }
})