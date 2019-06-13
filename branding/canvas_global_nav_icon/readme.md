# Add Catalog LTI tool to Canvas Global Navigation
Other than changing the Dashboard Icon in Canvas to redirect to the Catalog Dashboard, there is no way to directly navigate to Catalog that is a part of Canvas. This adds a Catalog icon to the Global Navigation. However, since Catalog does not support an LTI launch, there is some Javascript that needs to be applied to update the URL of the global navigation icon.

# Installation
## Add LTI Tool
1) Open catalog_lti.xml in a text editor and update all occurrence of https://demo.catalog.instructure.com URL to the client's root catalog url
2) Add the LTI to Canvas Root Account by using the Add by pasting XML method and using the updated and edited catalog_lti.xml
3) Navigate to <canvas-domain>/api/v1/accounts/self/external_tools?per_page=100 and find the LTI tool ID of the newly added LTI tool. You'll need this id when updating the custom javascript.
  
*Note: By default the Catalog Global Nav Icon will only be visible to Teachers and Admins of the Canvas instance. Updating the following piece of XML will change visibility
```
Default: Teachers and Admins
<lticm:property name="visibility">admins</lticm:property> 

Altered: All Authenticated Canvas Users
<lticm:property name="visibility">members</lticm:property> 
```

## Customize Javascript
Customize this line with the necessary information:
```
fixCatalogURL("<catalog_url>", "<catalog_tool_id>", "<root_account_id>");
``` 


