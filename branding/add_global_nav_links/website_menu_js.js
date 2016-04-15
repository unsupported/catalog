// Working code as of 4/14/2016

//These help position the links on the page both horizontally and vertically
$("#app-header div.col-xs-12.col-sm-6.col-md-7")
    .attr("class", "col-xs-12 col-sm-12 col-md-4");

$("#app-header div.col-xs-12.col-sm-6.col-md-5")
    .attr("class", "col-xs-12 col-sm-12 col-md-8");

// This is where you can customize your links to redirect to your own website
$("#app-header #user-nav").prepend("<div id='page-links'><ul class='piped-list'>\
<li><a target='_blank' href='https://www.google.com'>Link 1</a></li>\
<li><a target='_blank' href='https://www.google.com'>Link 2</a></li>\
<li><a target='_blank' href='https://www.google.com'>Link 3</a></li>\
<li><a target='_blank' href='https://www.google.com'>Link 4</a></li></ul></div>");
