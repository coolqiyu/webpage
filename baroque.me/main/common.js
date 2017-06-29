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
    return m? '#' + (m[1]<<16 | m2[8] | m[3]).toString(16) : color;//和C++类似的双目运算
}