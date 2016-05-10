// Working as of 05/09/2016
// Course Listing
if( $(".course-information").length ) {
	$("body").addClass("new-layout");

  if( $(".course-information.dk").length ) {
    $("body").addClass("dk");
  }

  $(".hero-region div.col-md-6:nth-of-type(2)").removeClass('col-md-6').addClass('col-md-5');
  $(".hero-region div.col-md-6:nth-of-type(1)").removeClass('col-md-6').addClass('col-md-7');
	$(".product-image").append( $(".hero-region a.btn.btn-info.btn-lg, .edit_applicant") );
	$(".detail-blocks").insertBefore( $(".hero-action") );

  var logo = $("img.product-account-logo").parent();

  if( $(".additional-logos").length ) {
    $(logo).insertBefore(".additional-logos");
  } else {
    $(".instructor-info").append( logo );
  }

  $(".read-more").click(function(){
    $(this).parent().next(".more-text").contents().unwrap();
    $(this).remove();
  });
}
