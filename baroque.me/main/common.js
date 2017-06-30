/**
 * ��������
 */
 
/**
 * ���Բ�ֵ
 * �������t=0.5����ô����a��b���·����
 * @param {number} a �ǵ�һ��ֵ
 * @param {number} b �ǵڶ���ֵ
 * @param {number} t ��0~1�ı���
 * @return {number} ���ػ���t��a~b����
 */
var lerp = function(a, b, t){
    return a + (b - a) * t;
};

/**
 * ����һ��������ֵ�����������������Χ
 * ���nԽ�磬���ý�ֵ����n������ֱ�ӷ���n
 * @param {number} n ��Ҫ���Ƶ�nֵ
 * @param {number} n0 �½�
 * @param {number} n1 �Ͻ�
 * @return {number} ������n0~n1�����
 */
var lim = function(n, n0, n1){
    if (n < n0)
        return n0;
    if (n >= n1)
        return n1;
    return n;
};

/**
 * ����һ��ֵ�Լ�һ���Ͻ���½磬������һ��0~1����ֵ
 * ���Ǳ����ǻ��ڸ���ֵ���趨
 * �ٶ� a >= a0 �� a <= a1
 * @param {number} a �Ǹ���ֵ
 * @param {number} a0 �½�
 * @param {number} a1 �Ͻ�
 * @param {number} ����0~1��ı���
 */
var norm = function(a, a0, a1){
    return (a - a0)/(a1-a0);//js����ֵ���Ͷ��Ǹ����ͣ����Բ��ö������
};  

/** 
 * ����һ��ֵ������ֵ����������1��-1
 * @param {number} n�Ǵ����ֵ
 * @param {number} ���Ϊ�����򷵻�-1�����򷵻�1
 */
var sign = function(n){
    if( n > 0)
        return 1;
    return -1;
};
  
/**
 * ��������ɫ�������Բ�ֵ��ÿ����ɫ��RGBA����
 * RGBA����Red(��ɫ) Green(��ɫ) Blue(��ɫ) �� Alphaɫ�ʿռ䣬Ҳ����͸����/��͸����
 * @param {array} ��һ��RGBA������ɫ
 * @param {array} �ڶ���RGBA������ɫ
 * @param {number} 0~1��ı���ֵ
 * @return {array} ��ֵ���
 */
var lerpColor = function(a, b, t){
    var c1 = lerp(a[0], b[0], t);
    var c2 = lerp(a[1], b[1], t);
    var c3 = lerp(a[2], b[2], t);
    var c4 = lerp(a[3], b[3], t);
    return [c1, c2, c3, c4];
}

/**
 * ����rgb(#,#,#)��rgba(#,#,#,#)������16���ƴ�
 * @param color ��rgb(#,#,#)��rgba(#,#,#,#)
 * @return ���ض�Ӧ��16����ֵ
 */
function rgbToHex(color){
    var m = /rgba?((\d),(\d),(\d))/.exec(color);
    return m? '#' + (m[1]<<16 | m[2]<<8 | m[3]).toString(16) : color;//��C++���Ƶ�˫Ŀ����
}

/**
 * ��һ��16�����ַ���ת����10��������
 * @param {hexe} 16���������ַ�������#��ͷ
 * @return {array} ����3����������
 */
function hex2rgb(hex){
    if(hex.charAt(0) == '#')
        hex = hex.slice(1);//��ȡ1������ַ�����ȥ���ʼ��#����
    hex = hex.tuUpperCase();//ȫ��ת���ɴ�д
    var hex_alphabets = '0123456789ABCDEF';
    var value = new Array(3);
    var k = 0;
    var int1, int2;
    for(var i = 0; i < 6; i+=2)
    {
        //�ҳ���iλ�õ��ַ�����hex_alphabetsһһ��Ӧ
        int1 = hex_alphabets.indexOf(hex.charAt(i));
        int2 = hex_alphabets.indexOf(hex.charAt(i+1));
        value[k] = (int1 * 16) + int2;
        k++;
    }
}

/**
 * ��������ɫֵrgb����ת����һ���ַ���rgb(#,#,#)
 * @param {Array} 3��ֵ������
 * @return rgbֵ
 */
var getRgb = function(color){
    //--�ҵ�д��
    //var rgb = 'rgb(' + color[0].toString() + ',' + color[1].toString() + ',' + color[2].toString() + ')';
    var r = Math.round(color[0]);//ΪʲôҪ��Math.round��
    var g = Math.round(color[1]);
    var b = Math.round(color[2]);
    return return 'rgb('+r+','+g+','+b+')';
}

/**
 * ����AB��EF�Ľ����߶�
 * ����Ϊ4��{@link #Point}ʵ��������һ��{@link #Point}
 * @param {Object} һ������󣬵�һ���߶ε����
 * @param {Object} һ������󣬵�һ���߶ε��յ�
 * @param {Object} һ������󣬵ڶ����߶ε����
 * @param {Object} һ������󣬵ڶ����߶ε��յ�
 * @param {Object} ���ؽ���㣬���û�н����򷵻�null
 */
var lineIntersect = function(A, B, E, F){
  var ip, a1, a2, b1, b2, c1, c2;
  a1 = B.y-A.y; a2 = F.y-E.y;
  b1 = A.x-B.x; b2 = E.x-F.x;
  c1 = B.x*A.y - A.x*B.y; c2 = F.x*E.y - E.x*F.y;
  var det=a1*b2 - a2*b1;
  // ���������ƽ�У�ֱ�ӷ���null
  if (det == 0) { return null; }
  // �ҵ���������
  var xip = (b1*c2 - b2*c1)/det;
  var yip = (a2*c1 - a1*c2)/det;
  // ȷ�����Ƿ�����������
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
 * һ���򵥵ĵ����xΪx���꣬yΪy����
 * @class ����һ��Point��
 * @constructor
 * @param {number} px�ǵ��x����
 * @param {number} py�ǵ��y����
 */
var Point = function(px, py){
    this.x = px;
    this.y = py;
};

/** 
 * ���µ��x����
 * @param {number} px ���x����
 */
Point.prototype.setX = functoin(px){
    this.x = px;
};

/** 
 * ���µ��y����
 * @param {number} py ���y����
 */
Point.prototype.setY = functoin(py){
    this.y = py;
};