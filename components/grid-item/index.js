// components/grid-item/index.js
Component({
  externalClasses:['i-class'],
  relations:{
    '../grid/index':{
      type:'parent'
    },
    '../grid-icon/index': {
      type: 'child'
    },
    '../grid-label/index': {
      type: 'child'
    }
  },
  
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    width:"33.33%",
    bg:'#fff'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    touchStart(){
      this.setData({bg:'#ccc'})
    },
    touchEnd(){
      this.setData({bg: '#fff'})
    }
  }
})
