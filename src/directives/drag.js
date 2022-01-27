export default {
  mounted: (el, binding) => {
    const content = document.querySelector('.layout-content')
    const boxWidth = content.getBoundingClientRect().width
    const boxHeight = content.getBoundingClientRect().height
    let oDiv = el;   //获取当前元素
    const position = localStorage.getItem(el.className);
    const _this = binding.instance;
    if(position) {
      let _p = position.split(',')
      _this.positionX = _p[0];
      _this.positionY = _p[1];
      oDiv.style.top = _p[0] + "px";
      oDiv.style.left = _p[1] + "px";
    }
    oDiv.onmousedown = (e) => {
      //算出鼠标相对元素的位置
      let disX = e.clientX - oDiv.offsetLeft;
      let disY = e.clientY - oDiv.offsetTop;

      document.onmousemove = (e) => {
        //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX;
        let top = e.clientY - disY;
        let elWidth = oDiv.getBoundingClientRect().width
        let elHeight = oDiv.getBoundingClientRect().height
        if(top + elHeight > boxHeight) {
          top = boxHeight - elHeight
        }
        if(left + elWidth > boxWidth) {
          left = boxWidth - elWidth
        }
        if(left < 0) left = 0
        if(top < 0) top = 0
        //绑定元素位置到positionX和positionY上面
        _this.positionX = top;
        _this.positionY = left;
        localStorage.setItem(el.className, [top, left]);
        //移动当前元素
        oDiv.style.left = left + "px";
        oDiv.style.top = top + "px";
      };
      document.onmouseup = (e) => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };
  }
};
