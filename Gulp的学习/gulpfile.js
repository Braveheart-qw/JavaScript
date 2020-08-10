
/*
* gulpfile.js 任务文件只能使用ECMA规范，就是不可以出现Dom和Bom
*
* 1.使用require()将需要的模块引入
* 2.使用这个模块的函数
* */
//const gulp = require("gulp");

/*
* 编写第一个任务
* 第一个参数：任务名
* 第二个参数：回调函数，任务执行的功能
* */
// gulp.task("hello" , function(){
//     console.log("hello world");
// })

/*
* gulp.src() 找到源文件路径
* gulp.dest() 找到目的文件路径 【注意】如果设置的这个目的文件路径不存在，会自动创建
* pipe() 理解程序运行管道
* */
//如: 复制当前目录下的html文件 到 html文件夹下
// gulp.task("copy_html" , function () {
//     return gulp.src("./index.html").pipe(gulp.dest("./html"));
// })

//如：拷贝图片
// gulp.task("images" , function () {
//     //return gulp.src(需要复制的源文件).pipe(gulp.dest(目标文件夹))
//     //如果想复制多个不同后缀的文件名，可以将后缀名{}
//    // return gulp.src("img/*.{jpg,png,gif}").pipe(gulp.dest(目标文件夹));
// })

//拷贝多个文件到一个目录
// gulp.task("data" , function () {
//    // return gulp.src(["文件1" , "文件2",....]).pipe(gulp.dest("目标文件夹"));
// })

//一次性执行以上的操作
// gulp.task("bulid" ,["copt_html" , "images" , "data"] , function(){
//
// })

/*
* 以上就是gulp的基础使用，但是任务执行之后，在修改源文件，目标文件不会自动更改，这样就需要重新运行任务，效率太慢
* 因此使用监听功能，但源文件发送变化，就会自动执行对应的任务，更新目标数据
* */
// gulp.task("watch" , function () {
//     gulp.watch("源文件" , [相对应的任务列表]);
// })

//但是自动整理并不gulp最强大的功能，gulp插件才是最强大的功能
/*
*       使用第三方插件的步骤：
*       <1>先去下载插件到本地
*           window: cnpm install 插件名字 --save-dev
*           macbook: cnpm i 插件名字 -D
*
*       <2>通过require()引入文件
*       <3>查询插件的用法
*
*       插件下载：https://gulpjs.com/plugins
* */

/*
*   1.sass插件的使用
*     插件名:自动编译 gulp-sass;
*            自动编译成压缩版本 gulp-minify-css;
*            重命名:gulp-rename;
*
* */
/*const sass = require("gulp-sass");
const minifyCss = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("sass" , function(){
    return gulp.src("index.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(minifyCss())
        .pipe(rename("index.min.css"))
        .pipe(gulp.dest("css"));
})
 */

/*
*  2.处理js文件的插件
*   gulp-concat 合并文件
*   gulp-uglify 压缩.js文件
* */
// const concat =  require("gulp-concat");
// gulp.task("scripts" , function(){
//     return gulp.src("*.js")
//         .pipe(concat("index.js"))
//         .pipe(gulp.dest("js"));
// })

/*
    完整的gulp处理项目流程
* */

    //下载gulp插件,并且利用require()引入插件
const gulp = require("gulp");
    //1.将HTML文件拷贝到dest文件夹下
    gulp.task("copy_html" , function(){
        return gulp.src("*.html")
               .pipe(gulp.dest("dest/html"));
    })

    //2.将img下所有图片打包到dest/image下
    gulp.task("copy_image" , function(){
        return gulp.src("img/**/*")
            .pipe(gulp.dest("dest/image"))
    })

    //3.将js文件拷贝到dest/js下，并且在拷贝是，排除gulpfile.js
    gulp.task("copy_js" , function () {
        return gulp.src(["*.js" , "!gulpfile.js"])
            .pipe(gulp.dest("dest/js"));
    })
    //4.下载gulp-sass插件,gulp-minify-css,gulp-rename
const sass = require("gulp-sass");
    const minifyCss  = require("gulp-minify-css");
    const rename     = require("gulp-rename");
    gulp.task("sass" , function(){
        return gulp.src("index.scss")
                .pipe(sass())
                .pipe(gulp.dest("dest/css"))
                .pipe(minifyCss())
                .pipe(rename("index.min.css"))
                .pipe(gulp.dest("dest/css"));
    })


//5.监听
    gulp.task("watch" , function () {
        gulp.watch("index.scss" , ["sass"]);
        gulp.watch("*.html",["copy_html"]);
        gulp.watch("img/**/*" , ["copy_image"]);
        gulp.watch(["*.js" , "!gulpfile.js"] , ["copy_js"]);
    })






