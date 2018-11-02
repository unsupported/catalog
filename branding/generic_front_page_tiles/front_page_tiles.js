// Working as of November 2, 2018

// Define Tile Text, Links and Public Image URL's
var defineTiles = function(){
    // var tiles = [["Tile 1 Text", "Tile 1 Link", "Tile 1 Image Publicly Hosted URL"],
    //              ["Tile 2 Text", "Tile 2 Link", "Tile 2 Image Publicly Hosted URL"]]
    var tiles = [["Sub-Catalog 1","/browse/all/sub-catalog-1","https://s3.amazonaws.com/SSL_Assets/implementation/images/office-people-1.jpeg"],
                 ["Sub-Catalog 2","/browse/all/sub-catalog-2","https://s3.amazonaws.com/SSL_Assets/implementation/images/office-people-2.jpeg"],
                 ["Sub-Catalog 3","/browse/all/sub-catalog-3","https://s3.amazonaws.com/SSL_Assets/implementation/images/office-people-3.jpeg"],
                 ["Sub-Catalog 4","/browse/all/sub-catalog-4","https://s3.amazonaws.com/SSL_Assets/implementation/images/office-people-4.jpeg"]
                ]
    return tiles
}

// Helper function for checking if an element has been rendered yet
function onElementRendered(selector, cb, _attempts) {
    var el = $(selector);
    _attempts = ++_attempts || 1;
    if (el.length) return cb(el);
    if (_attempts == 60) return;
    setTimeout(function () {
        onElementRendered(selector, cb, _attempts);
    }, 250);
};

// Helper function to help build HTML
var buildTileHTML = function(tile){
    var tileHTML = '<div class="col-md-3 col-sm-6"><a class="product-link" href="'
                   + tile[1] +
                   '"><div class="product-tile course-tile" aria-hidden="true"><div class="product-image"><div class="image-container"><span class="image-wrapper" title="'
                   + tile[0] +
                   '" style="background-image: url('
                   + tile[2] +
                   ');"><img class="image-placeholder img-responsive" alt="" src="/assets/product-image-ratio.png"></span></div><span class="ProductIcon__Wrapper--gallery-index"><span class="sr-only"></span><span role="presentation" aria-hidden="true" title="Course"><div class="ProductIcon__LargeCircle--course"><span class="icon icon-course"></span></div> </span> </span></div><div class="product-heading" style="word-wrap: break-word;"><h3 title="'
                   + tile[0] +
                   ' Courses" class="product-title">'
                   + tile[0] +
                   '</h3></div><div class="product-footer"><div class="learn-more"><div class="product-dates home-page-tile-browse-text" style="padding-top: 10px;overflow: visible !important;">Browse Courses Now</div></div></div></div><div class="sr-only"><div>Browse '
                   + tile[0] +
                   '</div><div></div></div></a></div>'
    return tileHTML
}

// Add custom element logic here
function addCustomElements(){
    // Check to make sure the current path is the Home Page
    if(window.location.pathname === "/"){
        // Take the provided tile information and build the correct HTML
        var tiles = defineTiles()
        var tilesHTML = ""
        tiles.forEach(function(tile,index){
            var tileHTML = buildTileHTML(tile)
            tilesHTML += tileHTML
        })
        // Add the Tile HTML to the Page
        $("#listings").append(tilesHTML)
        // Hides No Courses found text
        var hideNoCoursesText = setInterval(function () {
            if ($('div.col-md-12 > h3').length) {
                clearInterval(hideNoCoursesText);
                $("div.col-md-12 > h3").ready(function () {
                    $("#listings > div.col-md-12").html("");
                });
            }
        }, 50);
    } else {
        // Add some text to the search bar to help indicate that they are only searching the current sub-catalog
        var checkExist = setInterval(function () {
            if ($('#search').length) {
                clearInterval(checkExist);
                $("#search").ready(function () {
                    document.getElementsByName('query')[0].placeholder = 'Search this Page';
                });
            }
        }, 50);
    }
    // Add the Search All Courses Link
    $("#search-form > div.search-form-container > div > form > div.search-form__actions.pull-right > span").append('<span> <div class="sr-only">Use the following button to be redirected to a URL with all available courses</div><button type="button" onclick="location.href=\''+window.location.origin+'/browse/all\'" class="search-refine-button btn btn-lg" aria-expanded="false" aria-haspopup="false" id="search-refine-button--categories" style="padding-left: 16px; padding-right: 40px;"> <div class="search-refine-button__contents"> <div class="search-refine-button__text" style="">Search All Courses</div><div class="search-submit" aria-hidden="true" style="color:#ffffff;padding-left: 160px;"></div></div></button></span>');
}

addCustomElements();


