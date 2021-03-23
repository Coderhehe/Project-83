canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mousevent=("");
currentx=("");
currenty=("");
lastx=("");
lasty=("");
color=document.getElementById("color")
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e) {
    var linewidth=document.getElementById("widthline");
    mousevent="mousedown";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e) {
    mousevent="mouseup";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e) {
    mousevent="mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e) {
    currentx=e.clientX - canvas.offsetLeft; 
    currenty=e.clientY - canvas.offsetTop; 

    if (mouseevent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth= linewidth;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke(); 
    }
    lastx=currentx;
    lasty=currenty;
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e) {
    currentx=e.clientX - canvas.offsetLeft; 
    currenty=e.clientY - canvas.offsetTop; 

    
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth= linewidth;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke(); 
    
    lastx=currentx;
    lasty=currenty;
}
