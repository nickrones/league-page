<script>
    import { dues } from '$lib/utils/helper';
    let one, oneOne, oneOneOne, oneTwo, oneTwoOne, oneTwoTwo, oneTwoThree, oneTwoFour, oneTwoFive, oneThree;
    let two, twoOne, twoTwo, twoThree;
    let three, threeOne;
    let four, fourOne, fourTwo;
    let five, fiveOne;
    let six, sixOne, sixTwo, sixThree;
    let seven, sevenOne, sevenTwo, sevenThree;

    const goToSection = (section) => {
        const top = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({left: 0, top, behavior: 'smooth'});
    }
</script>

<style>
    .constitution {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
    }

    h3 {
        text-decoration: underline;
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .underscore {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .positionMaximums td {
        min-width: 3em;
    }

    .noUnderscore {
        text-decoration: none;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
    }
</style>

<div class="constitution">
    <p> 






Scheduling & Divisions
The league will be split into three divisions of 4 teams 
League regular season will run from weeks 1-14 of the NFL season


Team Of The Week
A tasty twist to keep interest throughout the whole season
Each week, the highest scoring team will receive a payout
This allows continued interest week to week even for non playoff teams and rewards those who are constantly looking to put the best lineup together

Playoffs
Weeks 15,16 & 17 will be designated playoff and championship weekend
Six (6) teams will qualify yearly for the playoffs
Three division winners will automatically qualify with the first two highest seeds receiving first round byes. The remaining three teams will be filled by best records (tie breaker is total points scored followed by head to head record)
Championship game is held in week 17
A league trophy / awards will be assembled yearly by commissioner

PAYOUTS
Entry Fee: $300 ($3,600 total payout)
League Champion: $1800
Runner Up: $600
1st Ammendment As Proposed by Commissioner Varao
- 3 Divisions = Payouts $200, $200, $200 
Top 2 Division Winners Receive 1st Round BYES
Reg. Season League Scoring Champion: $200
Team Of The Week: $20 payout each week ($260 total)
Remaining league dollars will be used to purchase a yearly engraved trophy for the league. It will be the same style and format each year to allow each champion to always have their respective years award
Weekly payouts will be issued immediately (exactly like Calcutta for those who have participated)
Yearly payouts & division winners will be sent following the championship game

I hope if you are still reading that you see yourself as a future member of this league. As commissioner, it is my goal to create the most entertaining fantasy football experience possible, and I’d love for you to be a part of it! 

Thank you, and god bless the Patriots
Commissioner
Matthew J. Varao
</p>
</div>







<div class="constitution">
    <h1 class="noUnderscore">IMMACULATE FOOTBALL LEAGUE CONSTITUTION</h1>
    
    <h2 class="noUnderscore">TABLE OF CONTENTS</h2>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(one)}>Section 1: Foreword</h3>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(two)}>Section 2: Platform For Play</h3>
        
    <h3 class="noUnderscore clickable" on:click={() => goToSection(three)}>Section 3: Initial Draft</h3>
    
    <h3 class="noUnderscore clickable" on:click={() => goToSection(four)}>Section 4: Following Season(s) Draft</h3>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(five)}>Section 5: Yearly Keepers</h3>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(six)}>Section 6: Keeper Due Date</h3>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Section 7: Team Rosters & Free Agency</h3>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Section 8: League Finances</h3>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Section 9: League Finances</h3>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Section 10: League Finances</h3>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Section 11: League Finances</h3>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Section 12: League Finances</h3>

    <h3 class="noUnderscore clickable" on:click={() => goToSection(seven)}>Section 13: League Finances</h3>
    
    <hr />
    
    <h2 class="sectionHeading" bind:this={one}>Section 1 Foreword</h2>
        
    <p>As a foreword to this league, and its constitution, I would like to state clearly that the mission and goal of this league is to provide the most elite, immersive experience into fantasy football possible. This is a dynasty style league where multiple players are kept from year to year and is designed so that you can build a team whose rewards you will reap from year to year. Trades will be weighed heavily. Waiver wire pickups could turn into franchise cornerstones. The design and layout of this league has been assembled in such a way to offer a long term, year round fantasy football experience that puts you as close to being an NFL general manager as possible. Let us begin….</p>

       
    <h2 class="sectionHeading" bind:this={two}>Section 2 Platform For Play</h2>

    <p>The league will be run on the “sleeper” app available on iPhone as well as all Android devices. It is 100% free and was tested this year in a one year league I participated in. It was high quality, enjoyable, and very user friendly. It also allows for a variety of individual league customization within the app for dynasty leagues which I was quite impressed with. I’m certain it would be received well by participants.<p/>
    
    <h2 class="sectionHeading" bind:this={three}>Section 3 Initial Draft</h2>

    <ul>
	<li> 12 team league depending on total initial participants</li>
	<li>Snake style draft (1-12 then 12 back to 1)</li>
	<li>Inaugural draft will have all 12 participants put into a digital randomizer (random.org) or a physical bingo ball style (if desired by participants)</li>
	<li>Snake style draft will then resume as normal with the 1st overall pick</li>
    </ul>
    
    <h2 class="sectionHeading" bind:this={four}>Section 4 Following Season(s) Draft</h2>
    
    <ul>
	<li>Draft order at the end of the season will follow NFL procedure plus a lottery system.</li>
	<li>Last 6 teams (i.e non playoff teams) will be randomized in random.org for the upcoming years draft position. Each of the bottom six teams will have their name entered a certain amount of times into the random depending on their finish in the league. The list will be as follows:</li>
		<ul>
			<li>12th place (last) - 10 names in the random lottery </li>
			<li>11th place - 7 names in the random</li>
			<li>10th place - 5 names in the random</li>
			<li>9th place - 3 names in the random</li>
			<li>8th place - 2 names in the random</li>
			<li>7th place 1 name in the random</li>
		</ul>
	<li>Snake draft will then follow on draft day with whatever rookies and free agents that have not been kept are available that year</li>

	<p> *NOTE </p>
	<li>ALL draft picks for all teams are tradeable. However, should you choose to trade any future pick (example - trading a 2021 3rd round pick) you will be required to provide that specific years league entry fee to the commissioner on the day of the trade before it is processed. This is to ensure that draft picks are not traded recklessly and provide adequate protection to other league members should an individual trades picks and choose not to participate in the following seasons. The goal here is for long term participation amongst the core group of people. Not to scam the league and take off like a whiny bitch after trading picks :) There is absolutely NO exception to this rule.</li>
    </ul> 

    <h2 class="sectionHeading" bind:this={five}>Section 5 Yearly Keepers</h2>
    
    <p>Depending on where a team finishes in the league will determine how many players they are allowed to keep. </p>

    <p> ** Bottom 6 (non playoff teams) are ordered for the draft lottery according to their standing upon the conclusion of the REGULAR SEASON **</p>


	<ul>
	<li>Teams finishing in spots 1-4 (champion & next 3): >Keep 4 players</li>
	<li>Teams finishing in spots 5-8 (middle of the pack): >Keep 5 players</li>
	<li>Teams finishing in spots 9-12 (bottom 4): >Keep 6 players</li>
	</ul>

   <p>
	4th Ammendment (2023 “The Styles Rule aka Value alert") - Only the 6th keeper slot from a bottom 4 team may be used for draft capital compensation prior to the league draft. NULL / VOID

	6th Ammendment (2023 “The K2 Rule”) - Any team may use a keeper slot as payment to extend a contract year player instead of paying the 1st round pick penalty.

	3rd Ammendment (Aug 1 2022) As proposed by the Ziltoid: Keeper “slots” can be traded as an asset to any other league owner.
   </p>

   <p>Yearly Restrictions</p>
   <ul>
   <li>In an effort to keep the league as competitive (and interesting) as possible, there will be slight restrictions as to how many years in a row you may keep a given player. A “contract” if you will.</li>
   <li>Each team is allowed to keep any given player for 2 seasons, consecutively, without penalty.</li>
   <li>Should any team request to keep a player for a 3rd consecutive year, they will forfeit their 3rd round draft selection for that upcoming draft
   </ul>
   <p>2nd Ammendment  (Aug 1 2022) As proposed by the Ziltoid & unanimously voted</p>
   <ul>
   <li>Keeping a player for 3 consecutive years will result in a 1st round pick penalty.</li>
   <li>Keeping a 2nd player for 3 consecutive years will result in a 2nd round pick penalty.</li>
   </ul>
   <p>5th FIF AMMENDMENT (Aug 14 2023)</p>
   <ul>
   <li>All draft pick related penalties as it pertains to keepers and keeping any given player(s) for 3 years or longer will be an automatic 1st round pick penalty of that upcoming draft. Multiple players kept for 3+ years will demand additional 1st round pick compensation.</li>
   <p>*NOTE* when a player is traded, their “contract” resets and will be able to be kept for 2 years without penalty on their new roster</p>
   </ul>

    <h2 class="sectionHeading" bind:this={six}>Section 6 Keeper Due Date</h2>
    
    <p>Your keepers for the year are due 1 week before the draft. Keeper submissions can be sent via email, text message, USPS, fax, or sexy private direct message to commissioner Matthew Varao.</p>
    
    <h2 class="sectionHeading" bind:this={seven}>Section 7 Team Rosters & Free Agency</h2>
	<ul>
	<li>Roster size & positions will be very standard throughout the year</li>
	<li>15 player total roster size (9 starters & 6 bench)</li>
	<li>Roster layout is as follows</li>
	<li>QB, RB, RB, WR, WR, TE, FLEX, K, DEF -  SIX (6) BENCH - 2 IR Slots</li>
	</ul>

    <h2 class="sectionHeading" bind:this={seven}>Section 8 Team Rosters & Free Agency</h2>
	<ul>
	<li>Trades will be processed at the discretion of the commissioner</li>
	<li>Barring a unanimous veto from the league, trades will always pass except in the instances of openly recognizable collusion by the parties involved in the trade</li>
	</ul>

    <h2 class="sectionHeading" bind:this={seven}>Section 9 Scoring</h2>

<p> (PPR league) </p>

<p>Passing Scoring</p>
<ul>
<li>Passing Yards: 1 point per 25 yards</li>
<li>Passing Touchdowns: 4 points</li>
<li>Interceptions: -1 points</li>
<li>Fumble Lost: -2 point</li>
<li>300 - 399 Yards: 1 Point</li>
<li>400+ Yards: 1 Point</li>
</ul>

<p>Rushing Scoring </p>
<ul>
<li>Rushing Yards: 1 point per 10 yards</li>
<li>Rushing Touchdowns: 6 points</li>
<li>100+ Yards: 1 Point</li>
<li>Rushing 1st Down: 0.25 Point</li>
<li>40+ Yard Rush: 1 Point</li>
<li>40+ Yard TD: 1 Point</li>
</ul>

<p>Receiving Scoring </p>
<ul>
<li>Receptions: 1 point</li>
<li>Receiving Yards: 1 points per 10 yards</li>
<li>Receiving Touchdowns: 6 points</li>
<li>100+ Yards: 0.5 Point</li>
<li>40+ Yard Rec: 1 Point</li>
<li>40+ Yard TD: 1 Point</li>
</ul>

<p>Kicking Scoring</p>
<ul>
<li>Extra Points: 1 point</li>
<li>Missed Extra Point: -1 points</li>
<li>Field Goal 17-39 Points: 3 points</li>
<li>Field Goal 40-49 Points: 4 points</li>
<li>Field Goals 50-59 Points: 5 points</li>
<li>Field Goals 60+ Points: 6 points</li>
<li>Missed Field Goal: -1 points</li>
</ul>

<p>Defense / Special Teams</p>
<ul>
<li>Blocked Kick: 2 points</li>
<li>Safety: 2 points</li>
<li>Forced Fumble: 1 point</li>
<li>Fumble Recovery: 2 point</li>
<li>Interception: 2 points</li>
<li>Sack: 1 point</li>
<li>0 Points Allowed: 10 points</li>
<li>1-6 Points Allowed: 8 points</li>
<li>7-13 Points Allowed: 6 points</li>
<li>14-20 Points Allowed: 3 points</li>
<li>21-27 Points Allowed: 1 point</li>
<li>28-34 Points Allowed: 0 points</li>
<li>35-41 Points Allowed: -4 points</li>
</ul>



    <h2 class="sectionHeading" bind:this={seven}>Section 10 Scheduling & Divisions</h2>

    <h2 class="sectionHeading" bind:this={seven}>Section 11 Team Of The Week</h2>

    <h2 class="sectionHeading" bind:this={seven}>Section 12 Playoffs</h2>

    <h2 class="sectionHeading" bind:this={seven}>Section 13 Payouts</h2>





</div>
