 // Show image details on modal when clicked
 $(document).on('click', '.gallery img', function() {
    var src = $(this).attr('src');
    $('#modalImage').attr('src', src);
    $('#detailsModal').modal('show');
  });

  $('.details-button').on('click', function() {
    var imgSrc = $(this).closest('.image-container').find('img').attr('src');
    $('#modalImage').attr('src', imgSrc);
    $('#detailsModal').modal('show');
  }); 