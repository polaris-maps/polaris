# Outline

Please note that these ideas are still in very rough form and will be improved, edited, and iterated on as we work together!

**Last update:** 4-7-2022, based on team decisions made during our weekly meeting

## Components
- Map
    - Accessible layer
        - Thinking of our pathways as a graph, this would remove nodes/edges representing obstacles (e.g. stairs, areas that are too steep)
    - Elevation layer
        - Color-codes path elevation
        - Display by default
    - Building-specific information
        - Elevator/accessible door location/directions
        - Maintenance updates
- Contribute
    - Allow for submission of locations of permanent and temporary (i.e. construction or maintenance) obstacles, building-specific information on location of accessibility equipment, notes on pathways
    - Integrated with map so people can just select a location (through GPS or a dropdown) and then type the information to submit

## Schedule
| Date | Action Item |
| ---- | ----------- |
| 2/15/2022 | (Christine) Add rough sketches to planning repo |
| 2/21/2022 | (Mia, Elaine, Robert) Initial wireframes; (Joe, Robert) Create template Angular website, research connection to Flask; (Christine) Identify data for base map/locations, research/create template Flask website with connection to MongoDB |
| 2/28/2022 | Create PR for Current Angular Skeleton and write documentation to install and set up locally (Joe), Get DataBase up and running (Christine, Elaine), Desktop WireFrames (Robert) |
| 3/6/2022 | Pull request / add Angular code and have demo ready (Joe), Pull request / add Node.js code and connection to Angular and update tutorial (Christine), Watch tutorials and help with ideas/roadblocks (Mia), Helping with setting up the MongoDB database (Elaine), Continue website wireframes (and add desktop feed wireframe) (Robert) |
| 3/20/2022 | Connect Leaflet to the map (Joe), Finish connection to Angular and help with database schema (Christine), Do the database schema (Mia, Elaine, Christine), Look at CSS in Angular (Mia), Continue website wireframes (?) (Robert) |
| 4/7/2022 (Thursday) | Finish connection between front and back-end for issues asap and write up steps for adding a collection (Christine), Create user database and access logs database (Mia, Elaine, (Robert?)), Styling (Joe) |
| 4/12/2022 (Tuesday) | Implementing front-end (Joe), Implementing db connection routes and connecting to HTML (Christine, Elaine?, Robert?), Create user database (Mia), Create access logs database (Elaine?), Styling, documentation (Robert) |
| Mid-April 2022 | Demo time!|

## Considerations and Things to Discuss/Determine
- People will mostly use the phone for navigation
- Having a star logo in place of writing out Polaris
- Multiple databases? (Should temporary/permanent issues be kept separate?)
- Leaflet is good for front-end
    - Showing locations with issues
    - Elevation

## Timeline
1) Research frameworks and UX
    - UX 
       - sketches (Christine)
       - color scheme (should have good color contrast for accesibility requirements)
       - Figma/WireFrame (Mia, Elaine, Robert)
    - Frameworks
        - Angular (Front End) / Flask (Back End) (Joe, Robert)
        - Flask, MongoDB (Christine)
2) Create contribution page (like Waze)
    - With capability to upvote/downvote
    - Set up database of information to feed into the accessible layer
    - Crowdsourcing of maintenance data
3) Identify API/data to use as the base map
    - This must have the capability to avoid certain places when calculating directions
       - I (Christine) will update group on current progress with this research
    - Potential API: [openrouteservice](https://openrouteservice.org/)
        - [openrouteservice-js](https://github.com/GIScience/openrouteservice-js)
4) Create accessible layer
5) Create elevation layer
