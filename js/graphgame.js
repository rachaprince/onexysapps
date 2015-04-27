

        $('#showanswer').one('click', function (e) {

            var test = document.createElement("p");
            test.innerHTML = slope + "*x" + " + " + intercept +"=y";
            $("#answers").append(test);

        })
        
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

        function testEquation(domain, range){    //Run test on four values
              try {
                eval(domain); 
                eval(range);
                } catch (e) {
                if (e instanceof SyntaxError) {
                return "Incorrect format. Make sure to write 3*x, not 3x"
                }
                }



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
            if (Math.abs(eval(domain)-eval(range)) >0.0001){
                 return "Incorrect, Try Again!";
            }
            var x= -17.8;
            var y=slope*x+intercept;
            if (Math.abs(eval(domain)-eval(range)) >0.0001){
                 return "Incorrect, Try Again!";
            }
           return "Correct, Great Job!";

            
        }        
        /*$(function (){
        /*var graph = document.createElement('div');
        document.body.appendChild(graph);
    
     $('#graphscreen').highcharts({

     
        events: {
            load: pushData()
            
        },*/
    $( document ).ready(function() {
        var container= document.getElementById("graphscreen");

        chart = new Highcharts.Chart({
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
            defaultSeriesType: 'spline',
            events: {
                /*chart = this;*/
                load: function( ){
    
            var series = this.series[0];
            var point=[]; 
            
           positive= (Math.random() < .5);
           postiveTwo= (Math.random() < .5);
           fraction= (Math.random() < .5);


            if(fraction){
                slope= Math.floor((Math.random() * 10) + 1);
                slope/= Math.floor((Math.random() * 10) + 1);
            }
            else{
            slope= Math.floor((Math.random() * 10) + 1);
            }
            
            intercept= Math.floor((Math.random() * 20) + 1);

            if (!positive){
                slope= (-slope);
            }
            if(!postiveTwo){
                intercept= -intercept;
            }

            // add the point
            for(var k=-20; k<=20; k++){
            point=[0.5*k, (slope*0.1*k+intercept)]
            this.series[0].addPoint(point, true, false, true);
            
            }
            }
        },

     

        chart: {
            type: 'line'
        },
        title: {
            text: ''
        },
        xAxis: {
            tickInterval: 1,
        },
        yAxis: {
            tickInterval: 1, 
             title: {
                text: ''
            }
        },
}
});
});

/*function pushData( ){
    
            /*var series = chart.series[0];
            var point=[]; 
            
            var positive= (Math.random() < .5);
            var postiveTwo= (Math.random() < .5);
            var fraction= (Math.random() < .5);


            var slope;
            var intercept;

            if(fraction){
                slope= Math.floor((Math.random() * 10) + 1);
                slope/= Math.floor((Math.random() * 10) + 1);
            }
            else{
            slope= Math.floor((Math.random() * 10) + 1);
            }
            
            intercept= Math.floor((Math.random() * 20) + 1);

            if (!positive){
                slope= (-slope);
            }
            if(!postiveTwo){
                intercept= -intercept;
            }

            // add the point
            for(var k=-50; k<=50; k++){
            point=[0.1*k, (slope*0.1*k+intercept)]
            chart.series[0].addPoint(point, true, false, true);
            
            } */
    
