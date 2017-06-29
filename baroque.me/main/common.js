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
    return m? '#' + (m[1]<<16 | m2[8] | m[3]).toString(16) : color;//��C++���Ƶ�˫Ŀ����
}