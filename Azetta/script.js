// Vigniètte Activités
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);
// Vigniètte Activités
// Effet music
var track = document.getElementById('track');
var controlBtn = document.getElementById('play-pause');
function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else {
        track.pause();
         //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}
controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});
// Effet Music
// Effet NAVBAR
$(function() {
  var $el,
    leftPos,
    newWidth,
    $mainNav = $(".navbar-nav");

  $mainNav.append("<li id='magic-line'></li>");
  var $magicLine = $("#magic-line");

  $magicLine
    .width($(".active").width())
    .css("left", $(".active a").position().left)
    .data("origLeft", $magicLine.position().left)
    .data("origWidth", $magicLine.width());

  $(".navbar-nav li a").mouseover(
    function() {
      $el = $(this);
      leftPos = $el.position().left;
      newWidth = $el.parent().width();
      $magicLine.stop().animate({
        left: leftPos,
        width: newWidth
      });
    },
    // $(".navbar-nav li a").onmouseout(
    //   function() {
    //     $el = $(this);
    //     leftPos = $el.position().left;
    //     newWidth = $el.parent().width();
    //     $magicLine.stop().animate({
    //       left: leftPos,
    //       width: newWidth
    //     });
    //   },

  );
});
// Effet Machine a acrire
var textAnim=document.getElementById("effect");
new Typewriter(textAnim,{
})
.typeString("Azetta le réseau")
.pauseFor(500)
.start()
//Effet Machine a acrire 
// Effet NAVBAR
