// AU CLICK SUR PETIT PANIER MIGNON OUVRIR LE PANIER
// + Les function pour afficher et cacher toutes nos divs

$(document).ready(function () {
    $("#panierClick").click(function () {
        $("#thePanier").css("visibility", "visible") // MA DIV PANIER S'AFFICHE 
        $("#homepage, #pagePC, #pagePS4, #pageSwitch, #pageXbox, #pageContact ").css("visibility", "hidden")

    })

    $("#openPS4").click(function () {
        $("#pagePS4").css("visibility", "visible") // MA DIV PANIER S'AFFICHE 
        $("#homepage, #pagePC, #thePanier, #pageSwitch, #pageXbox, #pageContact ").css("visibility", "hidden")

    })

    $("#openXBOX").click(function () {
        $("#pageXbox").css("visibility", "visible") // MA DIV PANIER S'AFFICHE 
        $("#homepage, #pagePC, #thePanier, #pageSwitch, #pagePS4, #pageContact").css("visibility", "hidden")

    })

    $("#openSWITCH").click(function () {
        $("#pageSwitch").css("visibility", "visible") // MA DIV PANIER S'AFFICHE 
        $("#homepage, #pagePC, #thePanier, #pageXbox, #pagePS4, #pageContact").css("visibility", "hidden")

    })

    $("#openPC").click(function () {
        $("#pagePC").css("visibility", "visible") // MA DIV PANIER S'AFFICHE 
        $("#homepage, #pageXbox, #thePanier, #pageSwitch, #pagePS4, #pageContact").css("visibility", "hidden")

    })

    $("#openhome").click(function () {
        $("#homepage").css("visibility", "visible") // MA DIV PANIER S'AFFICHE 
        $("#pagePC, #pageXbox, #thePanier, #pageSwitch, #pagePS4, #pageContact").css("visibility", "hidden")

    })

    $("#buttonCloseCart").click(function () {
        $("#thePanier").css("visibility", "hidden")
        $("#homepage").css("visibility", "visible")
    })

    // bouton En savoir plus sur Xbox
    $("#plusXbox").click(function () {
        $("#pageXbox").css("visibility", "visible")
        $("#homepage, #pagePC, #thePanier, #pageSwitch, #pagePS4, #pageContact").css("visibility", "hidden")
    })
    // bouton En savoir plus sur Ps4
    $("#plusPs4").click(function () {
        $("#pagePS4").css("visibility", "visible") // MA DIV PANIER S'AFFICHE 
        $("#homepage, #pagePC, #thePanier, #pageSwitch, #pageXbox, #pageContact ").css("visibility", "hidden")

    })
    // bouton En savoir plus sur PC
    $("#plusPc").click(function () {
        $("#pagePC").css("visibility", "visible") // MA DIV PANIER S'AFFICHE 
        $("#homepage, #pageXbox, #thePanier, #pageSwitch, #pagePS4, #pageContact").css("visibility", "hidden")

    })
    // bouton En savoir plus sur Switch
    $("#plusSwitch").click(function () {
        $("#pageSwitch").css("visibility", "visible") // MA DIV PANIER S'AFFICHE 
        $("#homepage, #pagePC, #thePanier, #pageXbox, #pagePS4, #pageContact").css("visibility", "hidden")

    })

    // page contact
    $("#openContact").click(function () {
        $("#pageContact").css("visibility", "visible") // MA DIV PANIER S'AFFICHE 
        $("#homepage, #pagePC, #thePanier, #pageXbox, #pagePS4, #pageSwitch").css("visibility", "hidden")

    })

})



if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready() //au chargement on lance la fonction ready()
}
//fonction qui initialise tout les tableaux
function ready() {
    //tableau qui stocke les bouton supprimer
    var removeCartItemButtons = document.getElementsByClassName('btn-light')
    //la boucle permet d'Ajouterer un évênement à chaques boutons crés
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem) //voir ligne 53.
    } //pour cibler tout les boutons avec une boucle avec un evenement "supprimer" au clique !

    //tableau qui stock tout les inputs
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    //la boucle permet d'Ajouterer un évênement à chaques boutons crés
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        //event change, qui va se déclancher lorsque la valeur de nos inputs change
        input.addEventListener('change', quantityChanged)// voir ligne 64
    } //pour cibler les inputs avec une boucle (la quatitée) avec un evenement "change" !

    //tableau qui stock les boutons pour Ajouterer
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    //la boucle permet d'Ajouterer un évênement à chaques boutons crés
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)//voir ligne74
    } //pour cibler les boutons "Ajouter au panier" avec une boucle avec un evenement "Ajouterer" au clique ! (bouton existante sur html)

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
    //pour valider nos articles au clique ca actualise de zero (btn-purchase = valider notre panier) (bouton existante sur html)
}


