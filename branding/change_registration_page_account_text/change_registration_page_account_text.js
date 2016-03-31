//Working as of 03/31/2016
//Change text in catalog that appears in the account registration sign up page. This is where the user will see "Already have an account? Sign In!"
//Note: this can be customized to change more text depending on what you want to replace within Canvas.
//The current example replaces the "Already have account?" text on the listing enrollment page, while keeping the "Sign In" link.

var findText1 = 'Already have an account?';
var replaceText1 = 'Bat Signal!';

var urlPath1 = /^\/courses\/\d+\/enrollment\/new\/*/i;
if(location.pathname.match(urlPath1)){
  var foundEle = $("p.text-center:contains('"+findText1+"')");
  foundEle.html(foundEle.html().replace(findText1, replaceText1));
}
