var file_size = 127,
    start = performance.now(),
    end = 0,
    time = 0,
    xmlhttp = new XMLHttpRequest(),
    result = 0;

    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
           end = performance.now();
           time =  (end - start)/1000;
           result = (file_size/time/1000*8).toFixed(2);
           $("#results").html(result+' MBit/s');
        }
    }    
    xmlhttp.open('GET', 'https://codepen.io/infomiho/pen/CuGJI.html', true);
    xmlhttp.send();