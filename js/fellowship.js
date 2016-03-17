console.log("Fellowship loaded.");


var makeMiddleEarth = function () {
  // var section = "<section id='middle-earth'></section>"
  // var section =
  var $section = $("<section>").attr("id", "middle-earth").addClass('blah')
  // var articles =  "<article>The Shire</article>"
  //               + "<article>Rivendell</article>"
  //               + "<article>Mordor</article>"
  $("body").append($section)


  var articles
  for (var i=0;i<lands.length; i++) {
    $("section").append("<article>" + lands[i] + "</article>")
  }

  $("section").append(articles)
  $("article").addClass('land')
}

var makeHobbits = function () {
  var hobbitsList = $("<ul>").attr("id", "hobbits")
  var individualHobbits = []
  for (var i=0; i<hobbits.length; i++) {
    individualHobbits.push($("<li>").addClass("hobbit").html(hobbits[i]))
  }

  $("article.land").first().append(hobbitsList) //.eq(element #)
  $("#hobbits").append(individualHobbits)
}

makeMiddleEarth()
makeHobbits()

var keepItSecretKeepItSafe = function () {
  var theRing = $("<div>").attr("id", "the-ring").addClass('magic-imbued-jewelry')
  $("li.hobbit:contains(Frodo)").append(theRing)
}

keepItSecretKeepItSafe()


