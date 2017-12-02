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
	
	this.score = 0;//分数
	this.startTime = 0;//用时
	this.status = -1;//游戏状态，-1未准备，0准备，1开始，2进行中，3结束
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
	 * 根据type和dir在target上创建一个sq
	 * @param  number type   
	 * @param  number dir    
	 * @param  number target 0为current,1为next
	 */
	createSq: function(type, dir, target){
		//当前和next的图形，需要这两个吗？
		//直接修改gameData和nextData不就好了吗？
		//这两个什么时候出来会比较好呢？
		//一开始就出来，游戏开始时出来，两个好像差不多，那就一开始就出来吧
		var sq =  SquareFactory.create(type, dir);
		if(target === 0){
			this.currentSq = sq;
			this.resetOrigin(0);
		}
		else{
			this.nextSq = sq;
			this.resetOrigin(1);
		}		
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
	 * 把当前的gameData和nextData刷新绘制到相应区域
	 * @param  数组嵌套的格式 div 要清空的div
	 */
	refresh: function(target){
		if(target === 0){
			this.setData(this.gameData, this.currentSq.origin, this.currentSq.data);
			this.drawData(this.gameData, this.gameDiv);
		}
		else{
			this.setData(this.nextData, this.nextSq.origin, this.nextSq.data);
			this.drawData(this.nextData, this.nextDiv);			
		}
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
		this.clearData(this.gameData, this.currentSq.origin, this.currentSq.data);
		//this.drawData(this.gameData, this.gameDiv);
		// this.clear(this.gameData, this.gameDiv, this.currentSq);
		//根据方向移动方块
		//如果清空后再移动，但是并没有移动，那在视觉上是不是会有问题？
		//比如会有一瞬间空白？？
		//结果，暂时没有发现问题		
		isMove = this.currentSq.move(direction, this.gameData);
		this.refresh(0);
		// this.setData(this.gameData, this.currentSq.origin, this.currentSq.data);
		// //在画布中绘制
		// this.drawData(this.gameData, this.gameDiv);
					
		console.log("move: ", isMove);
		if(!isMove)
			this.status = 3;
		return isMove;		
	},
	rotate: function(){
		//this.clear(this.gameData, this.gameDiv, this.currentSq);
		this.clearData(this.gameData, this.currentSq.origin, this.currentSq.data);
		//this.drawData(this.gameData, this.gameDiv);
		this.currentSq.rotate(this.gameData);		
		this.refresh(0);
		// this.setData(this.gameData, this.currentSq.origin, this.currentSq.data);
		// this.drawData(this.gameData, this.gameDiv, this.currentSq);		
	},
	/**
	 * 将square的样式放到div中(从pos开始)，且设置data
	 * @param 数组嵌套 data   [description]
	 * @param dom-div div    [description]
	 * @param 方块样式 square [description]
	 */
	// drawData: function(data, div, square){
	// 	var sqHeight = square.data.length;
	// 	var sqWidth = square.data[0].length;
	// 	for(let i = 0; i < sqHeight; i++)
	// 		for(let j = 0; j < sqWidth; j++){				
	// 			let index = (square.origin.y + i) * data[0].length + square.origin.x + j; 
	// 			switch(square.data[i][j]){
	// 				//当值为0时不用修改，只要保持原来的数据即可
	// 				// case 0:
	// 				// 	div.children[index].className = this.none;
	// 				// 	break;
	// 				case 1:
	// 					data[square.origin.y + i][square.origin.x + j] = square.data[i][j];
	// 					div.children[index].className = this.current;
	// 					break;
	// 				// case 2:
	// 				// 	div.children[index].className = this.done;
	// 				// 	break;
	// 			}
	// 		}
	// },
	clearData: function(data, origin, square){
		if(!square)
			return;
		var sqHeight = square.length;
		var sqWidth = square[0].length;
		for(var i = 0; i < sqHeight; i++)
			for(var j = 0; j < sqWidth; j++){
				if(square[i][j] && (origin.y + i) >= 0)
					data[origin.y + i][origin.x + j] = 0;
			}
	},
	/**
	 * 将square数据设置data中，从origin位置开始
	 * @param [[],[]] data   
	 * @param {x:0, y:0} origin 
	 * @param [[],[]] square 
	 */
	setData: function(data, origin, square){
		var sqHeight = square.length;
		var sqWidth = square[0].length;
		for(var i = 0; i < sqHeight; i++)
			for(var j = 0; j < sqWidth; j++){
				if(square[i][j] && (origin.y + i >= 0))
					data[origin.y + i][origin.x + j] = square[i][j];
			}
	},
	/**
	 * 根据data来设置div.children中的数据
	 * @param  [[],[]] data 
	 * @param  obj div  div对象
	 */
	drawData: function(data, div){
		var height = data.length;
		var width = data[0].length;
		for(var i = 0; i < height; i++)
			for(var j = 0; j < width; j++){
				switch(data[i][j]){
					case 0:
						div.children[i * width + j].className = this.none;
						break;
					case 1:
						div.children[i * width + j].className = this.current;
						break;
					case 2:
						div.children[i * width + j].className = this.done;
						break;
				}
				
			}
	},

	/**
	 * 把当前方块(已经不能移动)的位置改成done的样式
	 */
	fixed: function(){
		var sqHeight = this.currentSq.data.length;
		var sqWidth = this.currentSq.data[0].length;
		for(var i = 0; i < sqHeight; i++)
			for(var j = 0; j < sqWidth; j++)
				if(this.currentSq.data[i][j])
					this.currentSq.data[i][j] = 2;
		this.refresh(0);
		// this.setData(this.gameData, this.currentSq.origin, this.currentSq.data);
		// this.drawData(this.gameData, this.gameDiv);
	},
	
	/**
	 * 随机生成几行
	 * @param {[type]} lineCnt [description]
	 */
	randLines: function(lineCnt){
		var height = this.gameData.length;
		var width = this.gameData[0].length;
		var lines = [];
		for(var i = 0; i < lineCnt; i++){
			var line = [];
			for(var j = 0; j < width; j++)
				line.push(Math.floor(Math.random() * 2) ? 2 : 0);
			lines.push(line);
		}
		//this.addLines(lines);
		return lines;
	},
	/**
	 * 为了增加干扰元素，可以给游戏区域底部添加几行随机数
	 */
	addLines: function(lines){
		var height = this.gameData.length;
		var width = this.gameData[0].length;
		var lineCnt = lines.length;
		for(var i = 0; i < lineCnt; i++){
			this.gameData.shift();
			this.gameData.push(lines[i]);
		}
		//对currentSq的位置也要做相应的移动
		this.currentSq.origin.y -= lineCnt;
		this.drawData(this.gameData, this.gameDiv);
		// this.setData(this.gameData, {x: 0, y: height - 1}, lines);
	},
	/**
	 * 从最下向上判断每一行，如果一行满了，那就下移删除
	 * @return {[type]} [description]
	 */
	clearLine: function(){
		// 方式一
		// var height = self.gameData.length;
		// var width = self.gameData[0].length;
		// for(let i = height - 1; i >= 0; i--){
		// 	let delFlag = 1, endFlag = 0;
		// 	for(let j = 0; j < width; j++){
		// 		delFlag &= self.gameData[i][j];//1则删除
		// 		endFlag |= self.gameData[i][j];//0则结束
		// 		if(!delFlag)
		// 			break;
		// 		if(!endFlag)
		// 			break;
		// 	}
		// 	if(!endFlag)
		// 		break;
		// 	if(delFlag){//把第i行清空
		// 		// for(let k = i; k > 0; k--){
		// 		// 	self.gameData[k] = self.gameData[k - 1];
		// 		// 	//不能直接这样设置
		// 		// 	[].splice.call(self.gameDiv.children, width, k * width, [].slice.call(self.gameDiv.children, 0, k * width));
		// 		// 	for(let l = 0; l < width; l++)
		// 		// 		self.gameDiv.children[l] = self.none;
		// 		// }
				
		// 		//用操作dom节点方法来实现
		// 		let row = [];
		// 		for(let k = 0; k < width; k++){
		// 			//删除一个节点并添加一个节点
		// 			self.gameDiv.removeChild(self.gameDiv.children[i * width + k]);
		// 			let div = document.createElement("div");
		// 			div.className = self.none;
		// 			self.gameDiv.insertBefore(div, self.gameDiv.children[0]);
		// 			row.push(0);
		// 		}
		// 		self.gameData.splice(i, 1);
		// 		self.gameData.unshift(row);
		// 		i++;
		// 		//更新得分
		// 		this.score += 10;
		// 	}
		// }
		// 方式二
		var lineCnt = 0;
		var height = this.gameData.length;
		var width = this.gameData[0].length;
		for(var i = height - 1; i >= 0; i--){
			var sum = 0;
			for(var j = 0; j < width; j++){
				sum += this.gameData[i][j];
			}
			//这一行全部为0，不用再向上比较了
			if(sum === 0)
				break;
			//这一行都是2，可以清除
			else if(sum === 2 * width){
				this.score += 10;
				lineCnt ++;
				for(var k = i; k > 0; k--)
					for(var w = 0; w < width; w++)
						this.gameData[k][w] = this.gameData[k - 1][w];
					
				for(var k = 0; k < width; k++)
					this.gameData[0][k] = 0;
				this.drawData(this.gameData, this.gameDiv);
				i++;
			}
		}	
		return lineCnt;
	},
	/**
	 * //当current不能动了，需要让current = next，且重新生成一个next
	 * @return {[type]} [description]
	 */
	performNext: function(type, dir){
		this.clearData(this.nextData, this.nextSq.origin, this.nextSq.data);
		this.currentSq = this.nextSq;
		this.nextSq = SquareFactory.create(type, dir);
		
		this.resetOrigin(0);
		this.refresh(0);	
		this.resetOrigin(1);	
		this.refresh(1);		
	},
	/**
	* 重新设置sq的起始位置
	*/
	resetOrigin: function(target){
		if(target === 0 && this.currentSq){
			this.currentSq.origin.x = Math.floor((this.gameData[0].length - this.currentSq.data[0].length) / 2);
			this.currentSq.origin.y = 0;
		}
		else if(target === 1 && this.nextSq){
			this.nextSq.origin.x = Math.floor((this.nextData[0].length - this.nextSq.data[0].length) / 2);
			this.nextSq.origin.y = Math.floor((this.nextData.length - this.nextSq.data.length) / 2);						
		}
	},
	/**
	 * 把游戏流程的控制放到local中，game只提供功能
	 */	
	end: function(){
		alert("游戏结束");
	}
}

/**
 * 修改一下
 * 1. 原来有两个函数
 * - clear: function(data, div, square)根据square的位置清空data中的数据，同时设置div数据
 * - drawData: function(data, div, square)根据square的值来设置data中的值，同时设置div数据
 * 2. 现在：
 * - 把data设置与div设置分开
 * - move的时候就是要先清空再画一下的
 *
 * 3. 增加干扰功能
 * - 当自己得分时，就给对手增加一行
 */