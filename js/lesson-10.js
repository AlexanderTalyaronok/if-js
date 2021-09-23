const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return this;
  },
  next() { 
    if (this.current === undefined || this.current === this.data.length) {
      this.current = 0;
    }
    return {
      value: this.data[this.current++],
    }
  }
};

const changeStyle = colorsObject => event => event.target.style.backgroundColor = colorsObject.next().value;

document.getElementById('text3').addEventListener('click', changeStyle({ ...colors }));
document.getElementById('text2').addEventListener('click', changeStyle({ ...colors }));
document.getElementById('text1').addEventListener('click', changeStyle({ ...colors }));







