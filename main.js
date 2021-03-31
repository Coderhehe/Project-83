mousevent=("empty");
var lastx,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e) {
    linewidth=document.getElementById("widthline").value;
    color=document.getElementById("colorr").value;
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

    if (mousevent=="mousedown") {
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
var lasttx,lastty;
swidth = screen.width - 70;
    sheight = screen.height - 300;

    
    if (width < 992) {
    document.getElementById("myCanvas").width=swidth;
    document.getElementById("myCanvas").height=sheight;

    document.body.style.overflow="hidden";
    
    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
       console.log("touchstart");
       lasttx = e.touches[0].clientX - canvas.offsetLeft;
       lastty = e.touches[0].clientY - canvas.offsetTop;
        
    }
canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e)
{

    console.log("touchmove");

  

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;


        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lasttx + "y = " + lastty);
        ctx.moveTo(lasttx, lastty);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();


        lasttx = currentx; 
        lastty = currenty;
   
    }
