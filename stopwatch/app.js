var milsec = 0;
var sec = 0;
var min = 0;
var hou = 0;

var interval;
function clertime(){
milsec++;
if(milsec / 100 == 1){
    milsec = 0;
    sec++;
    if(sec / 60 == 1){
        sec = 0;
        min++;
    }
    if(min / 60 == 1){
        min = 0;
        hou++;

    }
}
document.getElementById('time').innerHTML=(hou < 10 ? + '0' : '') + hou  + ":" + (min < 10 ? + '0' : '') + min  + ":" + (sec < 10 ? + '0' : '') + sec  + ":" + (milsec < 10 ? + '0' : '') + milsec;
}

function start(){
    interval = setInterval(clertime, 10);
    document.getElementById('start').disabled = true;
}

function stop(){
    clearInterval(interval);
    document.getElementById('start').disabled = false;

}

function reset(){
    clearInterval(interval)
     milsec = 0;
     sec = 0;
     min = 0;
     hou = 0;
     document.getElementById("time").innerText= "  00:00:00:00  "
       
}