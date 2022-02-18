# Outline

Please note that these ideas are still in very rough form and will be improved, edited, and iterated on as we work together!

**Last update:** 2-14-2022, based on team decisions made during our 2/14/2022 meeting

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
| Mid-April 2022 | Demo time!|

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
4) Create accessible layer
5) Create elevation layer