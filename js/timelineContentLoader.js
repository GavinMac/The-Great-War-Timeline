
var loadTimelineTable = loadTimelineTable || {};

var loadTimelineTable = function(){

  var applyStyles = function(){

    $(".year-btn").click(function () {
         
      // CALCULATE OFFSET FROM WINDOW
      var position = $(this).after().position();
      
      // CHANGE THE HEIGHT OF THE LINE TO MATCH OFFSET
      $("#timelineLine")
          .css({
              'height': position.top
          });

      // FIND ANY EXISTING ACTIVE AND REMOVE
      $('.timeline-area').find('.year-btn').removeClass('prev-year-btn');
      $('.timeline-area').find('.active-year-btn').removeClass('active-year-btn');

      // ADD THE CLASS
      $(this).addClass("active-year-btn");

      // MARK PREVIOUS EVENTS
      $(this).prevAll().addClass("prev-year-btn");
    });
  }

  var loadDetails = function(year){
    
    applyStyles();

    var timelineTable = createXMLHttpRequestObject("data/timelineTable.html");
    var output = "No information for " + year;

          //Split the text response at each closing table tag to fill an array with each years table.
          var dataSplit = timelineTable.split('</table>');

          //Set the string to be matched against to find the specific year that is pass into this function.
          var stringMatch = '<table class="wikitable" id="'+year+'">';

          //Loop through the data array
          for(var i = 0; i < dataSplit.length; i++){

            //Split each line
            var dataLine = dataSplit[i].split(/\r\n/);

            //Check the first line for the string match for the selected year.
              if (dataLine[1] == stringMatch)
              { 
                output = dataSplit[i];
              }                 
          }
          document.getElementById("timelineTableContent").innerHTML = output.toString();

          pageLoader.pagation('#'+year, 10);
          
        }


        return{
          loadDetails: loadDetails
        }
}();
 



