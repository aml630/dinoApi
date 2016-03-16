var getDinos = require('./../js/dino.js').getDinos;

  $(document).ready(function(){
    getDinos();

    $('#dinoForm').submit(function(event){
      event.preventDefault();
      var numOfParagraphs = $('#numOfParagraphs').val();
      var wordsPerParagraph = $('#wordsPerParagraph').val();
      var customDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=' + numOfParagraphs + '&words=' + wordsPerParagraph);
      fillContainer = function(html) {
        $('#userDino').html(html);
      },
      error = function() {
        console.log("no dinos for you");
      };
      customDinos.then(fillContainer, error);

    });

    $(".clearPage").click(function() {
      // $("#userDino").html(" ");
      location.reload();
    });
  });
