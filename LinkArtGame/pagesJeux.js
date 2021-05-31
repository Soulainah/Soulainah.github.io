
$(document).ready(function () {
    // ------- XBOX -------

    //ASSASSIN'S CREED VALHALLA
    //au clic sur mon image
    $('#assassinImageValhalla').click(function () {
        // alert("hello")
        //les propriété css de la div du détail du jeu change
        $('#xboxAssassin').css({
            //le coin gauche de la div se retrouve au mileu de l'élément parent
            'left': '50%',
            //le coin gauche se déplace de 50% supplémentaire sur la gauche
            //ma div se retrouve centrée sur l'axe X
            'transform': 'translate(-50%)'
        });
        $('#xboxAssassin').addClass('changeGamePage1');
        //l'opacité baisse
        $('.gamePresentation').css('opacity', '0.5')
    });
    //Au clic sur la flèche
    $('.arrowLeft ,.arrowLeftMobile').click(function () {
        //l'opacité remonte
        $('.gamePresentation').css('opacity', '1');
        //la div reviens a son point de départ et disparait de l'écran
        $('#xboxAssassin').css('left', '-100%');
    });

    //DRAGON BALL Z
    $('#dbzImage').click(function () {
        $('#xboxDbz').css({
            'left': '50%',
            'transform': 'translate(-50%)'
        });
        $('#xboxDbz').addClass('changeGamePage3');
        $('.gamePresentation').css('opacity', '0.5')
    });
    $('.arrowLeft ,.arrowLeftMobile').click(function () {
        $('.gamePresentation').css('opacity', '1');
        $('#xboxDbz').css('left', '-100%');
    });

    //GEAR 5
    $('#gearImage').click(function () {
        $('#xboxGear').css({
            'left': '50%',
            'transform': 'translate(-50%)'
        });
        $('#xboxGear').addClass('changeGamePage4');
        $('.gamePresentation').css('opacity', '0.5')
    });
    $('.arrowLeft ,.arrowLeftMobile').click(function () {
        $('.gamePresentation').css('opacity', '1');
        $('#xboxGear').css('left', '-100%');
    });

    //GTA
    $('#gtaImage').click(function () {
        $('#xboxGta').css({
            'left': '50%',
            'transform': 'translate(-50%)'
        });
        $('#xboxGta').addClass('changeGamePage5');
        $('.gamePresentation').css('opacity', '0.5')
    });
    $('.arrowLeft ,.arrowLeftMobile').click(function () {
        $('.gamePresentation').css('opacity', '1');
        $('#xboxGta').css('left', '-100%');
    });

    //NARUTO
    $('#narutoImage').click(function () {
        $('#xboxNaruto').css({
            'left': '50%',
            'transform': 'translate(-50%)'
        });
        $('#xboxNaruto').addClass('changeGamePage6');
        $('.gamePresentation').css('opacity', '0.5')
    });
    $('.arrowLeft ,.arrowLeftMobile').click(function () {
        $('.gamePresentation').css('opacity', '1');
        $('#xboxNaruto').css('left', '-100%');
    });

    //RED DEAD REDEMPTION
    $('#redImage').click(function () {
        $('#xboxRed').css({
            'left': '50%',
            'transform': 'translate(-50%)'
        });
        $('#xboxRed').addClass('changeGamePage2');
        $('.gamePresentation').css('opacity', '0.5')
    });
    $('.arrowLeft ,.arrowLeftMobile').click(function () {
        $('.gamePresentation').css('opacity', '1');
        $('#xboxRed').css('left', '-100%');
    });

    //-------- PC --------

    //CASTELVANIA
        //au clic sur mon image
        $('#castleImage').click(function () {
            //les propriété css de la div du détail du jeu change
            $('#pcCastle').css({
                //le coin gauche de la div se retrouve au mileu de l'élément parent
                'left': '50%',
                //le coin gauche se déplace de 50% supplémentaire sur la gauche
                //ma div se retrouve centrée sur l'axe X
                'transform': 'translate(-50%)'
            });
            $('#pcCastle').addClass('changeGamePage1');
            //l'opacité baisse
            $('.gamePresentation').css('opacity', '0.5')
        });
        //Au clic sur la flèche
        $('.arrowLeft ,.arrowLeftMobile').click(function () {
            //l'opacité remonte
            $('.gamePresentation').css('opacity', '1');
            //la div reviens a son point de départ et disparait de l'écran
            $('#pcCastle').css('left', '-100%');
        });
    
    //DARK SOULS
    $('#darkImage').click(function () {
        $('#pcDark').css({
            'left': '50%',
            'transform': 'translate(-50%)'
        });
        $('#pcDark').addClass('changeGamePage2');
        $('.gamePresentation').css('opacity', '0.5')
    });
    $('.arrowLeft ,.arrowLeftMobile').click(function () {
        $('.gamePresentation').css('opacity', '1');
        $('#pcDark').css('left', '-100%');
    });

    //FABLE 3
    $('#fableImage').click(function () {
        $('#pcFable').css({
            'left': '50%',
            'transform': 'translate(-50%)'
        });
        $('#pcFable').addClass('changeGamePage3');
        $('.gamePresentation').css('opacity', '0.5')
    });
    $('.arrowLeft ,.arrowLeftMobile').click(function () {
        $('.gamePresentation').css('opacity', '1');
        $('#pcFable').css('left', '-100%');
    });

    //HALF LIFE
    $('#halfImage').click(function () {
        $('#pcHalf').css({
            'left': '50%',
            'transform': 'translate(-50%)'
        });
        $('#pcHalf').addClass('changeGamePage4');
        $('.gamePresentation').css('opacity', '0.5')
    });
    $('.arrowLeft ,.arrowLeftMobile').click(function () {
        $('.gamePresentation').css('opacity', '1');
        $('#pcHalf').css('left', '-100%');
    });

    //LES SIMS
    $('#simsImage').click(function () {
        $('#pcSims').css({
            'left': '50%',
            'transform': 'translate(-50%)'
        });
        $('#pcSims').addClass('changeGamePage5');
        $('.gamePresentation').css('opacity', '0.5')
    });
    $('.arrowLeft ,.arrowLeftMobile').click(function () {
        $('.gamePresentation').css('opacity', '1');
        $('#pcSims').css('left', '-100%');
    });

    //SHERLOCK HOLMES
    $('#sherlockImage').click(function () {
        $('#pcSherlock').css({
            'left': '50%',
            'transform': 'translate(-50%)'
        });
        $('#pcSherlock').addClass('changeGamePage6');
        $('.gamePresentation').css('opacity', '0.5')
    });
    $('.arrowLeft ,.arrowLeftMobile').click(function () {
        $('.gamePresentation').css('opacity', '1');
        $('#pcSherlock').css('left', '-100%');
    });

    //-------- PS4 --------

    //ASSASSIN'S CREED
        //au clic sur mon image
        $('#assassinImage').click(function () {
            //les propriété css de la div du détail du jeu change
            $('#ps4Assassin').css({
                //le coin gauche de la div se retrouve au mileu de l'élément parent
                'left': '50%',
                //le coin gauche se déplace de 50% supplémentaire sur la gauche
                //ma div se retrouve centrée sur l'axe X
                'transform': 'translate(-50%)'
            });
            $('#ps4Assassin').addClass('changeGamePage1');
            //l'opacité baisse
            $('.gamePresentation').css('opacity', '0.5')
        });
        //Au clic sur la flèche
        $('.arrowLeft ,.arrowLeftMobile').click(function () {
            //l'opacité remonte
            $('.gamePresentation').css('opacity', '1');
            //la div reviens a son point de départ et disparait de l'écran
            $('#ps4Assassin').css('left', '-100%');
        });

    //FARCRY
    $('#farcryImage').click(function () {
        $('#ps4Farcry').css({
            'left': '50%',
            'transform': 'translate(-50%)'
        });
        $('#ps4Farcry').addClass('changeGamePage2');
        $('.gamePresentation').css('opacity', '0.5')
    });
    $('.arrowLeft ,.arrowLeftMobile').click(function () {
        $('.gamePresentation').css('opacity', '1');
        $('#ps4Farcry').css('left', '-100%');
    });

    //THE LAST OF US
    $('#lastImage').click(function () {
        $('#ps4Last').css({
            'left': '50%',
            'transform': 'translate(-50%)'
        });
        $('#ps4Last').addClass('changeGamePage5');
        $('.gamePresentation').css('opacity', '0.5')
    });
    $('.arrowLeft ,.arrowLeftMobile').click(function () {
        $('.gamePresentation').css('opacity', '1');
        $('#ps4Last').css('left', '-100%');
    });

    //PRINCE OF PERSIA
    $('#princeImage').click(function () {
        $('#ps4Prince').css({
            'left': '50%',
            'transform': 'translate(-50%)'
        });
        $('#ps4Prince').addClass('changeGamePage3');
        $('.gamePresentation').css('opacity', '0.5')
    });
    $('.arrowLeft ,.arrowLeftMobile').click(function () {
        $('.gamePresentation').css('opacity', '1');
        $('#ps4Prince').css('left', '-100%');
    });

    //RESIDENT EVIL 7
    $('#residentImage').click(function () {
        $('#ps4Resident').css({
            'left': '50%',
            'transform': 'translate(-50%)'
        });
        $('#ps4Resident').addClass('changeGamePage4');
        $('.gamePresentation').css('opacity', '0.5')
    });
    $('.arrowLeft ,.arrowLeftMobile').click(function () {
        $('.gamePresentation').css('opacity', '1');
        $('#ps4Resident').css('left', '-100%');
    });

    //THE WITCHER
    $('#witcherImage').click(function () {
        $('#ps4Witcher').css({
            'left': '50%',
            'transform': 'translate(-50%)'
        });
        $('#ps4Witcher').addClass('changeGamePage6');
        $('.gamePresentation').css('opacity', '0.5')
    });
    $('.arrowLeft ,.arrowLeftMobile').click(function () {
        $('.gamePresentation').css('opacity', '1');
        $('#ps4Witcher').css('left', '-100%');
    });

    //-------- SWITCH -------

        //ANIMAL CROSSING
        //au clic sur mon image
        $('#animalImage').click(function () {
            //les propriété css de la div du détail du jeu change
            $('#switchAnimal').css({
                //le coin gauche de la div se retrouve au mileu de l'élément parent
                'left': '50%',
                //le coin gauche se déplace de 50% supplémentaire sur la gauche
                //ma div se retrouve centrée sur l'axe X
                'transform': 'translate(-50%)'
            });
            $('#switchAnimal').addClass('changeGamePage1Switch');
            //l'opacité baisse
            $('.gamePresentation').css('opacity', '0.5')
        });
        //Au clic sur la flèche
        $('.arrowLeft ,.arrowLeftMobile').click(function () {
            //l'opacité remonte
            $('.gamePresentation').css('opacity', '1');
            //la div reviens a son point de départ et disparait de l'écran
            $('#switchAnimal').css('left', '-100%');
        });
        
        //CRASH BANDICOOT
        $('#crashImage').click(function () {
            $('#switchCrash').css({
                'left': '50%',
                'transform': 'translate(-50%)'
            });
            $('#switchCrash').addClass('changeGamePage2Switch');
            $('.gamePresentation').css('opacity', '0.5')
        });
        $('.arrowLeft ,.arrowLeftMobile').click(function () {
            $('.gamePresentation').css('opacity', '1');
            $('#switchCrash').css('left', '-100%');
        });

    //SUPER MARIO 
    $('#marioImage').click(function () {
        $('#switchMario').css({
            'left': '50%',
            'transform': 'translate(-50%)'
        });
        $('#switchMario').addClass('changeGamePage3Switch');
        $('.gamePresentation').css('opacity', '0.5')
    });
    $('.arrowLeft ,.arrowLeftMobile').click(function () {
        $('.gamePresentation').css('opacity', '1');
        $('#switchMario').css('left', '-100%');
    });

        //MONSTER HUNTER
        $('#monsterImage').click(function () {
            $('#switchMonster').css({
                'left': '50%',
                'transform': 'translate(-50%)'
            });
            $('#switchMonster').addClass('changeGamePage4Switch');
            $('.gamePresentation').css('opacity', '0.5')
        });
        $('.arrowLeft ,.arrowLeftMobile').click(function () {
            $('.gamePresentation').css('opacity', '1');
            $('#switchMonster').css('left', '-100%');
        });

    //POKEMON
    $('#pokemonImage').click(function () {
        $('#switchPokemon').css({
            'left': '50%',
            'transform': 'translate(-50%)'
        });
        $('#switchPokemon').addClass('changeGamePage5Switch');
        $('.gamePresentation').css('opacity', '0.5')
    });
    $('.arrowLeft ,.arrowLeftMobile').click(function () {
        $('.gamePresentation').css('opacity', '1');
        $('#switchPokemon').css('left', '-100%');
    });

        //ZELDA
        $('#zeldaImage').click(function () {
            $('#switchZelda').css({
                'left': '50%',
                'transform': 'translate(-50%)'
            });
            $('#switchZelda').addClass('changeGamePage6Switch');
            $('.gamePresentation').css('opacity', '0.5')
        });
        $('.arrowLeft ,.arrowLeftMobile').click(function () {
            $('.gamePresentation').css('opacity', '1');
            $('#switchZelda').css('left', '-100%');
        });
    

    


});