
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

/* //Example without plugin :

$('#submit').on('click', function() {
    var valid = true,
        message = '';

    $('form input').each(function() {
        var $this = $(this);

        if(!$this.val()) {
            var inputName = $this.attr('name');
            valid = false;
            message += 'Please enter your ' + inputName + '\n';
        }
    });

    if(!valid) {
        alert(message);
    }
});

*/

/*
// Example if there is plug in : Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});
*/
