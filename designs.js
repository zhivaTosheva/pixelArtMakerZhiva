
var valid = true;

function deleteOldGrid(elementToDelete){
  $(elementToDelete).empty();
}

function makeGrid(element){

  var gridHeight = $("#input_height").val();
  var gridWidth = $("#input_width").val();

  for(var i =1; i<=gridHeight; i++){
      $(element).append("<tr id='row'></tr>");
      for(var j =1; j<=gridWidth; j++){
    //  $("#pixel_canvas").append("<tr id='row'></tr>");
        $("#row:last-child").append("<td id='cell'></td>");
      }

  }
}

function fillColor(elementHolder,elementToBeFilled){
  $(elementHolder).on( 'click', elementToBeFilled, function() {
     var pickedColor = $("#colorPicker").val();
      $(this).css("background-color", pickedColor);
  });
}


function hideErrorMessages(){
  $('.errorHeight').hide();
  $('.errorWidth').hide();
}

function makeGridWithValidation(){
  $(":submit").click(function(){

    deleteOldGrid("table");
    //makeGrid("#pixel_canvas");


    $('#sizePicker :input[type=number]').each(function(){

      var $currentInput = $(this);

      if(parseInt($currentInput.val())>25 && $currentInput.attr("name")=== "height"){

        valid = false;
        var maxValueHeight= parseInt($currentInput.attr("max"));
         $("label#height_error").show();
         $(".errorHeight").slideUp(3000).fadeOut(function() {
                 window.location.reload();
             });

      }else if(parseInt($currentInput.val())>40 && $currentInput.attr("name")=== "width") {

        valid = false;
        var maxValueWidth= parseInt($currentInput.attr("max"));
         $("label#width_error").show();
         $(".errorWidth").slideUp(3000).fadeOut(function() {
                 window.location.reload();

             });
      }
    })

    if(valid) {

        makeGrid("#pixel_canvas");
        return false;

    }

      return false;
  });
}

$(document).ready(function () {

   hideErrorMessages();
   makeGridWithValidation();
   fillColor('#pixel_canvas','#cell');
});
