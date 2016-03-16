

var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $("#location").click(function() {
    var city = $("#city").val();
    $('#city').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      console.log(JSON.stringify(response));
      var myCenter = new google.maps.LatLng({lat: response.coord.lat, lng: response.coord.lon});
      map.setCenter(myCenter);
    }).fail(function(error){
        $('#dino').text(error.message);
    });
  });
});
