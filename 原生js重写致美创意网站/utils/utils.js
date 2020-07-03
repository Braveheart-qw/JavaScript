//封装的创建节点函数，可以创建元素节点和文本节点
function creatFullNode(element , text){
    var newNode = document.createElement(element);
    var textNode = document.createTextNode(text);
    newNode.appendChild(textNode);
    return newNode;
}

//将获取元素节点对象的四种方法封装成一个函数
function $(str){
    var start = str.substring(0 , 1);
    switch(start){
        case "#":return document.getElementById(str.substring(1));
                break;

        case ".":return document.getElementsByClassName(str.substring(1));
                break;

        default:
            var len = str.indexOf("=" , 0);
            if( len != -1){
                return document.getElementsByName(str.substring(5));
            }else{
                return document.getElementsByTagName(str);
            }
    }

}