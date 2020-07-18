
//  DECLARAR VARIABLES Y OBTENER VALORES DEL DOM

var btn = document.getElementById("btn"); 
btn.addEventListener("click", obtenerValores); 

var X1,Y1,X2,Y2,X,Y;
var x1, y1, x2, y2, x, y;
var porcenW, porcenH, pro_dis = 2;

function obtenerValores(){
    X1 = document.getElementById("x1").value;
    Y1 = document.getElementById("y1").value;
    X2 = document.getElementById("x2").value;
    Y2 = document.getElementById("y2").value;
    X = document.getElementById("x").value;
    Y = document.getElementById("y");

    punto();
    draw(); 
}


// ------  ALGORTIMO DE INTERPOLACION  ------

function setup() {
   var canvas =  createCanvas(700, 700);
   canvas.parent("canvasHtml");
}

function draw() {

    porcenW = width/5;
    porcenH = height/1.3; 


    background(0);
    noFill();

    // PLANO CARTESIANO
    stroke(0, 153, 255);
    strokeWeight(2);
    line(porcenW, 0, porcenW, height); //Linea x
    line(0, porcenH, width, porcenH); //Linea y
    
    
    // PUNTOS
    stroke('blue');
    strokeWeight(5);
    point(x1*pro_dis+porcenW, (porcenH-y1*pro_dis));

    stroke('red');
    strokeWeight(7);
    point(x*pro_dis+porcenW,(porcenH-y*pro_dis));

    stroke(1000);
    strokeWeight(5);
    point(x2*pro_dis+porcenW, (porcenH-y2*pro_dis));
    
    linea();

}

function linea(){

    stroke('blue');
    strokeWeight(2);
    line(x1*pro_dis+porcenW, porcenH-y1*pro_dis,x1*pro_dis+porcenW,porcenH);
    line(x1*pro_dis+porcenW, porcenH-y1*pro_dis,0+porcenW,porcenH-y1*pro_dis);

    stroke('red'); 
    line(x*pro_dis+porcenW, porcenH-y*pro_dis,x*pro_dis+porcenW,porcenH);
    line(x*pro_dis+porcenW, porcenH-y*pro_dis,0+porcenW,porcenH-y*pro_dis);

    stroke(1000);
    strokeWeight(2);
    line(x2*pro_dis+porcenW, porcenH-y2*pro_dis,x2*pro_dis+porcenW,porcenH);
    line(x2*pro_dis+porcenW, porcenH-y2*pro_dis,0+porcenW,porcenH-y2*pro_dis);


    lineaInter();
}

// RECTA DE INTERPOLACION
function lineaInter(){
    stroke('orange')
    strokeWeight(2)
    line(x1*pro_dis+porcenW, porcenH-y1*pro_dis,x2*pro_dis+porcenW, porcenH-y2*pro_dis)  
}

function punto(){
    x1 = X1; 
    y1 = Y1;
    x2 = X2;
    y2 = Y2;
    x = X;

    y = (x-x1)/(x2-x1)*(y2-y1)+int(y1);
    Y.value = y;
}

function zoom(){
    var zo = document.getElementById("zoom_").value;
    pro_dis = zo;
    obtenerValores()
    console.log(pro_dis)
}