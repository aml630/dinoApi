
exports.getDinos = function() {
  return $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=3&words=50').then(function(gotDinos){
    $('#dino').html(gotDinos);
  });
};
