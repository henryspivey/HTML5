$(document).ready(function() {


  $("form").submit(function(evt) {
    evt.preventDefault(); // stops browser from going to a different page.
    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var q = $('#search').val();
    var flickrOptions = {
      tags: q,
      format: "json"
    };
    function displayPhotos(data) {
      console.log(data);
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }  
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);
  });
    
    
}); // end ready