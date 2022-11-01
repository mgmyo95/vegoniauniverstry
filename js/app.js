//Start Jquery Area
$(document).ready(function(){

   //Start Header
   //Start navbar
 //navbuttons
 $(".navbuttons").click(function(){
    $(this).toggleClass('crossxs');
 });
 //End navbar
 //End Header

 //Start Login Box
  $(".open-btn").click(function(){
    document.getElementById('form-popup').style.display = "block"
  })

  $("#formclose-btn").click(function(){
    document.getElementById('form-popup').style.display = "none"
  })
 //End Login Box
  
});
//End Jquery Area

//Start Javascript Area

//Start Student Counter Section
var getcountervalues = document.querySelectorAll('.countervalues');
getcountervalues.forEach(function(getcountervalue){
   getcountervalue.textContent = 0;
   // console.log(getcountervalue);

   const updatecounter = function(){
   //   console.log("i am working");
     const getcttarget = +getcountervalue.getAttribute('data-target');
   //   console.log(typeof getcttarget,getcttarget);
   const getctcontent = +getcountervalue.textContent;
   console.log(typeof getctcontent,getctcontent);

   const incnumber = getcttarget / 100;
   // console.log(incnumber);

   if(getctcontent < getcttarget){
      getcountervalue.textContent = getctcontent+incnumber;
      setTimeout(updatecounter,50);
   }
   }
   updatecounter();

});

//End Student Counter Section

//Start Rating Section
//Start Google Code For Chart

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Myanmar',     8],
          ['Thailand',      2],
          ['Singapore',  4],
          ['Indonesia', 2],
          ['Srilanka',    8]
        ]);

        var options = {
          title: 'International Studnets',
         //  pieHole: 0.4,
         // is3D: true,
         width:400,
         height:400
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

//End Google Code For Chart

//End Rating Section


let getyear = new Date().getUTCFullYear();
document.getElementById('year').textContent = getyear;

//End Javascript Area


//29FN