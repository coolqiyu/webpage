var SquareFactory = {
	create: function(){
		var type = Math.floor(Math.random() * 7) + 1;
		switch(type){
			case 1:
				return new Square1();
			case 2:
				return new Square2();
			case 3:
				return new Square3();
			case 4:
				return new Square4();
			case 5:
				return new Square5();
			case 6:
				return new Square6();
			case 7:
				return new Square7();
		}
	}
}