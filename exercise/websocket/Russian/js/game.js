/**
 * 游戏构造函数
 * @param json classSet 不同状态的方块对应不同的class
 */
var Game = function(classSet, gameDiv, nextDiv){
	this.current = classSet.current;
	this.none = classSet.none;
	this.done = classSet.done;
	//整个game区域和next区域的div对象
	this.gameDiv = gameDiv;
	this.nextDiv = nextDiv;
	//整个game区域和next区域的数据
	this.gameData = [];
	this.nextData = [];
	//当前和next的图形，需要这两个吗？
	//直接修改gameData和nextData不就好了吗？
	//这两个什么时候出来会比较好呢？
	//一开始就出来，游戏开始时出来，两个好像差不多，那就一开始就出来吧
	this.currentSq = SquareFactory.create();
	this.nextSq = SquareFactory.create();
	this.score = 0;//分数
	this.startTime = 0;//用时
}
Game.prototype = {
	/**
	 * 初始化游戏div区域，添加div以及将div清空
	 * @param  数组嵌套的格式 gameDiv 游戏区域div
	 * @param  数组嵌套的格式 nextDiv 下一个物体展示的div
	 */
	init: function(gameSize, nextSize){
		this.generate(this.gameData, this.gameDiv, gameSize);
		this.generate(this.nextData, this.nextDiv, nextSize);		
	},
	/**
	 * 为dataDiv生成size大小元素，并把data的各位置为0
	 * @param  数组 data 
	 * @param  object dataDiv 
	 * @param  json size    包含width和size两个属性
	 */
	generate: function(data, dataDiv, size){
		var width = size.width;
		var height = size.height;
		for(let i = 0; i < height; i++){
			let row = [];
			for(let j = 0; j < width; j++){
				row.push(0);
				var div = document.createElement("div");
				div.className = this.none;
				dataDiv.appendChild(div);
			}
			data.push(row);
		}
	},
	/**
	 * 刷新游戏区域，全部清空
	 * @param  数组嵌套的格式 div 要清空的div
	 */
	refresh: function(){
		this.clear(this.gameData, this.gameDiv);
		this.clear(this.nextData, this.nextDiv);
	},
	/**
	 * 根据square来清空游戏区域
	 * @param [] data 要清空区域当前的数据
	 * @param obj div 要清空的区域
	 * @param  json square {data:[], origin: {x:0, y:0}} 
	 */
	clear: function(data, div, square){
		var clearAll = square ? false : true;//是否清空所有
		if(!square){
			if(data === this.gameData)
				square = {data: this.gameData, origin: {x:0, y:0}};
			else
				square = {data: this.nextData, origin: {x:0, y:0}}; 
		}
		// var data = square.data;
		// var origin = square.origin;	
		var height = square.data.length;
		var width = square.data[0].length;
		var originX = square.origin.x;
		var originY = square.origin.y;
		for(let i = 0; i < height; i++)
			for(let j = 0; j < width; j++){
				//1.清空所有
				//2.不清空所有，清空当前方块时使用，只把方块中有数据的清除，不然会把区域中其它部分的也清了	
				if(clearAll || square.data[i][j]){
					data[originY + i][originX + j] = 0;
					div.children[(originY + i) * data[0].length + originX + j].className = this.none;
				}
			}
	},
	/**
	 * 控制当前方块移动，要有边缘检测
	 * @param  number direction 运动方向 下0、左1、右2
	 * @return boolean 是否有移动
	 */
	move: function(direction){
		var isMove = false;		
		this.clear(this.gameData, this.gameDiv, this.currentSq);
		//根据方向移动方块
		//如果清空后再移动，但是并没有移动，那在视觉上是不是会有问题？
		//比如会有一瞬间空白？？
		//结果，暂时没有发现问题		
		isMove = this.currentSq.move(direction, this.gameData);
		//在画布中绘制
		this.drawData(this.gameData, this.gameDiv, this.currentSq);
			
		return isMove;		
	},
	rotate: function(){
		this.clear(this.gameData, this.gameDiv, this.currentSq);
		this.currentSq.rotate(this.gameData);
		this.drawData(this.gameData, this.gameDiv, this.currentSq);
	},
	/**
	 * 将square的样式放到div中(从pos开始)，且设置data
	 * @param 数组嵌套 data   [description]
	 * @param dom-div div    [description]
	 * @param 方块样式 square [description]
	 */
	drawData: function(data, div, square){
		var sqHeight = square.data.length;
		var sqWidth = square.data[0].length;
		for(let i = 0; i < sqHeight; i++)
			for(let j = 0; j < sqWidth; j++){				
				let index = (square.origin.y + i) * data[0].length + square.origin.x + j; 
				switch(square.data[i][j]){
					//当值为0时不用修改，只要保持原来的数据即可
					// case 0:
					// 	div.children[index].className = this.none;
					// 	break;
					case 1:
						data[square.origin.y + i][square.origin.x + j] = square.data[i][j];
						div.children[index].className = this.current;
						break;
					// case 2:
					// 	div.children[index].className = this.done;
					// 	break;
				}
			}
	},
	/**
	 * 游戏开始
	 * @return {[type]} [description]
	 */
	start: function(){
		var self = this;
		self.drawData(self.gameData, self.gameDiv, self.currentSq);
		self.drawData(self.nextData, self.nextDiv, self.nextSq);
		this.startTime = new Date().getTime();
		//定时控制当前方块下落
		var intervalTimer = setInterval(function(){
			if(!self.move("down")){
				//如果当前方块在y=0位置时就无法移动，则游戏结束
				if(!self.currentSq.origin.y){
					clearInterval(intervalTimer);
					alert("game over");
					return;
				}
				//把当前的数据判断一下，如果已经有成行的，那就下移删除
				var height = self.gameData.length;
				var width = self.gameData[0].length;
				for(let i = height - 1; i >= 0; i--){
					let delFlag = 1, endFlag = 0;
					for(let j = 0; j < width; j++){
						delFlag &= self.gameData[i][j];//1则删除
						endFlag |= self.gameData[i][j];//0则结束
						if(!delFlag)
							break;
						if(!endFlag)
							break;
					}
					if(!endFlag)
						break;
					if(delFlag){//把第i行清空
						// for(let k = i; k > 0; k--){
						// 	self.gameData[k] = self.gameData[k - 1];
						// 	//不能直接这样设置
						// 	[].splice.call(self.gameDiv.children, width, k * width, [].slice.call(self.gameDiv.children, 0, k * width));
						// 	for(let l = 0; l < width; l++)
						// 		self.gameDiv.children[l] = self.none;
						// }
						
						//用操作dom节点方法来实现
						let row = [];
						for(let k = 0; k < width; k++){
							//删除一个节点并添加一个节点
							self.gameDiv.removeChild(self.gameDiv.children[i * width + k]);
							let div = document.createElement("div");
							div.className = self.none;
							self.gameDiv.insertBefore(div, self.gameDiv.children[0]);
							row.push(0);
						}
						self.gameData.splice(i, 1);
						self.gameData.unshift(row);
						i++;
						//更新得分
						this.score += 10;
					}
				}
				//在一定状态时，需要让current = next，且重新生成一个next
				self.currentSq = self.nextSq;
				self.nextSq = SquareFactory.create();
				self.drawData(self.gameData, self.gameDiv, self.currentSq);
				self.clear(self.nextData, self.nextDiv);
				self.drawData(self.nextData, self.nextDiv, self.nextSq);
			}
		}, 1000);
	}
}