var my = ['名言1','名言2','名言3'];
function mingYan(){
    document.getElementById('mingyan').innerHTML = my[parseInt(Math.random()*10)%my.length];
}
