function onElementRendered(selector, cb, _attempts) {
    var el = $(selector);
    _attempts = ++_attempts || 1;
    if (el.length) return cb(el);
    if (_attempts == 200) return;
    setTimeout(function () {
        onElementRendered(selector, cb, _attempts);
    }, 50);
};

function fixCatalogURL(catalog_url, catalog_tool_id, root_account_id) {
    //Configure these settings
    if (ENV['current_user_roles'].indexOf('admin') > -1 || ENV['current_user_roles'].indexOf('teacher') > -1) {
        // START - Change URL of PD Catalog LTI

        onElementRendered('#context_external_tool_'+catalog_tool_id+'_menu_item', function () {
            catalog_global_nav = document.querySelector('#context_external_tool_'+catalog_tool_id+'_menu_item > a');
            nav_link = catalog_global_nav.href
            //console.log(nav_link)
            if (nav_link.indexOf('/accounts/'+root_account_id+'/external_tools/'+catalog_tool_id+'?launch_type=global_navigation') > -1) {
                catalog_global_nav.setAttribute('href', catalog_url);
                catalog_global_nav.setAttribute('target', '_blank');
                catalog_global_nav.setAttribute('rel', 'noopener noreferrer');
            };
        });
    };
};

$(document).ready(function () {
    fixCatalogURL("<catalog_url>", "<catalog_tool_id>", "<root_account_id>");
});