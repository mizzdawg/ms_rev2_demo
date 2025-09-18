const games = [
  {
    "divName": "Over 30 - 1 North",
    "homeTeamName": "Irish Village",
    "homeTeamLogo": "images/lp.png",
    "awayTeamName": "CDF Azzurri",
    "awayTeamLogo": "images/mc.png",
    "location": "Foss Park Somerville MA (turf)",
    "score": "3 - 2",
    "verified": true
  },
  {
    "divName": "Over 30 - 1 North",
    "homeTeamName": "Meadowlark FC",
    "homeTeamLogo": "images/chelsea.png",
    "awayTeamName": "Kendall Wanderers",
    "awayTeamLogo": "images/arsenal.png",
    "location": "Danehy Field 1 Cambridge MA (turf)",
    "score": "2 - 0",
    "verified": false
  },
  {
    "divName": "Over 30 - 1 North",
    "homeTeamName": "Eastern FC",
    "homeTeamLogo": "images/villa.png",
    "awayTeamName": "Loco Gunners",
    "awayTeamLogo": "images/nc.png",
    "location": "Malden Catholic High School Malden MA (turf)",
    "score": "1 - 3",
    "verified": false
  },
  {
    "divName": "Over 30 - 1 North",
    "homeTeamName": "Groton House FC",
    "homeTeamLogo": "images/nf.png",
    "awayTeamName": "MORAIS FC",
    "awayTeamLogo": "images/bha.png",
    "location": "Madison Park High School Boston MA (turf)",
    "score": "2 - 2",
    "verified": true
  }
];



function showSchedules() {

  const fxTableTmpl = document.querySelector("#match-list-section");
  const fxTableTrTmpl = document.querySelector("#tmpl-match-list-ul-li");

  const fxTableClone = fxTableTmpl.content.cloneNode(true);
  const fxTableTbody = fxTableClone.querySelector("ul");

  games.forEach(game => {
    const fxTableTrClone = fxTableTrTmpl.content.cloneNode(true);


    const tdHomeTeam = fxTableTrClone.querySelector(".li-home-team");
    const tdAwayTeam = fxTableTrClone.querySelector(".li-away-team");
    const tdDateLocation = fxTableTrClone.querySelector(".li-location");

    const liHomeLogo = fxTableTrClone.querySelector(".li-home-team-logo");
    const liAwayLogo = fxTableTrClone.querySelector(".li-away-team-logo");

    tdHomeTeam.innerHTML = game.homeTeamName;
    liHomeLogo.src = game.homeTeamLogo;

    tdAwayTeam.innerHTML = game.awayTeamName;
    liAwayLogo.src = game.awayTeamLogo;

    tdDateLocation.innerHTML = game.location;


    // tdDateLocation.innerHTML = game.game_date + "<br><a href='http://localhost:8000/edit-game.html?division=" + params.get("division") + "&season_id=" + params.get("season") + "&id=" + game.id + "'>Edit</a>";
    // tdDateLocation.innerHTML = game.game_date + "<br><a href='http://othsladmin.testdemos.net/edit-game.html?id=" + game.id + "'>Edit</a>";
    
    fxTableTbody.appendChild(fxTableTrClone);

  });

  const fxTableDiv = document.querySelector("#main-section-container");

  fxTableDiv.appendChild(fxTableClone);  
}

showSchedules();