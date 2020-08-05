//利用第三方模块 mysql
const mysql = require("mysql");

//1.配置mysql信息
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password:'admin',
        database:'student'
    });
    //2.连接
        connection.connect();

    //3.crud
    //为了方便测试我们将crud方法进行封装
    function crud(sql , arr){
        if(arr != null){
        connection.query(sql ,arr, function (err , result) {
            console.log(result);
        })
        }
        else {
            connection.query(sql, function (err, result) {
                console.log(result);
            })
        }
        //4.关闭数据库连接
        connection.end();
    }
    crud("select * from user where name='qian'" ,null);
