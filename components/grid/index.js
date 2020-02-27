// components/grid/index.js
Component({
  externelClasses: ['i-class'],
  relations: {
    '../grid-item/index': {
      type: 'child',
      linked() {
        //当gird-item插入 时
        this.setGirdItemWidth()
      },
      linkChange() {
        //移动
        this.setGirdItemWidth()
      },
      unlinked() {
        //移除
        this.setGirdItemWidth()
      }
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    setGirdItemWidth(){
      const nodes = this.getRelationNodes('../grid-item/index');
      const width = 100/nodes.length
      nodes.forEach(item =>{
        item.setData({
          'width': width +'%'
        })
      })
    }
  },
  //组件创建时
  create:function(){
    
  },
  //组件进入节点树
  attached:function(){

  },
  //组件在视图完成时
  ready:function(){
    this.setGirdItemWidth()
  },
  //组件被移动时
  moved:function(){

  },
  //组件移除时
  detached:function(){
    
  },
  //组件内部发生错误时
  error:function(){

  }


})
