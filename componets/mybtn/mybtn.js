// componets/mybtn/mybtn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handbtn(event){
      // console.log(event);
      this.triggerEvent("hd1",{name:"孙俪"},{})
    }
  }
})
