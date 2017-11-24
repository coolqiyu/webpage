/**
 * 形状：**
 *       **
 * @param {[type]} width  [description]
 * @param {[type]} height [description]
 */
function Square4(width, height){
	Square.call(this);
	width = width || 2;
	height = height || 2;
	this.data = [];
	for(let i = 0; i < height; i++){
		let row = [];
		for(let j = 0; j < width; j++){
			row.push(1);
		}
		this.data.push(row);
	}
}
Square4.prototype = Square.prototype;