//fonction liée au bouton validé
function purchaseClicked() {
    alert('Merci pour vos achats, à bientot !')
    location.reload();
    //je cible ma div cart-itemS, je la stock dans une var
    var cartItems = document.getElementsByClassName('cart-items')[0]
    //utilisation d'un boule
    //TANT QUE cartItems à des enfants 
    while (cartItems.hasChildNodes()) {
        //tu exécutes cette fonction, tu enlèves le 1er enfant de ma div.
        cartItems.removeChild(cartItems.firstChild)
    }
    //MAJ du total
    updateCartTotal()
} //si le parent (hasChildNodes) est true tu enlèves l'enfant (removeChild) = en gros valider le panier avec les articles selectionnés puis le refresh

//Au event CLIC, la fonction removeCartItem
//parametre event = clic
function removeCartItem(event) {
    //on déclare une var buttonClicked dans laquelle on stocke la ref du btn qui a été cliqué
    //le ".target" cible exactement le btn cliqué
    var buttonClicked = event.target
    //Supprime la div "gd-parent du bouton".
    buttonClicked.parentElement.parentElement.remove()
    //MAJ du prix total
    updateCartTotal()
} //supprime le parent de l'article dans notre panier au clique du bouton "remove" (supprimer)

function quantityChanged(event) {
    //on cible l'input a l'évenement change
    var input = event.target
    //SI ce n'est pas un nombre ou si inférieur a 0
    if (isNaN(input.value) || input.value <= 0) {
        //minimum 1 arcticle
        input.value = 1
    }
    updateCartTotal()
} //pour changer la quantitée des articles dans le panier 

function addToCartClicked(event) {
    //on cible notre btn 
    var button = event.target
    //on cible la div Gd parent du bouton
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    //fonction avec 3 paramètres qui son nos 3 var
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
    alert(`le jeu ${title} a été ajouté au panier`)
} //Ajouter de notre arcticle dans notre panier au clique (titre + prix + image)

//Fonction qui s'applique à nos 3 paramètres
function addItemToCart(title, price, imageSrc) {
    //Enfant de cartItemS
    //Création de la div cartRow, elle contient toutes les infos de l'article Ajouteré au panier.
    var cartRow = document.createElement('div')//creation d'une div avec les propriétés de la div 'cart-row' (titre + prix + quatité)
    //On Ajoutere une class à cette div
    cartRow.classList.add('cart-row')
    //On crée un tableau dans lequel on stock ENFANTS de cartItemS (les cartROW)
    var cartItems = document.getElementsByClassName('cart-items')[0] //div vide dans html ou on va push la div "cart-row"
    //On à un tableau avec les éléments <span>
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    //On utilise une boucle pour parcourir tout les titres
    for (var i = 0; i < cartItemNames.length; i++) {
        //SI le titre est == à la varible title,
        if (cartItemNames[i].innerText == title) {
            alert('Le jeu a déjà été Ajouté au panier')
            return true;
        }
    }
    //creation d'une div avdc toute les infos de l'article choisi 
    // code qui sera inseré dans notre div creee dans Le JS 'cart-row'
    var cartRowContents = `<div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="140">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column mb-3">
            <input class="cart-quantity-input" type="number" value="1">
            <button style="width: 200px;" class="btn btn-light" type="button">SUPPRIMER</button>
        </div>`

    //On envoie le contenue de cartRow dans notre cartRow
    cartRow.innerHTML = cartRowContents
    //la carte s'affiche en 1er
    cartItems.append(cartRow)
    //Au clic sur le btn supprimé DANS LA CARTE , toute la carte est supprimé
    cartRow.getElementsByClassName('btn-light')[0].addEventListener('click', removeCartItem)
    //Au Change, la quantité change
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
function updateCartTotal() { //fonction pour le total à chaque item Ajouteré au panier
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row') //div avec les : titres, prix, quantité
    var total = 0

    //Variable pour stocker le nombre d'item qui sont dans notre panier
    let numberItemInCart = cartRows.length
    // method html() pour envoyer la value de numberItemInCart dans la span prévu à cet effet
    $("#numberItemCart").html(numberItemInCart)


    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0] //pour le prix
        console.log("maman le prix", priceElement)
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0] //pour la quantité
        var price = priceElement.innerHTML
        // var price = parseFloat(priceElement.innerText.replace('$', '')) //on remplace l'espace vide par le $
        console.log("le prix", price)
        var quantity = quantityElement.value //valeur du nombre d'article choisi
        total = total + (price * quantity) //le prix x quantité = total
    }
    console.log(total)
    total = Math.round(total * 100) / 100 //pour arreter à deux chiffres apres la virgule
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total //total du prix du panier 
}