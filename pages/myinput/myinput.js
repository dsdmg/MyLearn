// pages/myinput/myinput.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0
  },
  handinput(event){
    console.log(event)
  },
  hd11(event){
    console.log(event)
    this.setData(
      {
        counter: this.data.counter + 1
      }
    )
  }
})