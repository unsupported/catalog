# About this Customization
## What it does
The purpose of this code is to add custom tiles to the Canvas Catalog home page. It is designed to make the tiles link to sub-catalogs dynamically. See https://ocps.catalog.instructure.com to see the tiles in action.
It also creates a link to a "All Courses" sub-account since the root catalog no longer has any courses listed in it. This enables users to search the entire catalog of available courses if they cannot find what they are looking for in a specific sub-account.
## Why was it architected this way?
It was designed this way to allow for users to browse courses/programs easily by audience. Each of the sub-catalogs that the tiles are linked to have their own custom tags and filtering option that can be independent from the "All Courses" sub-account. This may require some customization of the insitution's catalog to implement. See the pre-configure section for more information. 

# How to Use
## Pre-Configuration
Before using this script it is recommended that you organize your sub-catalog structure as follows:

    ↳ Root Catalog
    ↳↳ All Courses (This should not list any courses in Parent Catalog)
    ↳↳↳ Sub-Catalog 1 (Should list in Parent Catalog)
    ↳↳↳ Sub-Catalog 2 (Should list in Parent Catalog)
    ↳↳↳↳ Additional Sub-Catalogs Etc...

## Customization
Copy and paste the front_page_tiles.css to the "Root Catalog" and all_courses.css files to the "All Courses" catalog customization css fields.
Edit the tiles array in the front_page_tiles.js file code with your custom data:
    
    // var tiles = [["Tile 1 Text", "Tile 1 Link", "Tile 1 Image Publicly Hosted URL"],
    //              ["Tile 2 Text", "Tile 2 Link", "Tile 2 Image Publicly Hosted URL"]]
    var tiles = [["Sub-Catalog 1","/browse/all/sub-catalog-1","https://s3.amazonaws.com/SSL_Assets/implementation/images/office-people-1.jpeg"],
                 ["Sub-Catalog 2","/browse/all/sub-catalog-2","https://s3.amazonaws.com/SSL_Assets/implementation/images/office-people-2.jpeg"],
                 ["Sub-Catalog 3","/browse/all/sub-catalog-3","https://s3.amazonaws.com/SSL_Assets/implementation/images/office-people-3.jpeg"],
                 ["Sub-Catalog 4","/browse/all/sub-catalog-4","https://s3.amazonaws.com/SSL_Assets/implementation/images/office-people-4.jpeg"]
                ]
                
Note: Images must be publically hosted for them to be visible in the Catalog
Copy and paste the front_page_tiles.js code into the "Root Catalog" catalog customization js field.
