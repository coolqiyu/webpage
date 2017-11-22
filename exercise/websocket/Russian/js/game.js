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
	this.current = {
		square: new Square(), 
		startX: 0,
		startY: 0
	} 
	this.next = new Square();
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
		this.empty(this.gameData, this.gameDiv);
		this.empty(this.nextData, this.nextDiv);
	},
	empty: function(data, dataDiv){
		var height = data.length;
		if(!height) return;
		var width = data[0].length;
		for(let i = 0; i < height; i++)
			for(let j = 0; j < width; j++){
				data[i][j] = 0;
				dataDiv.children[i * width + j].className = this.none;
			}
	},
	setCurrent: function(data){
		this.empty(this.gameData, this.gameDiv);

	},
	setNext: function(data){

	}
}