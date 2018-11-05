# Basic Info
## The Great Global Conflict: Battle-by-Battle
## https://github.com/ChrisBrown46/CS5890_Project

| Names             	| A#s       	| Emails                                	|
|-------------------	|-----------	|---------------------------------------	|
| Christopher Brown 	| A01889018 	| christopher.r.brown@aggiemail.usu.edu 	|
| Gavin Browning    	| A01887359 	| gavin.browning@aggiemail.usu.edu      	|
| Justin Fairbourn  	| A01842387 	| justin.fairbourn@gmail.com            	|

 # Background and Motivation
 We are interested in this topic because we wanted to create a good scrollytelly example and found that historic stories would be a great way to do so. We chose to do World War II because it's an extremely well known topic and one that intrests many people.

 # Project Objectives
 The primary questions we are trying to answer are whether or not we can create a good scrollytelly example. Additionally, we want to be able to show the difference in severity in battles where severity is based upon casulties, costs, and weapons used.
 We would like to learn more about semantic zooming and user interaction. We would like to accomplish a design where users are able to learn about the scale and history behind WWII in a way raw data could not.

 # Data
 We will be collecting our data from https://www.secondworldwarhistory.com/world-war-2-statistics.php and other sites that provide financial information about damages from individual battles. We will be collecting this data manually from the web pages because we were unable to find any aggregated data on the web.

 # Data Processing
 We expect to do most of the data cleanup when we manually enter the data. We plan on targeting the most popular and well known battles, so we expect to have data on about 10-15 battles. Each battle will contain 15-20 attributes in addition to the textual history behind the battle. In total, this would be about 150-300 pieces of data in addition to the textual history. We will be placing this data into JavaScript Object Notation.

# Visualization Designs
![YearBattle](./visualization_images/YearBattle.jpg)
This will be a selector that allows the user to jump to a position in the story. They will be able to click a battle to go to it.

![BattleMap](./visualization_images/BattleMap.jpg)
This is an overall view of the world that is shown during the story. It will show general information such as points of interest (battles) along with some extra features to show important battles and what one will be shown next. It has similar functionality as the year-battle chart in that a user can click a dot (battle) and immediately be brought to that position in the story. Dots (battles) may also be hovered over to display a tooltip that summarizes the battle.

![ScrollyTelly](./visualization_images/SemanticZoom.jpg)
This will be the text on the right side of the screen that tells a history behind the War with an emphasis on specific battles. Once a battle is reached in the story, the left hand side will be updated to a different visualization. Users can scroll back and forth in the story to go back in time or forward in time.

![SemanticZoom](./visualization_images/SemanticZoom.jpg)
This is similar to the battle map, but it is a zoomed in region around a specific battle. It allows for more information to be displayed and will feature two bar charts on the corners that provide additional battle details.

![BattleCasulties](./visualization_images/BattleCasulties.jpg)
This is a stacked barchart that has factions as categories and number of casulties as quantities. There will be another bar next to each faction that shows the average casulties per battle.

![WeaponsUsed](./visualization_images/WeaponsUsed.jpg)
This is a barchart that has weapons used as categories and number of weapons used as quantities. There will be bars next to each other that are color coded to show the different factions. There will be dotted line on each set of bars that show average weapons used per battle.

![TotalCasulties](./visualization_images/TotalCasulties.jpg)
This is the same as battle casulties but will be displayed at the end in a large format to show the total casulties across the entire World War.

![TotalWeapons](./visualization_images/TotalWeapons.jpg)
This is the same as weapons used but will be displayed at the end in a large format to show the total weapons used across the entire World War.

# Must-Have Features
* Must have a year battle chart built to the before mentioned specifications.
* Must have a battle map chart built to the before mentioned specifications.
* Must have a scrolly telly text section built to the before mentioned specifications.
* Must have a semantic zoom world chart built to the before mentioned specifications.
* Must have a battle casulties chart built to the before mentioned specifications.
* Must have a weapons used chart built to the before mentioned specifications.
* Must have a total casulties chart built to the before mentioned specifications.
* Must have a total weapons used chart built to the before mentioned specifications.

* Must have events trigger from the text scrolling that will update the visualizations on the left.
* Must display the information of 10 battles.
* Must be colored in such a way that color blindness will not affect the visualizations.
* Must have transitions between each visualization when events are triggered.
* Must have valid HTML and properly formatted JavaScript and CSS.

# Optional Features
* May have extra charts to show miscellaneous battle information. i.e. medal of honors, civilian casulties, ...
* May have additional battles.

# Project Schedule
1. November 5th - Proposal finished.
2. November 12th - Battles chosen and data consolidated. Text portion started.
3. November 19th - HTML finished along with JavaScript classes' skeletons.
4. November 26th - Text portion finished with 6 visualizations finished.
5. November 30th - Completed to specifications.
