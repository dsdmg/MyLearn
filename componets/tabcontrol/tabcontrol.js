// componets/tabcontrol/tabcontrol.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabList: {
      type: [],
      value: ["一", "二", "三"]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabclick(event) {
 
      const c = event.currentTarget.dataset.index;

      this.setData({
        current:c
      })
      this.triggerEvent("tabselect", { index: c, tab:this.properties.tabList[c]}, {})
    }
  }
})