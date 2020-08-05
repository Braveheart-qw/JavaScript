const async = require("async");

//串行无关联
// var task1 = function(callback){
//     setTimeout(function () {
//         console.log("1");
//         callback(null , "task1")
//     },1000)
//
// }
// var task2 = function(callback){
//     setTimeout(function () {
//         console.log("2");
//         callback(null , "task1")
//     },1000)
//
// }
// var task3 = function(callback){
//     setTimeout(function () {
//         console.log("3");
//         callback(null , "task1")
//     },5000)
//
// }


// async.series([task1,task2,task3] , function (err , result) {
//     console.log(err);           //没有发生错误err 为null
//     console.log(result);        //返回成功执行的任务函数列表
// })

//并行无关联
// async.parallel([task1,task2,task3] , function (err , result){
//     console.log(err);
//     console.log(result);
// })

//串行有关联（可以带参数），最后一个函数的参数列表需要以数组的形式
var task1 = function(callback){
    setTimeout(function () {
        console.log("1");
        callback(null , "task1")
    },1000)

}
var task2 = function(arr1, callback ){
    setTimeout(function () {
        console.log("2");
        callback(null , arr1 ,"task2")
    },1000)

}
var task3 = function(arr1 ,arr2,callback){
    setTimeout(function () {
        console.log("3");
        callback(null ,[arr1 , arr2 ,"task3"])
    },5000)
}
async.waterfall([task1,task2,task3] , function (err , result) {
    // console.log(err);           //没有发生错误err 为null
     console.log(result);        //返回成功执行的任务函数列表
})