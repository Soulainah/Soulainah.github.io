let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;

//variable texte info
let infoSlider = document.querySelectorAll('.info');


function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
    for(let i = 0; i < infoSlider.length; i++){
        infoSlider[i].style.display = 'none';
    }
}

function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
    infoSlider[0].style.display = 'block';
}

function slideLeft(){
    reset();
    sliderImages[current -1].style.display = 'block';
    infoSlider[current -1].style.display = 'block';
    current --;
    console.log(current)
}

function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    infoSlider[current + 1].style.display = 'block';
    current ++;
    console.log(current)
}

arrowLeft.addEventListener('click', function(){
    if(current === 0){
        current = sliderImages.length
    }
    slideLeft();
})

arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length -1){
        current = -1 
    }
    slideRight();
})

startSlide()