var SquareFactory = {
	create: function(type, dir){
		//var type = Math.floor(Math.random() * 7) + 1;
		var square;
		switch(type){
			case 1:
				square = new Square1();
				break;
			case 2:
				square = new Square2();
				break;
			case 3:
				square = new Square3();
				break;
			case 4:
				square = new Square4();
				break;
			case 5:
				square = new Square5();
				break;
			case 6:
				square = new Square6();
				break;
			case 7:
				square = new Square7();
				break;
		}
		//var toRotate = Math.floor(Math.random() * 4);
		for(var i = 0; i < dir; i++)
			square.rotate();
		return square;
	}
}

/**
 * var squareFactory = function(){};
 * squareFactory.prototype.create = function(){}
 */