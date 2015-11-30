$(function() {
    $("#progressbar").progressbar({
      value: 0
    });

    var seahawksPlayers=[
        "Cliff Avril",
        "Alvin Bailey",
        "Doug Baldwin",
        "Michael Bennett",
        "Justin Britt",
        "Marcus Burley",
        "Kam Chancellor",
        "Frank Clark",
        "Derrick Coleman",
        "B.J. Daniels",
        "Demarcus Dobbs",
        "Garry Gilliam",
        "Mark Glowinski",
        "Jimmy Graham",
        "Clint Gresham",
        "Steven Hauschka",
        "Cooper Helfet",
        "Jordan Hill",
        "Bruce Irvin",
        "Fred Jackson",
        "Tarvaris Jackson",
        "Lemuel Jeanpierre",
        "Jermaine Kearse",
        "Jeremy Lane",
        'Patrick Lewis',
        "Tyler Lockett",
        "Marshawn Lynch",
        "Cassius Marsh",
        "Kelcie McCray",
        "Brandon Mebane",
        "Mike Morgan",
        'Drew Nowak',
        "Russell Okung",
        "Kevin Pierre-Louis",
        "Eric Pinkins",
        "Thomas Rawls",
        "Paul Richardson",
        "Ahtyba Rubin",
        "Jon Ryan",
        "DeShawn Shead",
        "Richard Sherman",
        "Kevin Smith",
        "Tye Smith",
        "Kristjan Sokoli",
        "J.R. Sweezy",
        "Steven Terrell",
        "Earl Thomas",
        "Will Tukuafu",
        "Bobby Wagner",
        "Cary Williams",
        "Luke Willson",
        "Russell Wilson",
        "K.J. Wright",
    ];
    $("#player").autocomplete({
        source:seahawksPlayers
    });
});


function runEffect() {
  // get effect type
  var selectedEffect = $("#effectTypes").val();

  // most effect types need no options passed by default
  var options = {};
  // some effects have required parameters
  if (selectedEffect === "scale") {
    options = { percent: 0 };
  } else if (selectedEffect === "transfer") {
    options = { to: "#button", className: "ui-effects-transfer" };
  } else if (selectedEffect === "size") {
    options = { to: { width: 200, height: 60 } };
  }

  // run the effect
  $("#effect").effect( selectedEffect, options, 500, callback );
};

// callback function to bring a hidden box back
function callback() {
  setTimeout(function() {
    $("#effect").removeAttr("style").hide().fadeIn();
  }, 1000 );
};

function changeText() {
  var selectedEffect = $("#effectTypes").val();
  $("#title").text(selectedEffect.toUpperCase());
  $("#text").text("This will demo the " +  selectedEffect + " effect!");
}

function progress() {
  var progressbar = $("#progressbar");
  var val = progressbar.progressbar("value");
  progressbar.progressbar( "value", val + 1 );
  if (val <= 100) {
    setTimeout(progress, 50);
  }
  
}
