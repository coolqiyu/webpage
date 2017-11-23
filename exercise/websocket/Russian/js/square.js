function Square(width, height){
	width = width || 4;
	height = height || 4;
	this.data = [];
	//在game区域内的位置
	this.origin = {
		x: 0,
		y: 0
	}
	for(let i = 0; i < height; i++){
		let row = [];
		for(let j = 0; j < width; j++){
			row.push(0);
		}
		this.data.push(row);
	}
	this.data[0][1] = 1;
	this.data[1][1] = 1;
	this.data[2][1] = 1;
	this.data[3][1] = 1;
}
Square.prototype = {
	/**
	 * 修改方块移动
	 * @param  number direction 移动方向
	 * @param  数组嵌套 boundary  边界数据
	 * @return boolean true表示确实有移动，false表示无
	 */
	move: function(direction, boundary){
		var width = this.data.length;
		var height = this.data[0].length;
		var tmp = JSON.parse(JSON.stringify(this.origin));
		switch(direction){
			case "top":
				tmp.y -= 1;
				break;
			case "down":
				tmp.y += 1;
				break;
			case "left":
				tmp.x -= 1;
				break;
			case "right":
				tmp.x += 1;
				break;
		}
		if(!this.check(tmp, boundary))
			return false;
		else{
			this.origin = tmp;
			return true;
		}
	},
	check: function(tmp, boundary){
		var height = this.data.length;
		var width = this.data[0].length;

		//没有超过总范围的边界
		//这个不太好，因为可能必要图形外还有空闲空间
		if(tmp.x < 0 
			|| tmp.y < 0 
			|| tmp.x + width >= boundary[0].length
			|| tmp.y + height >= boundary.length)
			return false;

		//top
		for(let i = 0; i < width; i++){
			if(this.data[0][i] && boundary[tmp.y][tmp.x + i])
				return false;
		}
		//bottom
		for(let i = 0; i < width; i++){
			if(this.data[height - 1][i] && boundary[tmp.y + height - 1][tmp.x + i])
				return false;
		}
		//left
		for(let i = 0; i < height; i++){
			if(this.data[i][0] && boundary[tmp.y + i][tmp.x])
				return false;
		}
		//right
		for(let i = 0; i < height; i++){
			if(this.data[i][width - 1] && boundary[tmp.y + i][tmp.x + width - 1])
				return false;
		}
		return true;
	},
	/**
	 * 方块顺时针旋转90度，行转列
	 */
	rotate: function(){
		var height = this.data.length;
		var width = this.data[0].length;
		var tmp = [];
		for(let i = 0; i < width; i++)
			tmp[i] = [];
		for(let i = 0; i < height; i++)
			for(let j = 0; j < width; j++){
				tmp[j][height - i - 1] = this.data[i][j];
			}
		this.data = tmp;
	}
}