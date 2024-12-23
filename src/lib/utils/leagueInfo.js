/*   STEP 1   */
export const leagueID = "1116049066909179904"; // your league ID
export const leagueName = "Immaculate Football League"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>The mission and goal of this league is to provide the most elite, immersive experience in fantasy football possible. This is a dynasty style league where multiple players are kept from year to year and is designed so that you can build a team whose rewards you will reap from year to year. Trades will be weighed heavily. Waiver wire pickups could turn into franchise cornerstones. The design and layout of this league has been assembled in such a way to offer a long term, year round fantasy football experience that puts you as close to being an NFL general manager as possible. Let us begin.</p>
  <p>
  </p>
  <p>IFL Fantasy Championship Preview: GuntherWheeler vs. Nicky Styles
The stage is set for an epic battle in the IFL Championship, as GuntherWheeler (11-3, #1 overall seed) seeks a historic three-peat against Nicky Styles (9-5, #3 overall seed). With contrasting team compositions and recent performances, this matchup promises fireworks.

Team Overview
GuntherWheeler (11-3, 1st Overall Seed)
Points Scored: 1991.46 (1st)
Key Narrative: Dominant all season, GuntherWheeler aims to cement dynasty status. A balanced roster with explosive upside makes this team the favorite.
Nicky Styles (9-5, 3rd Overall Seed)
Points Scored: 1807.57 (5th)
Key Narrative: The underdog story. Despite finishing second in the Gotham Division, Nicky Styles' team has caught fire at the right time, powered by breakout performances.
Position-by-Position Breakdown
Quarterback
GuntherWheeler: Lamar Jackson (BAL)

Last Week: 207 YD, 3 TDs, 22 rushing yards (22.88 PTS)
Analysis: Jackson's dual-threat ability and three-touchdown game last week highlight his ceiling. Against a weak secondary, he could dominate.
Nicky Styles: Baker Mayfield (TB)

Last Week: 303 YD, 2 TDs, 42 rushing yards (25.07 PTS)
Analysis: Mayfield has been a surprising star, combining solid passing stats with underrated mobility. His high usage gives him a strong floor.
Edge: GuntherWheeler. Jackson's rushing upside gives him the edge.

Running Backs
GuntherWheeler:

Saquon Barkley (PHI): 150 YD, 2 TDs (29.00 PTS)
Devon Achane (MIA): 120 YD, 1 TD, 70 receiving yards (28.00 PTS)
Nicky Styles:

Kyren Williams (LAR): 122 YD, 1 TD (24.90 PTS)
James Conner (ARI): 117 YD, 1 TD, 49 receiving yards (30.60 PTS, Questionable)
Edge: GuntherWheeler. Barkley and Achane are red-hot, with elite volume and explosive playmaking. Conner's health status tilts this in Gunther's favor.

Wide Receivers
GuntherWheeler:

Jameson Williams (DET): 143 YD, 1 TD (25.00 PTS)
CeeDee Lamb (DAL): 105 YD (18.50 PTS, Questionable)
Nicky Styles:

Courtland Sutton (DEN): 50 YD (10.00 PTS)
Keenan Allen (CHI): 141 YD, 1 TD (31.60 PTS)
Edge: Nicky Styles. Allen’s monster game last week and consistency make him the best receiver in this matchup. If Lamb plays, it could even out.

Tight End
GuntherWheeler: Dalton Schultz (HOU)

Last Week: 45 YD, 1 TD (13.50 PTS)
Nicky Styles: Brock Bowers (LV)

Last Week: 99 YD (20.90 PTS)
Edge: Nicky Styles. Bowers' involvement in the Raiders’ offense makes him a matchup nightmare.

Flex
GuntherWheeler: Rico Dowdle (DAL): 51 total yards (7.10 PTS)
Nicky Styles: Jakobi Meyers (LV): 41 yards (6.10 PTS)
Edge: GuntherWheeler. Dowdle’s role in Dallas’ offense gives him the edge over Meyers’ low floor.

Kicker
GuntherWheeler: Jake Moody (SF): 1 FG, 2 XP (5.00 PTS)
Nicky Styles: Cameron Dicker (LAC): 4 FGs, 2 XP (10.00 PTS)
Edge: Nicky Styles. Dicker’s accuracy and long-distance ability make him the better play.

Defense
GuntherWheeler: Detroit (DET): 2 sacks, 2 fumble recoveries (10.00 PTS)
Nicky Styles: Buffalo (BUF): 2 sacks, 1 TD (16.00 PTS)
Edge: Nicky Styles. Buffalo’s playmaking ability is a significant factor.

Keys to Victory
GuntherWheeler:
Explosive RB Play: Barkley and Achane must maintain their dominant form.
Lamar’s Rushing Upside: Jackson needs to capitalize on his legs to maximize points.
CeeDee Lamb’s Health: A fully active Lamb could solidify WR dominance.
Nicky Styles:
Keenan Allen: Another 30+ point performance would be critical.
James Conner’s Availability: Conner’s dual-threat potential is key to keeping pace with Gunther’s RBs.
Buffalo Defense: A repeat of last week’s scoring could swing the matchup.
Prediction
GuntherWheeler’s star-studded lineup and superior depth make them the favorite to secure a third consecutive title. However, if Nicky Styles gets big games from Keenan Allen and the Buffalo defense, the upset is within reach.

Projected Winner: GuntherWheeler, 194.5 – 176.2
<p/>
  `;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    // {
    //   "roster": 1,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    // {
    //   "roster": 2,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
