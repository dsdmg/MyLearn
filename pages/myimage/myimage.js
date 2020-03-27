// pages/myimage/myimage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgpath: "/assets/images/shenhe.png"
  },
  selImage() {
    wx.chooseImage({
      count: 0,
      sizeType: [],
      sourceType: [],
      success: (res) => {
        console.log(res);
        const path = res.tempFilePaths[0];
        console.log(path);
        this.setData({
          imgpath: path
        });
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})