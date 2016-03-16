
exports.getDinos = function() {
  return $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=3&words=50').then(function(gotDinos){
    $('#dino').html(gotDinos);
  });
};

// c0e4794e7b545f96cb1a4fd559135ba3:2:62311748

exports.getArticles = function() {



  return $.get('http://api.nytimes.com/svc/mostpopular/v2/mostemailed/all-sections/1.json?api-key=c0e4794e7b545f96cb1a4fd559135ba3:2:62311748').then(function(foundArticles){

    for(var i = 0; i <=10; i++){
    $('.articles').append("<li><a href = " + foundArticles.results[i].url +">"+ foundArticles.results[i].abstract+"</a></li>");

  }
  console.log(foundArticles)
  });
};
