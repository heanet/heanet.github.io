# [heanet.github.io](https://heanet.github.io)

HEAnet is Ireland’s National Education and Research Network, providing cutting edge Internet, associated ICT and e-Infrastructure services to Educational and Research organisations throughout Ireland, including all primary and post-primary schools.


[heanet.ie](http://www.heanet.ie)

## Development information

This bootstrap uses npm and bower as package managers.
To install the project dependencies run the following commands:

    npm install
    bower install

## Building

To build your project, at the project root folder type:

     grunt

To update with live reload and listen to changes, at the project root folder type: 

    "grunt dev" 

## Directory structure
    ├── bower_components
    ├── build # css, js, assets will be copied here
    ├── node_modules
    └── src # where your application files exist
        ├── assets # files and folders will be copied to the build dir
        ├── css # minification, concatenation by cssmin
        ├── js # minification, concatenation by uglify
        └── app # main application files

## Deploy

To deploy to production (heanet.github.io), at the moment, you have to copy the contents of the build folder into the root folder, and push changes to master.
