var carousel = '<div id="carousel-example-generic" class="carousel slide" data-ride="carousel"> \
  <!-- Indicators --> \
  <ol class="carousel-indicators"> \
    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li> \
    <li data-target="#carousel-example-generic" data-slide-to="1"></li> \
    <li data-target="#carousel-example-generic" data-slide-to="2"></li> \
    <li data-target="#carousel-example-generic" data-slide-to="3"></li> \
    <li data-target="#carousel-example-generic" data-slide-to="4"></li> \
    <li data-target="#carousel-example-generic" data-slide-to="5"></li> \
  </ol> \
  <!-- End Indicators --> \
  <!-- Wrapper for slides --> \
  <div class="carousel-inner"> \
    <div class="item active"> \
      <img src="http://placehold.it/1440x350"> \
      <div class="carousel-caption"> \
          <h3>Caption Text</h3> \
      </div> \
    </div> \
    <div class="item"> \
      <img src="http://placehold.it/1440x350/ff0000"> \
      <div class="carousel-caption"> \
          <h3>Caption Text</h3> \
      </div> \
    </div> \
    <div class="item"> \
      <img src="http://placehold.it/1440x350/ffff00"> \
      <div class="carousel-caption"> \
          <h3>Caption Text</h3> \
      </div> \
    </div> \
    <div class="item"> \
      <img src="http://placehold.it/1440x350/00ff00"> \
      <div class="carousel-caption"> \
          <h3>Caption Text</h3> \
      </div> \
    </div> \
    <div class="item"> \
      <img src="http://placehold.it/1440x350/00ffff"> \
      <div class="carousel-caption"> \
          <h3>Caption Text</h3> \
      </div> \
    </div> \
    <div class="item"> \
      <img src="http://placehold.it/1440x350/0000ff"> \
      <div class="carousel-caption"> \
          <h3>Caption Text</h3> \
      </div> \
    </div> \
  </div> \
  <!-- End Slide Wrapper--> \
  <!-- Controls --> \
  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev"> \
    <span class="glyphicon glyphicon-chevron-left"></span> \
  </a> \
  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next"> \
    <span class="glyphicon glyphicon-chevron-right"></span> \
  </a> \
</div> <!-- Carousel -->';

$('#feature').html(carousel);