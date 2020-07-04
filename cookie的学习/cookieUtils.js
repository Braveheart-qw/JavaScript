//设置cookie值
function setCookie(name , value , expire){
    var date = new Date();
    var expires = new Date(date.setDate(date.getDate()+expire));
    document.cookie = name.trim() + "=" + value +"; expires="+expires;
}

//获取cookie值
function getCookie(name){

    var cookie = document.cookie.split(";");
    var result = [];
    for (var i in cookie){
        result.push(cookie[i].split("="));

        if (result[i][0].trim() == name) {
            return result[i][1];
        }
    }
}

//修改cookie值
function updateCookie(name , value){
    document.cookie = name.trim()+"="+value.trim();
}

//删除cookie值     (有效时长设为负时间)
function deleteCookie(name){
    var value = getCookie(name.trim());
    setCookie(name , value ,-1);

}