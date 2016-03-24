This majority of this script is a standard Bootstrap Carousel. A few additions have been made to adapt the script to Catalog. This is a community based project and it is unsupported by Instructure.

This script replaces the standard blue gradient horizontal banner with a Bootstrap image carousel.

You will need to host your images on a publicly available server with an SSL certificate configured. Once the images have been added you'll modify the following line with the path to your images.
```
<img src="http://placehold.it/1440x350"> \
```

If you need to add an additional image to your carousel add the following block within the slides wrapper.
```
<div class="item"> \
  <img src="http://placehold.it/1440x350"> \
  <div class="carousel-caption"> \
      <h3>Caption Text</h3> \
  </div> \
</div> \
```

You also need to add an additional indicator. Change the `data-slide-to` attribute to the next largest whole number.
```
<li data-target="#carousel-example-generic" data-slide-to="5"></li> \
```

It is also important to note that new lines in Javascript need to be terminated with a `\`. If you add additional lines to the carousel variable you will need to terminate the new lines.
