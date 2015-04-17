
    $( document ).ready(function() {

        $('#showanswer').on('click', function (e) {

      var test = document.createElement("p");
      test.innerHTML = slope + "x" + " + " + intercept +"=y";
     $("#answers").append(test);

})
        /*$(function (){
        /*var graph = document.createElement('div');
        document.body.appendChild(graph);
	
	 $('#graphscreen').highcharts({

     
        events: {
            load: pushData()
            
        },*/
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
            point=[0.1*k, (slope*0.1*k+intercept)]
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
    
