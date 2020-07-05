
    //获取class=img_ul的元素节点
    var img_ul = document.getElementsByClassName("img_ul")[0];
    //删除空白元素节点
    deleteParentSpaceElement(img_ul);
    //获取li节点;
    var li = img_ul.childNodes;
    var img = document.getElementsByTagName("img");





    //向前滚动
    function pre(){
        var currentNumber = getOpacity();
        gotoPre(currentNumber);
    }

    //向后滚动
    function next(){
        var currentNumber = getOpacity();
        gotoNext(currentNumber);
    }

    //获取当前透明度为1的值
    function getOpacity(){
        for (var i in img) {
            if (getStyle(img[i],"opacity") == 1)
            {
                return i;

            }
        }
        return null;
    }

    //封装的向前透明度转换函数
    function gotoPre(currentNumber){
        var s = null;
           if (currentNumber == 0)
               s = li.length;
            else
               s = currentNumber;

           //将当前透明度为1的设置成0
           animate(img[currentNumber] , "opacity" , 0);
           animate(img[s-1] , "opacity" , 100);

    }

    //封装的向后透明度转换函数
    function gotoNext(currentNumber){
        var s = null;
        if (currentNumber == li.length-1)
            s = -1;
        else
            s = currentNumber;

        //将当前透明度为1的设置成0
        animate(img[currentNumber] , "opacity" , 0);
        animate(img[parseInt(s)+1] , "opacity" , 100);
    }

    //为button添加单击事件DOM02级事件
    var button = document.getElementsByTagName("button");
    button[0].addEventListener("click" , pre);
    button[1].addEventListener("click" , next);

    //自动轮播
    setInterval(function(){
        next();
    },5000);







    //获取当前有效样式
    function getStyle(element , property){

        var current= null;
        current = getComputedStyle ? getComputedStyle(element)[property] : element.currentStyle[property];

        return  current;
    }
    //封装的动画 某一个元素的某一个属性需要达到什么样的目的
    function animate(element , property ,target){
      clearInterval(element.timerId);

        //利用定时器
        element.timerId = setInterval(function () {
            var currentValue;

            if (property == "opacity"){

                currentValue = Math.round(parseFloat(getStyle(element, property))*100);

            }else {
               currentValue = parseInt(getStyle(element , property));
            }

                //达到减速效果
                //每一次的currentValue都在改变
                var speed = (target - currentValue) / 30;            //核心要想达到减速效果，就需要所加的值越来越小
                speed = speed > 0 ?Math.ceil(speed) : Math.floor(speed);

                if (property === "opacity")
                    element.style[property] = String((currentValue+speed)/100);
                  else
                    element.style[property] = currentValue + speed + "px";

        },20);
    }



