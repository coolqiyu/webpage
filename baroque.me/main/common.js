/**
 * 公共函数
 */
 
/**
 * 线性插值
 * 例，如果t=0.5，那么会在a和b间半路返回
 * @param {number} a 是第一个值
 * @param {number} b 是第二个值
 * @param {number} t 是0~1的比例
 * @return {number} 返回基于t在a~b间数
 */
var lerp = function(a, b, t){
    return a + (b - a) * t;
};

/**
 * 限制一个给定的值，如果它超过给定范围
 * 如果n越界，则用界值覆盖n，否则直接返回n
 * @param {number} n 想要限制的n值
 * @param {number} n0 下界
 * @param {number} n1 上界
 * @return {number} 返回在n0~n1间的数
 */
var lim = function(n, n0, n1){
    if (n < n0)
        return n0;
    if (n >= n1)
        return n1;
    return n;
};

/**
 * 传入一个值以及一个上界和下界，并返回一个0~1比例值
 * 这是比例是基于给定值的设定
 * 假定 a >= a0 且 a <= a1
 * @param {number} a 是给定值
 * @param {number} a0 下界
 * @param {number} a1 上界
 * @param {number} 返回0~1间的比率
 */
var norm = function(a, a0, a1){
    return (a - a0)/(a1-a0);//js的数值类型都是浮点型，所以不用额外操作
};  

/** 
 * 传入一个值并根据值的正负返回1或-1
 * @param {number} n是传入的值
 * @param {number} 如果为负数则返回-1，否则返回1
 */
var sign = function(n){
    if( n > 0)
        return 1;
    return -1;
};
  
/**
 * 在两个颜色间做线性插值，每个颜色是RGBA数组
 * RGBA代表Red(红色) Green(绿色) Blue(蓝色) 和 Alpha色彩空间，也就是透明度/不透明度
 * @param {array} 第一个RGBA数组颜色
 * @param {array} 第二个RGBA数组颜色
 * @param {number} 0~1间的比率值
 * @return {array} 插值结果
 */
var lerpColor = function(a, b, t){
    var c1 = lerp(a[0], b[0], t);
    var c2 = lerp(a[1], b[1], t);
    var c3 = lerp(a[2], b[2], t);
    var c4 = lerp(a[3], b[3], t);
    return [c1, c2, c3, c4];
}

/**
 * 传入rgb(#,#,#)或rgba(#,#,#,#)并返回16进制串
 * @param color 是rgb(#,#,#)或rgba(#,#,#,#)
 * @return 返回对应的16进制值
 */
function rgbToHex(color){
    var m = /rgba?((\d),(\d),(\d))/.exec(color);
    return m? '#' + (m[1]<<16 | m[2]<<8 | m[3]).toString(16) : color;//和C++类似的双目运算
}

/**
 * 把一个16进制字符串转换成10进制灵敏
 * @param {hexe} 16进制数的字符串，以#开头
 * @return {array} 包含3个数的数组
 */
function hex2rgb(hex){
    if(hex.charAt(0) == '#')
        hex = hex.slice(1);//提取1往后的字符串，去除最开始的#符号
    hex = hex.tuUpperCase();//全部转换成大写
    var hex_alphabets = '0123456789ABCDEF';
    var value = new Array(3);
    var k = 0;
    var int1, int2;
    for(var i = 0; i < 6; i+=2)
    {
        //找出第i位置的字符，与hex_alphabets一一对应
        int1 = hex_alphabets.indexOf(hex.charAt(i));
        int2 = hex_alphabets.indexOf(hex.charAt(i+1));
        value[k] = (int1 * 16) + int2;
        k++;
    }
}

/**
 * 把三个颜色值rgb数组转换成一个字符串rgb(#,#,#)
 * @param {Array} 3个值的数组
 * @return rgb值
 */
var getRgb = function(color){
    //--我的写法
    //var rgb = 'rgb(' + color[0].toString() + ',' + color[1].toString() + ',' + color[2].toString() + ')';
    var r = Math.round(color[0]);//为什么要用Math.round？
    var g = Math.round(color[1]);
    var b = Math.round(color[2]);
    return return 'rgb('+r+','+g+','+b+')';
}

/**
 * 计算AB和EF的交叉线段
 * 输入为4个{@link #Point}实例，返回一个{@link #Point}
 * @param {Object} 一个点对象，第一个线段的起点
 * @param {Object} 一个点对象，第一个线段的终点
 * @param {Object} 一个点对象，第二个线段的起点
 * @param {Object} 一个点对象，第二个线段的终点
 * @param {Object} 返回交叉点，如果没有交叉则返回null
 */
var lineIntersect = function(A, B, E, F){
  var ip, a1, a2, b1, b2, c1, c2;
  a1 = B.y-A.y; a2 = F.y-E.y;
  b1 = A.x-B.x; b2 = E.x-F.x;
  c1 = B.x*A.y - A.x*B.y; c2 = F.x*E.y - E.x*F.y;
  var det=a1*b2 - a2*b1;
  // 如果两条线平行，直接返回null
  if (det == 0) { return null; }
  // 找到交叉坐标
  var xip = (b1*c2 - b2*c1)/det;
  var yip = (a2*c1 - a1*c2)/det;
  // 确定点是否在两条线上
  if (Math.pow(xip - B.x, 2) + Math.pow(yip - B.y, 2) >
      Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2))
  { return null; }
  if (Math.pow(xip - A.x, 2) + Math.pow(yip - A.y, 2) >
      Math.pow(A.x - B.x, 2) + Math.pow(A.y - B.y, 2)) 
  { return null; }
  if (Math.pow(xip - F.x, 2) + Math.pow(yip - F.y, 2) >
      Math.pow(E.x - F.x, 2) + Math.pow(E.y - F.y, 2))
  { return null; }
  if (Math.pow(xip - E.x, 2) + Math.pow(yip - E.y, 2) >
      Math.pow(E.x - F.x, 2) + Math.pow(E.y - F.y, 2))
  { return null; }
  return new Point(xip, yip);
}

/**
 * 一个简单的点对象，x为x坐标，y为y坐标
 * @class 这是一个Point类
 * @constructor
 * @param {number} px是点的x坐标
 * @param {number} py是点的y坐标
 */
var Point = function(px, py){
    this.x = px;
    this.y = py;
};

/** 
 * 更新点的x坐标
 * @param {number} px 点的x坐标
 */
Point.prototype.setX = functoin(px){
    this.x = px;
};

/** 
 * 更新点的y坐标
 * @param {number} py 点的y坐标
 */
Point.prototype.setY = functoin(py){
    this.y = py;
};