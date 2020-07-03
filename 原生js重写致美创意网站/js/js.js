window.onload = function (){
    //首先要创建一个body元素节点对象
    var body = document.getElementsByTagName("body")[0];

    //1.创建头节点
    var headerNode = document.createElement("header");

    //1.1创建头节点下的a节点
    var header_a = document.createElement("a");
    header_a.setAttribute("href","#");
    header_a.setAttribute("id" , "sa");

    //1.2创建头节点下的ul节点
    var header_ul = document.createElement("ul");

    //1.2.1创建ul节点下的li节点
    var li = [
              document.createElement("li"),
              document.createElement("li"),
              document.createElement("li"),
              document.createElement("li"),
              document.createElement("li"),
              document.createElement("li")
            ];

    //1.2.1.1创建li节点下的a节点
    var li_a =[
                 creatFullNode("a" , "首页"),
                 creatFullNode("a" , "成功案例"),
                 creatFullNode("a" , "会员注册"),
                 creatFullNode("a" , "会员注册"),
                 creatFullNode("a" , "会员注册"),
                 creatFullNode("a" , "会员注册")
                ];

    for (var i of li_a){
        i.setAttribute("href" , "#");
    }

    //1.3 将1.2.1.1 加入到 1.2.1
    for (var i in li_a){
        li[i].appendChild(li_a[i]);
    }

    //在1.1下加入六次1.3
    for (var i in li)
    header_ul.appendChild(li[i]);

    //将1.1 加入到headerNode
    headerNode.appendChild(header_a);

    //将1.2 加入到headerNode
    headerNode.appendChild(header_ul);

    //将header节点加入到body节点
    body.appendChild(headerNode);

//封装一个获取元素对象的函数$
    //2.1 创建div1节点
    var ad = document.createElement("div");
    ad.setAttribute("id" , "ad");

    //2.1.1创建div1下的div节点
    var img_box = document.createElement("div");
    img_box.setAttribute("class" , "img_box");

    //2.1.1.1创建div1下的div节点下的img标签
     var img_p1 = document.createElement("img");
     var img_p2 = document.createElement("img");
     img_p1.setAttribute("id","p1");
     img_p1.setAttribute("src","image/致美AD.jpg");
     img_p2.setAttribute("id","p2");
     img_p2.setAttribute("src","image/致美AD2.jpg");

     img_box.appendChild(img_p1);
     img_box.appendChild(img_p2);

     ad.appendChild(img_box);

     //2.2创建div2节点
     var  btn_box = document.createElement("div");
     var  a1 = creatFullNode("a","<");
     var  a2 = creatFullNode("a","<");
     a1.setAttribute("href" , "#p1");
     a2.setAttribute("href" , "#p2");
     btn_box.appendChild(a1);
     btn_box.appendChild(a2);

     ad.appendChild(btn_box);

     //将ad节点加入body节点
     body.appendChild(ad);



    //样式
    var header_css = ($("header")[0]).style;
    header_css.width = "1040px";
    header_css.minWidth = "1040px";
    header_css.height = "120px";
    header_css.margin = "0 auto";
    header_css.background = "url('./image/link05.png') no-repeat";
    header_css.position = "relative";
}