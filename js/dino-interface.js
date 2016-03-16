console.log("hey there");
var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=3'),
  fillContainer = function(html) {
    $('#dino').html(html);
  },
  error = function() {
    console.log("no dinos for you");
  };

  getDinos.then(fillContainer, error);



  $(document).ready(function(){
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
  });
