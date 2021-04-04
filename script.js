

const navSlide = () => {
    const hamburger = document.querySelector(".nav__hamburger");
    const menu = document.querySelector(".nav__menu");
    const menuItems = document.querySelectorAll(".nav__menu-item");


    hamburger.addEventListener('click', () => {
        menu.classList.toggle('nav__menu--active');

        menuItems.forEach((item, index) => {
            if (item.style.animation) {
                item.style.animation = '';
                } else {
                    item.style.animation = `menuItemFade 0.5s ease forwards ${index / 20 + .2}s`
                }
            });

        hamburger.classList.toggle('toggle');

        });

    }

navSlide();

// header slider

const headerSlides = document.querySelectorAll('.header__slide');
const indicator = document.querySelector(".header__slider-indicator");
let slidesIndex = 0;

function circleIndicator() {
    for (let i=0; i < headerSlides.length; i++) {
        const div = document.createElement('div');
        // div.innerHTML = i + 1;
        div.setAttribute('onclick', "indicateSlide(this)");
        div.id = i;
        if (i === 0) {
            div.className = 'active';
        }
        indicator.appendChild(div);
    }
}

circleIndicator();

function indicateSlide(e) {
    slidesIndex = e.id;
    changeHeaderSlide();
    updateCircleIndicator();
    resetTimer();
}

function updateCircleIndicator () {
    for (let i = 0; i < indicator.children.length; i++) {
        indicator.children[i].classList.remove('active');
    }
    indicator.children[slidesIndex].classList.add('active');
}

function changeHeaderSlide() {
    for (let i=0; i < headerSlides.length; i++) {
        headerSlides[i].classList.remove("active");
    }
    headerSlides[slidesIndex].classList.add('active');
}

function nextHeaderSlide() {
    if (slidesIndex === headerSlides.length-1) {
        slidesIndex = 0;
    } else {
        slidesIndex++
    }
    changeHeaderSlide();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoPlay,4000);
}

function autoPlay() {
    nextHeaderSlide();
    updateCircleIndicator();
}

let timer = setInterval(autoPlay,4000);

// numeralia slider

const numeraliaSlides = document.querySelectorAll('.numeralia__slide');
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
let numeraliaIndex = 0;

prev.addEventListener("click",function(){
    prevNumeraliaSlide();
});

next.addEventListener("click",function(){
    nextNumeraliaSlide();
});

function prevNumeraliaSlide(){
   	if(numeraliaIndex === 0){
   	    numeraliaIndex = numeraliaSlides.length-1;
   	} else {
   	    numeraliaIndex--;
   	}
   	 changeNumeraliaSlide();
}

function nextNumeraliaSlide(){
    if(numeraliaIndex === numeraliaSlides.length-1){
        numeraliaIndex = 0;
    } else {
        numeraliaIndex++;
    }
        changeNumeraliaSlide();
}


function changeNumeraliaSlide() {
    for (let i=0; i < numeraliaSlides.length; i++) {
        numeraliaSlides[i].classList.remove("active");
    }
    numeraliaSlides[numeraliaIndex].classList.add('active');
}

function getThesis(callback) {
    

    var xhr = new XMLHttpRequest();
    const url = "https://esmag.com.mx/tesis/"

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            
            var response = xhr.response;
            console.log(JSON.parse(response))
            alert("Se envio correctamente");
        }
    }

    xhr.open("GET", url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(null);

}