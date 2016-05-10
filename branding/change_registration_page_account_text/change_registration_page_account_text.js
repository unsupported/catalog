//Working as of 03/31/2016
//Change text in catalog that appears in the account registration sign up page. This is where the user will see "Already have an account? Sign In!"
//Note: this can be customized to change more text depending on what you want to replace within Canvas.
//The current example replaces the "Already have account?" text on the listing enrollment page, while keeping the "Sign In" link.

var find_text = 'Already have an account?';
var replace_text = 'Bat Signal!';

var url_path = /^\/courses\/\d+\/enrollment\/new\/*/i;
if(location.pathname.match(url_path)){
  var element = $("p.text-center:contains('"+find_text+"')");
  element.html(element.html().replace(find_text, replace_text));
}
