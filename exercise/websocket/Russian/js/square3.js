/**
 * 形状：***
 *        *
 * @param {[type]} width  [description]
 * @param {[type]} height [description]
 */
function Square3(width, height){
	Square.call(this);
	width = width || 3;
	height = height || 2;
	this.data = [];
	for(let i = 0; i < height; i++){
		let row = [];
		for(let j = 0; j < width; j++){
			if(i === 0 || j === Math.floor(width / 2))
				row.push(1);
			else
				row.push(0);
		}
		this.data.push(row);
	}
}
Square3.prototype = Square.prototype;