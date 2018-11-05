## Building this project
This project uses Travis CI (Continuous Integration) along with GitHub in order to ensure code reviews and clean code. In order to properly use all tools and build this project, you must: 
  * have npm and node.js installed on your computer
  * install copyfiles, rimraf, jshint, live-server, and mocha as global npm packages
  
To develop the application, start a server in the project root by entering in the terminal "live-server".

### Project Layout
.vscode - includes a settings file to keep styling consistant with those who use VSCode
build - contains the files for the web server to run the website
node_modules - contains all locally required node packages
src - contains the local files used to build the website
test - contains the files used by Mocha/Should to test the src/javascript files
\_config.yml - used by GitHub to stylize the readme
.gitignore - used to ignore relevant files specific to the development machine
.travis.yml - used by Travis to build the project
LICENSE - the MIT License
package-lock.json - used by npm to keep track of node modules needed
package.json - used by npm to run npm scripts and build the package-lock file
README - this document


## Project Ideas

Major Battles in WWII (https://www.secondworldwarhistory.com/world-war-2-statistics.php)
  - timeline at top for battle/year in chron order
  - casulty count
  - scrolly telly to go through chronological order of battles
  - big overview of world
    - click on battle to go to that scrolly position
  - semantic zoom into battle region from scrolly telly
  - left 2/3 will be viz; right 1/3 text
  - sub bar charts on corners for deaths/wounded/particpants and weapons (tanks/ships/subs)
  - last part of story will be totals/summary charts