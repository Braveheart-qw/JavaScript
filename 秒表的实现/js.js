window.onload = function(){
    var timer = null;
    var hh = 0;
    var mm = 0;
    var ss = 0;
    var hm = 0;

    var start = document.getElementById("start");
    var yp = document.getElementById("yp");

    start.onclick = function(){
        var sum = 0;
        timer = setInterval(function(){
                hm++;
            if (hm > 9){
                hm = 0;
                ss++;
            }
            if (ss > 59){
                ss = 0;
                mm++;
            }

            yp.innerHTML = hh+":"+mm+":"+ss+" "+hm;
        },100)
    }

    function sp(){
        clearInterval(timer);

    }

}