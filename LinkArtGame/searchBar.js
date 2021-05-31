/*searchBar.addEventListener("change",openPage);//   code js Natif
function openPage(){
    var array1={name: "c" ,
    name1:"cast",
    name2:"castelvania"};
   
    //alert(Object.values(array1));
    
var searchBar=document.getElementById("searchBar").value;
var show=document.getElementById("show");
//if((searchBar==="c")||(searchBar==="cast")||(searchBar==="castelvania")||(searchBar==="lord of shadow")){
    //alert("bingo");
    //window.open('file:///sserver/window.html',"a_blank")
    Object.keys(array1).forEach(function(key){
        if(array1[key]===searchBar){
            show.innerHTML="<a style='text-decoration:none;' href=\'window.html\'>voir=</a>"
        }
    }) 
}*/

$(document).ready(function(){
    $("#searchBar").change(function(){//j'ai utilisé l'évenement change je le relie a mon input qui a le id=searchBar
    var castel={//je créé une base de données, avec des tables,chaque table contient les probabilités de recherche pour chaque jeu
    name: "c" ,
    name1:"cast",
    name2:"castlevania",
    name3:"lord of shadow",
    name4:"castle",
    name5:"castelvania",
    };
    var sherlock={
        name: "sh" ,
        name1:"sher",
        name2:"sherlock",
        name3:"Holmes",
        name4:"sherlock holmes",
        name5:"la fille du diable",
        name6:"the devils daughter",
        name7:"cherlock",
        name8:"ch",
        name9:"cherlock holmes",
        name10:"sherlock holme",
        name11:"cherlok holme",
        };
    var darkSoul={
         name: "d" ,
         name1:"dark",
         name2:"soul",
         name3:"darksoul",
         name4:"dark souls",
         name5:"dark soul 2",
         name6:"dark soul",
         name7:"darksoul 2"
        };
    var fable={
         name: "f" ,
         name1:"fa",
         name2:"fable",
         name3:"fable3",
         name4:"fable 3",
        };
    var halfLife={
         name: "h" ,
         name1:"half",
         name2:"life",
         name3:"half life",
         name4:"halflife",
         name5:"half-life",
        };
     var sims={
         name: "s" ,
         name1:"les sims",
         name2:"sims",
         name3:"sim",
         name4:"les sims 4",
         name5:"les s",
         name5:"les sim",
        };
     var asCreed={
         name: "a" ,
         name1:"as",
         name2:"assassin",
         name3:"creed",
         name4:"assassincreed",
         name5:"assassin creed",
         name5:"assassin creed's",
         name6:"odyssey",
         name7:"assissan creed odyssey"
        };
     var farCry={
         name: "f" ,
         name1:"far",
         name2:"cry",
         name3:"far cry",
         name4:"farcry",
         name5:"far cry 6",
         name5:"far-cry6",
         name6:"far-cry-6",
        }; 
     var prince={
         name: "p" ,
         name1:"prin",
         name2:"prince",
         name3:"persia",
         name4:"prince of persia",
         name5:"princeofpersia",
         name5:"prince-of-persia",
         name6:"persian",
        }; 
     var resident={
         name: "r" ,
         name1:"res",
         name2:"resident",
         name3:"evil",
         name4:"resident evil",
         name5:"resident of evil",
         name5:"resident evil7",
         name6:"resident evil 7",
         name7:"resid"
        };
    var last={
         name: "the" ,
         name1:"last",
         name2:"of us",
         name3:"las of us",
         name4:"the last of us",
         name5:"the-last-of-us",
         name5:"us",
         name6:"las",
         };
     var witcher={
         name: "witch" ,
         name1:"the witcher",
         name2:"witcher",
         name3:"the-witcher",
         name4:"w",
         name5:"the-witcher",
         };
     var animal={
         name: "a" ,
         name1:"anim",
         name2:"animal",
         name3:"crossing",
         name4:"animal crossing",
         name5:"animal-crossing",
        };
     var crash={
        name: "c" ,
        name1:"cr",
        name2:"crash",
        name3:"bandicoot",
        name4:"crash bandicoot",
        name5:"crashbandicoot",
        name6:"crash bandicoo",
        name7:"crach",
        name8:"crach bandicoot"
        };
     var mario={
         name: "m" ,
         name1:"mario",
         name2:"super mario",
         name3:"supermario",
         name4:"super",
         name5:"super marion odyssey",
         name6:"odyssey",
         name7:"mario odyssey",
         };
     var monster={
         name: "m" ,
         name1:"mons",
         name2:"monster",
         name3:"hunter",
         name4:"monster hunter",
         name5:"moster",
         name6:"moster hunter",
         name7:"monster hunter rise",
         name8:"rise",
        };
     var pokemon={
         name: "p" ,
         name1:"pokemon",
         name2:"pokemon snap",
         name3:"new pokemon snap",
         name4:"snap",
         name5:"pok",
         name6:"new",
        };
     var zelda={
         name: "z" ,
         name1:"zel",
         name2:"zelda",
         name3:"legend",
         name4:"the legend of zelda",
         name5:"the-legend-of-zelda",
         };
     var asCreedV={
         name: "a" ,
         name1:"as",
         name2:"assassin",
         name3:"creed",
         name4:"assassincreed",
         name5:"assassin creed",
         name5:"assassin creed's",
         name6:"val",
         name7:"valhala",
         name8:"valhalla",
         name9:"assassin creed valhala",
         name10:"assassin creed valhalla"
         }; 
      var dbz={
         name: "d" ,
         name1:"dragon",
         name2:"dbz",
         name3:"ball",
         name4:"dragon ball",
         name5:"dragon-ballz",
         name5:"dragon-ball-z",
         name6:"kakarot",
         name7:"dragon ball z kakarot",
         name8:"dargon ball kakrot"
         }; 
      var gears={
         name: "g" ,
         name1:"gear",
         name2:"gears",
         name3:"gears 5",
         name4:"gears5",
         name5:"gaer",
         name5:"gaers",
         name6:"gea",
         }; 
       var gta={
         name: "g" ,
         name1:"gta",
         name2:"gta5",
         name3:"grand",
         name4:"grand theft",
         name5:"grand theft auto",
         name5:"grand theft auto 5",
        }; 
       var naruto={
         name: "n" ,
         name1:"naruto",
         name2:"naruto shippuden",
         name3:"shippuden",
         name4:"naruto storm4",
         name5:"naruto storm 4",
         name5:"naruto shippuden storm4",
         name6:"storm4",
         name7:"storm 4",
        };     
       var red={
         name: "r" ,
         name1:"red",
         name2:"red dead",
         name3:"redemption",
         name4:"red dead redemption",
         name5:"dead redemption",
         name5:"dead",
         name6:"read dead redempsion",
         };                 
         
    var searchBar = $("#searchBar").val();//je mets la valeur taper dans mon input dans une var..le input doit avoir le id searchBar
    var show=$("#show");//ça correspond à ma div avec l'id =show..il faut crée une div pour afficher le résultat avec id show
  
    Object.keys(castel ,sherlock,darkSoul,fable,halfLife,sims,asCreed,farCry,prince,resident,last,witcher,animal,crash,mario,monster,pokemon,zelda,asCreedV,dbz,gears,gta,naruto,red).forEach(function(key){//j'ai utilisé la méthode Object, vu que mes tables c des variable objets.Object est utilisé avec key, j'ai passé à Object les tables crée en haut comme paramétres, ensuite j'ai bouclé sur les tables avec la méthode forEach qui va chercher à l'intérrieur de ses tables 
        if(castel[key]===searchBar.toLowerCase()){//j'ai utilisé des conditions avec if quand la recherche va avoir un seul résultat, la méthode toLowerCase c pour convertir la recherche de l'utilisateur en miniscule en cas ou il tape en majuscule
            show.html("<a href=\'pc.html\'>1 résultat trouvé...votre bonheur est par ici</a>")//avec la éthode html j'affiche à l'intérrieur de ma div une balise a avec tous son contenu qui va me diriger vers la page en question
        }  if(sherlock[key]===searchBar.toLowerCase()){//quand la table base de donnée sherlock match avec la valeur de l'input elle m'affiche le résultat dans ma div
            show.html("<a  href=\'pc.html\'>1 résultat trouvé...votre bonheur est par ici</a>");
       // }if((searchBar.toLowerCase()===castel[key])&&(searchBar.toLowerCase()===sherlock[key])){
           // show.html("<h1>les résultat trouvé sont:</h1>");
           // return true;

        }if(darkSoul[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'pc.html\'>1 résultat trouvé...votre bonheur est par ici</a>")//à l'intérrieur de mes a j'ai Ajouteré l'attricut style
        }if(fable[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'pc.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(halfLife[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'pc.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(sims[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'pc.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(asCreed[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'ps4.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(prince[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'ps4.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(resident[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'ps4.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(last[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'ps4.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(witcher[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'ps4.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(animal[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'switch.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(crash[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'switch.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(mario[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'switch.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(monster[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'switch.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(pokemon[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'switch.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(zelda[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'switch.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(asCreedV[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'xbox.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(dbz[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'xbox.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(gears[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'xbox.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(gta[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'xbox.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(naruto[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'xbox.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(red[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'xbox.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }if(farCry[key]===searchBar.toLowerCase()){
            show.html("<a  href=\'ps4.html\'>1 résultat trouvé...votre bonheur est par ici</a>")
        }
        else if((searchBar.toLowerCase()===castel[key])&&(searchBar.toLowerCase()===crash[key])){// le else if c quand deux jeux ont la même léttres de debut de recherche ou ont des mots similaires,pour la faire fonctionner j'ai utiliser return true
            show.html("<h4 style='color:gray';>les résultats trouvés sont:<br> <a  href=\'pc.html\'>castlevania</a><br><a  href=\'switch.html\'>crash bandicoot</a></h4>");
            return true;
        }else if((searchBar.toLowerCase()===fable[key])&&(searchBar.toLowerCase()===farCry[key])){
            show.html("<h4 style='color:gray'>les résultats trouvés sont:<br> <a  href=\'pc.html\'>fable 3</a><br><a  href=\'switch.html\'>far cry 6</a></h4>");
            return true;
        }else if((searchBar.toLowerCase()===prince[key])&&(searchBar.toLowerCase()===pokemon[key])){
            show.html("<h4 style='color:gray'>les résultats trouvés sont:<br> <a  href=\'ps4.html\'>prince of persia 'les sables de temps'</a><br><a  href=\'switch.html\'>pokemon snap</a></h4>");
            return true;
        }else if((searchBar.toLowerCase()===mario[key])&&(searchBar.toLowerCase()===monster[key])){
            show.html("<h4 style='color:gray'>les résultats trouvés sont:<br> <a  href=\'switch.html\'>super mario odyssey</a><br><a  href=\'switch.html\'>monster hunter rise</a></h4>");
            return true;
        }else if((searchBar.toLowerCase()===dbz[key])&&(searchBar.toLowerCase()===darkSoul[key])){
            show.html("<h4 style='color:gray'>les résultats trouvés sont:<br> <a  href=\'xbox.html\'>dragon ball Z 'kakarot'</a><br><a  href=\'pc.html\'>dark souls 2</a></h4>");
            return true;
        }else if((searchBar.toLowerCase()===gears[key])&&(searchBar.toLowerCase()===gta[key])){
            show.html("<h4 style='color:gray'>les résultats trouvés sont:<br> <a  href=\'xbox.html\'>gears 5</a><br><a  href=\'xbox.html\'>grand theft auto 5</a></h4>");
            return true;
        }else if((searchBar.toLowerCase()===red[key])&&(searchBar.toLowerCase()===resident[key])){
            show.html("<h4 style='color:gray'>les résultats trouvés sont:<br> <a  href=\'xbox.html\'>red dead redemption</a><br><a  href=\'ps4.html\'>resident evil 7</a></h4>");
            return true;
        }else if((searchBar.toLowerCase()===animal[key])&&(searchBar.toLowerCase()===asCreed[key])&&(searchBar.toLowerCase()===asCreedV[key])){
            show.html("<h4 style='color:gray'>les résultats trouvés sont:<br> <a  href=\'switch.html\'>animal crossing</a><br><a  href=\'ps4.html\'>assassin creed odyssey</a><br><a  href=\'xbox.html\'>assassin creed valhalla</a></h4>");
            return true;
        }else if((asCreed[key])&&(searchBar.toLowerCase()===asCreedV[key])){
            show.html("<h4 style='color:gray'>les résultats trouvés sont:<br><a  href=\'ps4.html\'>assassin creed odyssey</a><br><a  href=\'xbox.html\'>assassin creed valhalla</a></h4>");
            return true;
        }
       
    }); 
});

})


$(document).ready(function(){//fonction relier avec mon <a>X</a> pour effacer le input et recharcger la page
$("#refrech").click(function(){
   $("#searchBar").val("");
    location.reload();
});
});