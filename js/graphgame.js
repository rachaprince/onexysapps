$('#showanswer').one('click', function (e) {

    var test = document.createElement("p");
    var slope;
    if (slopeD===1){
       test.innerHTML = slopeN + "*x" + " + " + intercept +"=y";
    }
    else
        test.innerHTML = slopeN + "/"  + slopeD + "*x" + " + " + intercept + "=y";
    $("#answers").append(test);

})

function clearAnswer(){
 
    $('#showanswer').one('click', function (e) {

    var test = document.createElement("p");
   var slope;
    if (slopeD===1){
       test.innerHTML = slopeN + "*x" + " + " + intercept +"=y";
    }
    else
        test.innerHTML = slopeN + "/"  + slopeD + "*x" + " + " + intercept + "=y";
    $("#answers").append(test);

    })

    var answers= document.getElementById("answers");
    var length= answers.childNodes.length;
    for(var i=0; i < length ; i ++){
    answers.removeChild(answers.childNodes[i]);
    }
}

/* choose which points to display, and which types of equations we want*/
$('#newequation').on('click', function(e){

    clearAnswer();
        
    chart.series[0].setData([]);
    var series = chart.series[0];
    var point=[]; 
            
    positive= (Math.random() < .5);
    postiveTwo= (Math.random() < .5);
    fraction= (Math.random() < .5);

    if(fraction){
        slopeN= Math.floor((Math.random() * 10) + 1);
        slopeD= Math.floor((Math.random() * 10) + 1);
    }
    
    else{
        slopeN= Math.floor((Math.random() * 10) + 1);
        slopeD=1;
    }
            
    intercept= Math.floor((Math.random() * 20) + 1);

    if (!positive){
         slopeN= (-slopeN);
    }
    
    if(!postiveTwo){
         intercept= -intercept;
        }

        // add the point
        for(var k=-20; k<=20; k+=4){
            point=[0.5*k, (slopeN/slopeD*0.5*k+intercept)]
            chart.series[0].addPoint(point, true, false, true);            
        }
})
        
/*make sure the format of this equation is pretty, check out safari*/        
$('#checkanswer').on('click', function (e){

    var answer = document.createElement("p");

    var theirAnswer= document.getElementById("equation").value.split("=");
    var domain;
    var range;

    //determine which side of the equation contains x
    if(theirAnswer.length>1){
        if(theirAnswer[0].includes("x")){
    
            domain= theirAnswer[0];
            range= theirAnswer[1];
            answer.innerHTML= testEquation(domain, range);
        }

        else if (theirAnswer[1].includes("x")){
            domain= theirAnswer[1];
            range= theirAnswer[0];
            answer.innerHTML = testEquation(domain, range);
        }
    }

    else{
        answer.innerHTML = "Incorrect format. Make sure to include x y and =";
    }

    $("#answers").append(answer);
})


//Make sure test is reliable
function testEquation(domain, range){    //Run test on four values
    try {
        eval(domain); 
        eval(range);
    } catch (e) {
        if (e instanceof SyntaxError) {
        return "Incorrect format. Make sure to write 3*x, not 3x"
        }
        return "Incorrect format. Watch out for parentheses."
    }

    var slope= slopeN/slopeD;

    var x = 0;
    var y= intercept;
        if (Math.abs(eval(domain)-eval(range)) >0.0001) {
                return "Incorrect, Try Again!";
        }

    var x= 3.5;
    var y=slope*x+intercept;
        if (Math.abs(eval(domain)-eval(range)) >0.0001){
            return "Incorrect, Try Again!";
    }

    var x= -5;
    var y=slope*x+intercept;
        if (Math.abs(eval(domain)-eval(range)) >0.0001){
              return "Incorrect, Try Again!";
        }

    var x= 20;
    var y=slope*x+intercept;
        if (Math.abs(eval(domain)-eval(range)) >0.001){
            return "Incorrect, Try Again!";
        }

    var x= -17.8;
    var y=slope*x+intercept;
        if (Math.abs(eval(domain)-eval(range)) >0.001){
           return "Incorrect, Try Again!";
        }

    return "Correct, Great Job!";
          
}        

/*this function borrowed from StackOverflow*/
function retr_dec(num) {
  return (num.toString().split('.')[1] || []).length;
}

function decimalCheck(num){
    if (retr_dec(num)>3){
        return num.toFixed(4);
    }
    else 
        return num;
}
        
    $( document ).ready(function() {
        var container= document.getElementById("graphscreen");

        chart = new Highcharts.Chart({
        title: '',
             tooltip: {
            formatter: function () {
                var yval= decimalCheck(this.y);
                return '( ' + this.x + ',' + yval + ' )';
            }
        },
        xAxis: {
        plotLines: [{
                color: 'black',
                width: 2,
                value: 0
            }],
        gridLineWidth: 1
        },
        yAxis: {
             plotLines: [{
                color: 'black',
                width: 2,
                value: 0
            }]
        },
        series: [{
            showInLegend: false,  
            name: '',
            data: []
            }],
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        },
        chart: {
            renderTo: container,
          
            events: {
                /*chart = this;*/
                load: function( ){
    
                var series = this.series[0];
                var point=[]; 
            
                   positive= (Math.random() < .5);
                   postiveTwo= (Math.random() < .5);
                   fraction= (Math.random() < .5);


                    if(fraction){
                    slopeN= Math.floor((Math.random() * 10) + 1);
                    slopeD= Math.floor((Math.random() * 10) + 1);
                    }
                    else{
                    slopeN= Math.floor((Math.random() * 10) + 1);
                    slopeD=1;
                    }
            
                    intercept= Math.floor((Math.random() * 20) + 1);

                    if (!positive){
                        slopeN= (-slopeN);
                    }
                    if(!postiveTwo){
                        intercept= -intercept;
                    }

                    // add the point
                    for(var k=-20; k<=20; k+=4){
                    point=[0.5*k, (slopeN/slopeD*0.5*k+intercept)]
                    this.series[0].addPoint(point, true, false, true);
                    
                    }
                    }

            
        },
     
}
});
});

