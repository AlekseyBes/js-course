window.addEventListener('DOMContentLoaded', function() {

  'use strict';

  class Option {
    constructor(height, width, bg, fontSize, textAlign) {
      this.height = height + 'px';
      this.width = width + '%';
      this.background = bg;
      this.fontSize = fontSize + 'px';
      this.textAlign = textAlign;
      console.log(this.height);
    }

    newDiv(){
      let div = document.createElement('div');
      document.body.appendChild(div);
      div.textContent = 'Я новый DIV!!!'
      div.style.cssText = `height:${this.height};
                            width:${this.width};
                            background:${this.background};
                            font-size:${this.fontSize};
                            text-align:${this.textAlign}`;
    }
  }
  const d = new Option(50, 100, 'green', 25, 'center');
  d.newDiv();
  // console.log(new Option(50, 100, 'green'));
});
