//从父节点删除空白子节点
function deleteParentSpaceElement(parent){
    //1.得到父节点的子节点
    var ChildNode = parent.childNodes;
    //2.遍历对象数组
    for (var i in ChildNode){
        //1.判断每个元素是否满足空白节点的要求
        if (ChildNode[i].nodeType == 3 && /^\s+$/.test(ChildNode[i].nodeValue))
            parent.removeChild(ChildNode[i]);
    }
}