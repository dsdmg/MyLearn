// mycpn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mytitel:{
      type: String,
      value:"默认标题",
      observer:(newVal,oldVal)=>{
        console.log(newVal,oldVal);
      }
    }
  },
  externalClasses:['titleclass'],
  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
