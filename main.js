var box = document.getElementById('box');
var container = document.getElementById('container');
var maxh = container.offsetHeight-70;
var maxw = container.offsetWidth-70;
function getRandomInRange(from, to, fixed,min,max) {
    var a = (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    if(a>min && a<max){
        return a;
    }else{
        return getRandomInRange(from,to,fixed,min,max);
    }
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}
var curl=0;
var curh=0;
box.addEventListener('mouseenter',function(){
    var supl = getRandomInRange(curl,maxw,2,51,maxw);
    var suph = getRandomInRange(curh,maxh,2,51,maxh);
    box.style.left=supl+"px";
    box.style.top = suph +"px";
});