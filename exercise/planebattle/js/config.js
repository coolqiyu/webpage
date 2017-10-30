/**
 * 游戏相关配置
 */
var CONFIG = {
	planeSize: {
		width: 60,
		height: 45
	},
	planeType: 'bluePlaneIcon',
	bulletSize: {
		width: 20,
		height: 20
	},
	enemySpeed: 4, //默认敌人移动距离
	enemyMaxNum: 5, //敌人最大数量
	enemySmallSize: { //小飞机
		width: 54,
		height: 40
	},
	enemyBigSize:{
		width: 130,
		height: 100
	},
	bulletSpeed: 10, //子弹移动速度
	endHeader:[//根据不同的分数来给玩家提示
		{	score: 10,
			text: "有点遗憾"
		},
		{	score: 50,
			text: "继续努力"
		},
		{	score: 150,
			text: "真不错"
		},
		{	score: 500,
			text: "超神，有木有！"
		},
	],
	resources:{
		images:[
			{	src: '../img/plane_1.png',
				name: 'bluePlaneIcon'
			},
			{	src: '../img/plane_2.png',
				name: 'pinkPlaneIcon'
			},
			{	src: '../img/fire.png',
				name: 'fireIcon'
			},
			{	src: '../img/enemy_big.png',
				name: 'enemyBigIcon'
			},
			{	src: '../img/enemy_small.png',
				name: 'enemySmallIcon'
			},
			{	src: '../img/boom_big.png',
				name: 'enemyBigBoomIcon'
			},
			{   src: '../img/boom_small.png',
				name: 'enemySmallBoomIcon'
			},
		],
		sounds:[
			{   src: '../sound/music.mp3',
				name: 'music'
			},
			{   src: '../sound/boom.mp3',
				name: 'boom'
			},
			{   src: '../sound/biubiubiu.mp3',
				name: 'biu'
			},
			{   src: '../sound/die.mp3',
				name: 'die'
			},
			{   src: '../sound/button.mp3',
				name: 'button'
			},
		]
	}

}