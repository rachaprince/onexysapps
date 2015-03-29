$( document ).ready(function() {

//calls an inital load to the page
function init() {
 Draw() ;
}

//whenever the Draw button is clicked, redraws whatever function is on the page
document.getElementById("draw").addEventListener("click", function(event) {
    Draw();
}, false);

//sets up the inital canvas
var Canvas = document.getElementById('graph');  
var Ctx = null ;

var Width = Canvas.width ;
var Height = Canvas.height ;

//should be dynamically determined by 
function MaxX() {
  return 20 ;
}

function MinX() {
  return 0 ;
}

function MaxY() {
  return MaxX() * Height / Width;
}

function MinY() {
   return MinX() * Height / Width;
}

function XC(x) {
  return (x - MinX()) / (MaxX() - MinX()) * Width ;
}

function YC(y) {
  return Height - (y - MinY()) / (MaxY() - MinY()) * Height ;
}

function XTickDelta() {
  return 1 ;
}

function YTickDelta() {
  return 1;
}

function Draw() {

 // Evaluate the user input
/* var F = function(x) {
  return Math.sin(x);
} ;
*/
var F= 
function (x){
    var equation;
    var multiplier;
     if (document.getElementById("option4").classList.contains("active")) {
    multiplier=1.1 ;
  }
  else if (document.getElementById("option5").classList.contains("active")){
    multiplier=1.3;
  }
  else {
    multiplier=1.5;
  }

  if (document.getElementById("option1").classList.contains("active")) {
    return 5*Math.pow(multiplier,x); 
  }
  else if (document.getElementById("option2").classList.contains("active")){
    return 10*Math.pow(multiplier,x); 
  }
  else {
    return 30*Math.pow(multiplier,x);
  }
    return equation;
};

var F2=
function(x){
  var equation;
    var multiplier;
     if (document.getElementById("option10").classList.contains("active")) {
    multiplier=.5 ;
  }
  else if (document.getElementById("option11").classList.contains("active")){
    multiplier=1;
  }
  else {
    multiplier=3;
  }

  if (document.getElementById("option7").classList.contains("active")) {
    return 3+multiplier*x; 
  }
  else if (document.getElementById("option8").classList.contains("active")){
    return 6+multiplier*x; 
  }
  else {
    return 9+multiplier*x;
  }
    return equation;
};

 if (Canvas.getContext) {
  
   // Set up the canvas:
   Ctx = Canvas.getContext('2d');
   Ctx.clearRect(0,0,Width,Height) ;

   // Draw:
   DrawAxes() ;
   RenderFunction(F) ;
   RenderFunction(F2);
  
  } else {
    // Do nothing.
  }
}

function DrawAxes() {
 Ctx.save() ;
 Ctx.lineWidth = 2 ;
 // +Y axis
 Ctx.beginPath() ;
 Ctx.moveTo(XC(0),YC(0)) ;
 Ctx.lineTo(XC(0),YC(MaxY())) ;
 Ctx.stroke() ;

 // -Y axis
 Ctx.beginPath() ;
 Ctx.moveTo(XC(0),YC(0)) ;
 Ctx.lineTo(XC(0),YC(MinY())) ;
 Ctx.stroke() ;

 // Y axis tick marks
 var delta = YTickDelta() ;
 for (var i = 1; (i * delta) < MaxY() ; ++i) {
  Ctx.beginPath() ;
  Ctx.moveTo(XC(0) - 5,YC(i * delta)) ;
  Ctx.lineTo(XC(0) + 5,YC(i * delta)) ;
  Ctx.stroke() ;  
 }

 var delta = YTickDelta() ;
 for (var i = 1; (i * delta) > MinY() ; --i) {
  Ctx.beginPath() ;
  Ctx.moveTo(XC(0) - 5,YC(i * delta)) ;
  Ctx.lineTo(XC(0) + 5,YC(i * delta)) ;
  Ctx.stroke() ;  
 }  

 // +X axis
 Ctx.beginPath() ;
 Ctx.moveTo(XC(0),YC(0)) ;
 Ctx.lineTo(XC(MaxX()),YC(0)) ;
 Ctx.stroke() ;

 // -X axis
 Ctx.beginPath() ;
 Ctx.moveTo(XC(0),YC(0)) ;
 Ctx.lineTo(XC(MinX()),YC(0)) ;
 Ctx.stroke() ;

 // X tick marks
 var delta = XTickDelta() ;
 for (var i = 1; (i * delta) < MaxX() ; ++i) {
  Ctx.beginPath() ;
  Ctx.moveTo(XC(i * delta),YC(0)-5) ;
  Ctx.lineTo(XC(i * delta),YC(0)+5) ;
  Ctx.stroke() ;  
 }

 var delta = XTickDelta() ;
 for (var i = 1; (i * delta) > MinX() ; --i) {
  Ctx.beginPath() ;
  Ctx.moveTo(XC(i * delta),YC(0)-5) ;
  Ctx.lineTo(XC(i * delta),YC(0)+5) ;
  Ctx.stroke() ;  
 }
 Ctx.restore() ;
}

var XSTEP = (MaxX()-MinX())/Width ;

function RenderFunction(f) {
  var first = true;

  Ctx.beginPath() ;
  for (var x = MinX(); x <= MaxX(); x += XSTEP) {
   var y = f(x) ;
   if (first) {
    Ctx.moveTo(XC(x),YC(y)) ;
    first = false ;
   } else {
    Ctx.lineTo(XC(x),YC(y)) ;
   }
  }
  Ctx.stroke() ;
}

init();
});