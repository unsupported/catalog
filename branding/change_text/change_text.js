//Change text in catalog
//Note: this will need customized depending on what you want to replace.
//The current example replaces the "Already have account?" text on the listing enrollment page.

var findText1 = 'Already have an account?';
var replaceText1 = 'Bat Signal!';

var urlPath1 = /^\/courses\/\d+\/enrollment\/new\/*/i;
if(location.pathname.match(urlPath1)){
  var foundEle = $("p.text-center:contains('"+findText1+"')");
  foundEle.html(foundEle.html().replace(findText1, replaceText1));
}
