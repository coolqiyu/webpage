function Square(){
	//在game区域内的位置
	this.origin = {
		x: 0,
		y: 0
	}	
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
		if(!this.check(tmp, this.data, boundary))
			return false;
		else{
			this.origin = tmp;
			return true;
		}
	},
	/**
	 * 不知道什么问题，变形后就找不到东西了
	 * @param  {[type]} origin   [description]
	 * @param  {[type]} boundary [description]
	 * @return {[type]}          [description]
	 */
	check: function(origin, data, boundary){
		var height = data.length;
		var width = data[0].length;

		//没有超过总范围的边界
		//这个不太好，因为可能必要图形外还有空闲空间
		if(origin.x < 0 
			|| origin.y < 0 
			|| origin.x + width > boundary[0].length
			|| origin.y + height > boundary.length)
			return false;

		//top
		for(let i = 0; i < width; i++){
			if(data[0][i] && boundary[origin.y][origin.x + i])
					return false;
		}
		//bottom
		for(let i = 0; i < width; i++){
			if(data[height - 1][i] && boundary[origin.y + height - 1][origin.x + i])
				return false;
		}
		//left
		for(let i = 0; i < height; i++){
			if(data[i][0] && boundary[origin.y + i][origin.x])
				return false;
		}
		//right
		for(let i = 0; i < height; i++){
			if(data[i][width - 1] && boundary[origin.y + i][origin.x + width - 1])
				return false;
		}
		return true;
	},
	/**
	 * 方块顺时针旋转90度，行转列
	 */
	rotate: function(boundary){
		var height = this.data.length;
		var width = this.data[0].length;
		var tmpData = [];
		for(let i = 0; i < width; i++)
			tmpData[i] = [];
		for(let i = 0; i < height; i++)
			for(let j = 0; j < width; j++){
				tmpData[j][height - i - 1] = this.data[i][j];
			}
		//旋转后也要判断一下
		// console.log("rotate: ", JSON.stringify(this.origin), JSON.stringify(tmpData));
		if(this.check(this.origin, tmpData, boundary)){
			this.data = tmpData;
			return true;
		}
		return false;
	}
}