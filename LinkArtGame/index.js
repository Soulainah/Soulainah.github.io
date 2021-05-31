var textAnim=document.getElementById("effect");
new Typewriter(textAnim,{

})
.typeString("TAPEZ VOTRE PSEUDO")
.pauseFor(500)
.start()

$(document).ready(function(){
 // $("#picture").slideUp(1000);
 // $("#picture").slideDown(1000);
 $("#picture").animate({width:350},"slow")
  $(".input2").click(function(event){
    var inputVal=$(".input1").val();
    if(inputVal == false){
        // bloque l'entrée du boutton
        event.preventDefault();
        alert("veuillez écrire un pseudo")
    }else{
        $("#box").hide();
        $("#box1").html("<h1 class='text-center title1 col-lg-7 col-12'>Bienvenue "+inputVal+"</h1>"+"<br/>"+"<div class='col-lg-7  d-flex flex-column '><img class='mx-auto image-responsive image1' src='Images/logo.png'>"+"<button class=' mx-auto  input2'> "+"<a href='home.html'>"+"Entrer dans "+"notre univers</a> "+"</button>"+"</div>"
        +"<div class='col-lg-12 d-flex justify-content-end'>"+
        "<div >"+"<p class='col-lg-12 style1'> © 2021 Link'ArtGame</p>"+"</div>"+
    "</div>");
       
    }
  })
    
})

// // TEST - JQUERY FONCTIONNE

// $(document).ready(function(){
//     $(".input2").click(function(){
//         alert("j'ai cliqué")
//     })
// })
