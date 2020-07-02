
//解决获取当前样式的兼容问题(IE是使用 元素节点.currentStyle，火狐/谷歌/safari 使用getComputedStyle)
function getStyle(elem , attr){
        return elem.currentStyle ? elem.currentStyle(attr) : getComputedStyle(elem)[attr];
}

//解决四大获取元素节点的冗余性类似jquery
function $(str){
    var start = str.substring(0,1);

    switch (start) {
        case "#" :
                return document.getElementById(str.substring(1));
                break;

        case "." :
               // return document.getElementsByClassName(str.substring(1));   //低版本的ie不支持
                return ByClassName(str.substring(1));
                break;

        default:
                var str1 = str.substring(0,5);
                if (str1 == "name="){
                    return document.getElementsByName(str.substring(5));
                }else{
                    return document.getElementsByTagName(str);
                }

    }

}
function  ByClassName(classstr) {
    var node = document.getElementsByTagName("*");
    var result = [];

    for(var i in node){
        if (node[i].className == classstr)
            result.push(node[i]);
    }
    return result;

}
