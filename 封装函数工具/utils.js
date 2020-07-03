
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

//删除空白节点元素      (从子节点删除)  这个封装函数只是返回了满足条件的节点数组，并没有从父节点上删除
function deleteSpaceNode(elem){
    var result = [];
    for(var i = elem.length-1 ; i>=0 ; i--){
        if(!/^\s+$/.test(elem[i].nodeValue)){
            result.push(elem[i]);
        }
    }
    return result;
}

//删除空白节点元素  (从父节点彻底删除) 利用父节点的属性removeChild()来删除不需要的子节点;
function deleteParentSpaceNode(parent){
    var childNode = parent.childNodes;
    for (var i = childNode.length-1 ; i >= 0 ; i--){
        if(childNode[i].nodeType == 3 && /^\s+$/.test(childNode[i].nodeValue)){
            parent.removeChild(childNode[i]);
        }
    }
}

//创建一个完整得节点(元素节点+文本节点)
function addNode(node , text){
    //1.创建一个新节点
    var newNode = document.createElement(node);
    //2.创建一个文本节点
    var textNode = document.createTextNode(text);
    //3.将文本节点添加到元素节点当中
    newNode.appendChild(textNode);
    //4.返回创建得新节点
    return newNode;
}

//在某一个节点得后面插入新节点
function insertAfter(newNode , oldNode){
    //1.得到当前节点的父节点
    var parent = oldNode.parentNode;
    //2.删除父节点的空白节点
    deleteParentSpaceNode(parent);
    /*3.判断当前节点是否为最后一个节点
    *   true: appendChild();
    *    false: oldNode.nextSibing;
    */
    if(parent.lastChild == oldNode){
        parent.appendChild(newNode);
    }else{
        parent.insertBefore(newNode , oldNode.nextSibling);
    }
    return newNode;
}


