/**
 * 形状：***
 *         ***
 * @param {[type]} width  [description]
 * @param {[type]} height [description]
 */
function Square5(width, height){
	Square.call(this);
	width = width || 3;
	height = height || 2;
	this.data = [];
	for(let i = 0; i < height; i++){
		let row = [];
		for(let j = 0; j < width; j++){
			if((i === 0 && j < Math.floor(width / 2))
				|| (i === height - 1 && j > Math.floor(width / 2))
				|| (j === Math.floor(width / 2)))
				row.push(1);
			else
				row.push(0);
		}
		this.data.push(row);
	}
}
Square5.prototype = Square.prototype;