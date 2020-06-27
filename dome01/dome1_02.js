window.onload = function () {
   var temp = null;
   var array = [9 , 6 , 7 , 15 , 8 , 3];

      for(var i = 0;i < array.length-1 ; i++)
         for(var j = i+1 ; j<=array.length; j++)
            if(array[i] > array[j]){
               array[i] = array[i] + array[j];
               array[j] = array[i] - array[j];
               array[i] = array[i] - array[j];
            }

      alert(array);
}


