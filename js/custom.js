function getCanvas() {
  $.getJSON('data/data.json')
  .done( function(data){                                 // SERVER RETURNS DATA
  	$.each(data.canvas, function(key, val) {
      $("#buttons").append("<button id='btn" + key + "'>" + (key+1) + "</button>");
     
      $("#btn" + key).on('click', function () {
        $(".canvas").hide();
        $("#canvas" + key).show("slide", 1000);
      });

  		msg = "<div class='canvas' id='canvas" + key + "'>"; 
  		msg += "<div class='titleArea'><h2>" + val.title + "</h2>";
  		msg += "</div></div>";

  		$('#content').append(msg); 

  		$('#canvas' + key).css("background", "url(" + val.image + ") top left no-repeat");
      $('#canvas' + key).hide();

      if (key === 0) {
        $('#canvas0').show();
      };
	  });
   
     
    $('#buttons').append("<button id='previous'>&laquo;</button><button id='next'>&raquo;</button>"); 
     

    $("#previous").on ('click', function () {
      
        var i = $(".canvas:visible").index();
        
        if (i < 1) {
            $(".canvas:visible").hide();
            $(".canvas:last").show("blind", 3000);        
        } else {
            $(".canvas:visible").hide().prev(".canvas").show("blind", 3000);
        };
        
    });    
    
    $("#next").on ('click', function () {

        var i = $(".canvas:visible").index();
        var len = $(".canvas").length - 1;
        
        if (i < len) {
                    $(".canvas:visible").hide().next(".canvas").show("bounce", 1000);
        } else {
            $(".canvas:visible").hide();
            $(".canvas:first").show("bounce", 500);
        };
    });                           
  })
      
//.fail( function() {     
//                               // THERE IS AN ERROR
//    $('#content').text('Sorry, we cannot load data.'); 
//                                                        // Show error message 
//  }).always( function() {                               // ALWAYS RUNS
//     var reload = '<a id="refresh" href="#">';          // Add refresh link
//     reload += 'Reload</a>';
//     $('#reload').html(reload);                         // Add refresh link
//     $('#refresh').on('click', function(e) {            // Add click handler
//       e.preventDefault();                              // Stop link
//       getCanvas();                                      
//     });
//  }); 
    
}

$(document).ready(function() {

	getCanvas();  
    
});

