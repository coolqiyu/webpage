/**
 * 形状：****
 * @param {[type]} width  [description]
 * @param {[type]} height [description]
 */
function Square1(width, height){
	Square.call(this);
	width = width || 4;
	height = height || 1;
	this.data = [];
	for(let i = 0; i < height; i++){
		let row = [];
		for(let j = 0; j < width; j++){
			row.push(1);
		}
		this.data.push(row);
	}
}
Square1.prototype = Square.prototype;