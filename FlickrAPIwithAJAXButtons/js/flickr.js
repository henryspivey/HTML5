$(document).ready(function() {
 $('button').click(function(){
   $("button").removeClass("selected");
  $(this).addClass("selected");
   var flickerAPI  = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
   var animal = $(this).text();
   var flickerOptions = {
    tags: animal,
    format: "json",
   };
   function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items, function(i, item) {
        photoHTML +='<li class="grid-25 tablet-grid-50>';
        photoHTML += '<a href="'+item.link + '"class="image">';
        photoHTML += '<img src= "' + item.media.m + '"></a></li>';        
      });
     photoHTML += '</ul>';
     $('#photos').html(photoHTML);
   }
   $.getJSON(flickerAPI, flickerOptions, displayPhotos);
 
 }); // adds click event handler on each button
});