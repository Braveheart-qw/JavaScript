window.onload = function () {

    var array = [10,20,30,40,50];

    function sum(i){
        if (i == 0){
            return array[i];
        }else{
            return sum(i-1)+array[i];
        }
    }

   alert( sum(array.length-1));

}


