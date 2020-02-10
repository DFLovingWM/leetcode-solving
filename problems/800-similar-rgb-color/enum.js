/**
 * 枚举：枚举全部可简化的颜色
 */
var similarRGB = function(color) {
  const target = color2RGB(color);
  const step = 16 * 1 + 1;
  let res = '';
  let minDiff = Infinity; // 当前结果`res`与`color`的距离

  for (let r = 0; r <= 255; r += step) {
    for (let g = 0; g <= 255; g += step) {
      for (let b = 0; b <= 255; b += step) {
        const d = Math.pow(r - target[0], 2) + Math.pow(g - target[1], 2) + Math.pow(b - target[2], 2);
        if (d < minDiff) { // 如果差距更小，则更新答案
          minDiff = d;
          res = rgb2Color(r, g, b);
        }
      }
    }
  }

  return res;
};

function color2RGB(color) {
  const res = [];
  res.push(Number.parseInt(color.slice(1, 3), 16));
  res.push(Number.parseInt(color.slice(3, 5), 16));
  res.push(Number.parseInt(color.slice(5, 7), 16));
  return res;
}

function rgb2Color(r, g, b) {
  let res = '#';
  res += r ? r.toString(16) : '00';
  res += g ? g.toString(16) : '00';
  res += b ? b.toString(16) : '00';
  return res;
}