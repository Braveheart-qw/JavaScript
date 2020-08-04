const http = require("http");
const url  = require("url");
const querystrin = require("querystring")
const service = require('./service/service');
http.createServer(function (req , resp) {
    var str = '';
    req.on('data' , (data)=>{
        str += data;
    })

    req.on('end' , (err) =>{
        console.log(querystrin.parse(str));
    })
    //return;
    var pathname = url.parse(req.url).pathname.replace(/\// , '');
    switch(pathname){
        case 'login':service.login(req , resp);break;
        case 'register':service.login(req , resp);break;
        case 'img' : service.img(req , resp);break;
        default : service.home(req , resp);

    }

}).listen(8000);
console.log("已经启动....");
