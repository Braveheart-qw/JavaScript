window.onload = function() {
    //小练习，显示系统日期
    var d = new Date();
    var year = d.getFullYear();//获取完整得年份 如：2020  getYear是获取两位数得年份 如 20
    var month = d.getMonth() + 1;
    var day = d.getDate();

    var week = d.getDay();
    if (week == 0)
        week = "日";

    var hours = d.getHours();
    var min = d.getMinutes();
    var ss = d.getSeconds();
    console.log("格式化系统时间"+year + "年" + month + "月" + day + "日 星期" +week
                +"  "+hours+":"+min+":"+ss
            );

    //小练习，获取时间戳
    var date =  new Date();
    console.log("时间戳:"+date.getTime());

    //小练习，计算n天后，同理n年后，n月后
    var date1 = new Date();
    var day = date1.getDate();
    console.log(day+30);

}