# Add Catalog LTI tool to Canvas Global Navigation
Other than changing the Dashboard Icon in Canvas to redirect to the Catalog Dashboard, there is no way to directly navigate to Catalog that is a part of Canvas. This adds a Catalog icon to the Global Navigation. However, since Catalog does not support an LTI launch, there is some Javascript that needs to be applied to update the URL of the global navigation icon.

# Installation
## Add LTI Tool
Add the LTI to Canvas Root Account by using the Add by pasting XML method and using the provided catalog_lti.xml (update all occurrence of https://demo.catalog.instructure.com URL to the client's root catalog url). Once it has been added, navigate to <canvas-domain>/api/v1/accounts/self/external_tools?per_page=100 and find the LTI tool ID of the newly added LTI tool. You'll need this id when updating the custom javascript.

## Customize Javascript
Customize this line with the necessary information:
```
fixCatalogURL("<catalog_url>", "<catalog_tool_id>", "<root_account_id>");
``` 


