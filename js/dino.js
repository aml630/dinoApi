
exports.getDinos = function() {
  return $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=3').then(function(gotDinos){
    $('#dino').html(gotDinos);
  });
};
