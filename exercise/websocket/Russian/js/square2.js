/**
 * 形状：**
 *        *
 *        *
 * @param {[type]} width  [description]
 * @param {[type]} height [description]
 */
function Square2(width, height){
	Square.call(this);
	width = width || 2;
	height = height || 3;
	this.data = [];
	for(let i = 0; i < height; i++){
		let row = [];
		for(let j = 0; j < width; j++){
			if(i === 0 || j === width -1)
				row.push(1);
			else
				row.push(0);
		}
		this.data.push(row);
	}
}
Square2.prototype = Square.prototype;