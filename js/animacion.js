
var micanvas=document.getElementById("micanvas");
ctx=micanvas.getContext("2d");
var img=new Array();
img[0]=document.getElementById("p1");
img[1]=document.getElementById("p2");
img[2]=document.getElementById("p3");
img[3]=document.getElementById("p4");
img[4]=document.getElementById("p5");
img[5]=document.getElementById("p6");
var i=0;
var x=0;

var terreno=document.getElementById("terreno");
function caminar(){

if(i<img.length){
ctx.clearRect(0,0,500,500);
ctx.drawImage(terreno,0-x,0);
ctx.drawImage(img[i],200,50);
i+=1;
x+=10;
if(x>780){x=0}
if(i==6){i=0}

}

}

//caminar();
setInterval(caminar,230);
