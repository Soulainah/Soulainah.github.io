//container image (background)
var Container_images = document.querySelector('.container_images')
//bouton rejouer 
var Rejouer = document.getElementById('rejouer')
Rejouer.style.display = 'none'; //il ne s'affiche pas
//le texte qui s'affiche si on perd ou on gagne
var Win_texte = document.getElementById('loose_texte')
var Loose_texte = document.getElementById('Win_texte')
//declarer les boutons 
var Boutons = document.querySelectorAll('button')
//déclare variable fond ecran 
 //declare les variable des boutons 
 var Feu = document.getElementById('feu')
 var Eau = document.getElementById('eau')
 var Plante = document.getElementById('plante')
 //declare les variable des images
 var Player_img = document.getElementById('Player_img')
 var Computer_img = document.getElementById('Computer_img')
 //declare les variable des scores 
 var Player_scoreSpan = document.getElementById('Player_score')
 var Computer_scoreSpan = document.getElementById('Computer_score')
 //declare les variable des resultats scores 
 var Player_Score = 5
 var Computer_Score = 5
 //déclarer le tableau d'élément [0,1,2]
 var images_option = ['salameche', 'carapuce', 'bulbizare']
 //j'ai donné le parametre à Pchoice de (i) puis concatener les images 'images/' + la var du tableur + png
 //variable du Joueur (P = player)
 var Player_choice = (i) =>{
     Player_img.src = 'images/' + images_option[i] + '.gif'
     Player_img.value = images_option[i]
     compareHands()
 }
 //variable du Robot (R = Robot)
 var Computer_choice = (i) =>{
     Computer_img.src = 'images/' + images_option[i] + '.gif'
     Computer_img.value = images_option[i]
 }
//math.floor =  arrondir le math.random qui est normalement à virgule
 Feu.addEventListener('click', ()=>{
     Computer_choice(Math.floor(Math.random() * 3))
     Player_choice(0)
     setTimeout(backtoposition, 2500); //(fonction, miliseconde) 
 })
 Eau.addEventListener('click', ()=>{
     Computer_choice(Math.floor(Math.random() * 3))
     Player_choice(1)
     setTimeout(backtoposition, 2500); //(fonction, miliseconde) 
 })
 Plante.addEventListener('click', ()=>{
     Computer_choice(Math.floor(Math.random() * 3))
     Player_choice(2)
     setTimeout(backtoposition, 2500); //(fonction, miliseconde) 
 })

 function backtoposition() {
    Player_img.src = 'images/sacha.png'
    Computer_img.src = 'images/ordinateur.png'
 }

 //FOnction pour comparer les mains Joueur vs Robot
 var compareHands = () => {
     if(Player_img.value == 'salameche'){
         if(Computer_img.value == 'carapuce'){
            Player_Score -= 1
         }
         else if (Computer_img.value == 'bulbizare'){
            Computer_Score  -= 1
         }
         else if (Computer_img.value == 'salameche'){
             
         }
     }
     else if(Player_img.value == 'carapuce'){
         if(Computer_img.value == 'bulbizare'){
            Player_Score -= 1
         }
         else if (Computer_img.value == 'salameche'){
            Computer_Score  -= 1
         }
         else if (Computer_img.value == 'carapuce'){
             
         }
     }
     if(Player_img.value == 'bulbizare'){
         if(Computer_img.value == 'salameche'){
            Player_Score -= 1
         }
         else if (Computer_img.value == 'carapuce'){
            Computer_Score  -= 1
         }
         else if (Computer_img.value == 'bulbizare'){
             
         }
     }
     Player_scoreSpan.textContent = Player_Score
     Computer_scoreSpan.textContent = Computer_Score
     if(Player_Score == 0 || Computer_Score  == 0){
        GameOver()
    }
 }
 //déclarer fonction GameOver
function GameOver() {
    Computer_img.style.visibility = 'hidden'; //pour que l'image s'efface tout en gardant l'espace de la div
    Player_img.style.visibility = 'hidden'; //pour que l'image s'efface tout en gardant l'espace de la div
    Player_scoreSpan.style.visibility = 'hidden'; //pour que l'image s'efface tout en gardant l'espace de la div
    Computer_scoreSpan.style.visibility = 'hidden'; //pour que l'image s'efface tout en gardant l'espace de la div
    

    for(i = 0; i < Boutons.length; i++) { //on a fait une boucle car il y'a plusieur type du meme nom 'boutons'
        let BoutonsAll = Boutons[i];
        BoutonsAll.disabled = true; //enlever leurs fonctionnement (on ne pourra plus cliquer sur les boutons)
    } 

    if (Player_Score == 0) {
        Container_images.classList.add("youloose");
        Loose_texte.textContent = 'Oh nooon Tu as perdu !';
    } else {
        Container_images.classList.add("youwin");
        Win_texte.textContent = 'Yatttaaaaa tu as gagné !';
    }
    
    Rejouer.style.display = 'block'; 
    Rejouer.disabled = false; // le bouton 'rejouer' est activer et visible
    Rejouer.addEventListener('click', NewGame) //ce qui declance une nouvelle fonction rejouer qui remet tout a zero
}
//declarer nouvelle partie et remettre toute nos variable en visible (elles etaient caché pour la fonction GameOver)
function NewGame() {
    Player_Score = 5
    Computer_Score = 5
    Player_scoreSpan.textContent = Player_Score
    Computer_scoreSpan.textContent = Computer_Score
    Computer_img.style.visibility = 'visible'; 
    Player_img.style.visibility = 'visible';
    Player_scoreSpan.style.visibility = 'visible';
    Computer_scoreSpan.style.visibility = 'visible';

    for(i = 0; i < Boutons.length; i++) { //on a fait une boucle car il y'a plusieur type du meme nom 'boutons'
        let BoutonsAll = Boutons[i];
        BoutonsAll.disabled = false; //enlever leurs fonctionnement (on ne pourra plus cliquer sur les boutons)
    } 

    Container_images.classList.remove("youloose", "youwin"); //on enleve les background loose et win pour remettre le fond de base
    Loose_texte.style.visibility = 'hidden';
    Win_texte.style.visibility = 'hidden';
    Rejouer.style.display = 'none'; //on fait disparaitre le bouton rejouer
}