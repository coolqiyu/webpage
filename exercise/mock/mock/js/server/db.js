/**
数据库交互相关
*/
var mysql = require('mysql');
var help = require("../common/help");
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'mysql',
	database: 'mock_db'
});
connection.connect();

//另一种sql模板的写法，但是觉得这个参数是不定的，所以还是用上面的先试=======
// var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
// var modSqlParams = ['菜鸟移动站', 'https://m.runoob.com',6];
// //改
// connection.query(modSql,modSqlParams,function (err, result)
//==============
var result;//数据库的查询结果
var DB = {
	user: "username, password, token",
	test: "test, test2", 
	interface: "func_name, method, path, project, status, keep_step, step_count, description, create_user, modify_user",
	step: "interface, request_header, request_body, response_code, response_header, response_body, create_user, modify_user",
	project: "name, real_host, description, create_user, modify_user",
	flow: "host, interface, step",
	usecase: "name, description, object, create_user, modify_user, project"
}
exports.insert = function(table, values, cnt, callback){
	//var insertSql = `insert into ${table} (` + "test, test2" + ") values (" + "'a', 'b')"; 
	var columns = DB[table];
	var insertSql = `insert into ${table} (${columns}) values`;
	if(cnt === 1)
		insertSql += `(${values})`;
	else{
		for(var i = 0; i < cnt; i++){
			insertSql += `(${values[i]}),`;
		}
		insertSql = insertSql.slice(0, -1);
	}
	execute(insertSql, (result)=>{
		callback(result && result.insertId);//把插入字段的id值返回
	});	
	/**
	插入成功后的返回值
	OkPacket { 
		fieldCount: 0,
		affectedRows: 1, 
		insertId: 5, 
		serverStatus: 2, 
		warningCount: 0, 
		message: '',
  		protocol41: true,
  		changedRows: 0 
  	}
  	未成功：undefined
  	*/
}

exports.select = function(table, columns, condition, callback){
	if(!columns){
		columns = "*";
	}
	var selectSql = `select ${columns} from ${table}`;
	if(!!condition)
		selectSql = selectSql + ` where ${condition}`;
	execute(selectSql, (result)=>{
		callback(result);
	});
	/**插入成功返回数组
[ RowDataPacket {
    id: 1,
    username: 'admin',
    password: 'admin',
    createTime: 2017-10-24T08:06:16.000Z,
    updateTime: 2017-10-24T08:06:16.000Z,
    token: null },
  RowDataPacket {
    id: 2,
    username: '1',
    password: '1',
    createTime: 2017-11-01T01:42:57.000Z,
    updateTime: 2017-11-01T01:42:57.000Z,
    token: null },
 ]
	*/
}

exports.update = function(table, set, condition, callback){
	var updateSql = `update ${table} set ${set}`;
	if(!!condition)
		updateSql += ` where ${condition}`;
	execute(updateSql, (result)=>{
		callback(result);
	});
}

exports.delete = function(table, condition, callback){
	var deleteSql = `delete from ${table}`;
	if(!!condition)
		deleteSql += ` where ${condition}`;
	execute(deleteSql, (result)=>{
		callback(result);
	});
}


function execute(sql, callback){
	help.log("sql:", sql);
	connection.query(sql, function(err, result){
		//sql执行完成后，把执行的结果通过回调函数返回
		help.log("execute result: ", result);
		callback(result);
	});
}

/*test*/
// exports.insert('test', "1, 2", (result)=>{
// 	help.log("insert: ", result);
// });
// exports.select('step', "", "id=41", (result)=>{
// 	help.log("select: ", result);
// });