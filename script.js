// MENU

const nav = document.querySelector('.nav');
const bottomOfNav = nav.offsetTop;
const logoImg = document.querySelector('.logo');
let lastScrollTop = 45;

function hideNav() {
    let scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop) {
        nav.style.top = "-120px";
    } else {
        nav.style.top = 0;
    }

    lastScrollTop = scrollTop;
}

function fixNav() {
    if (window.scrollY > 45) {
        logoImg.classList.add('resize');
    } else {
        logoImg.classList.remove('resize');
    }

    if (window.scrollY > nav.offsetHeight) {
        nav.classList.add('shadow');
    } else {
        nav.classList.remove('shadow');
    }
}

window.addEventListener('scroll', fixNav);
window.addEventListener('scroll', hideNav);

// SIDE NAV

const navSlide = () => {
    const hamburger = document.querySelector(".nav__hamburger");
    const sidebar = document.querySelector(".sidebar");
    const dropdownParent = document.querySelector('.sidebar__dropdown-parent');
    const dropdown = document.querySelector('.sidebar__dropdown');
    const arrow = document.querySelector('.fa-sort-down');
    const close = document.querySelector('.fa-times')

    hamburger.addEventListener('click', () => {
        sidebar.classList.add('sidebar--active');
        hamburger.classList.add('nav__hamburger--hidden')
    })

    dropdownParent.addEventListener('click', () => {
        dropdown.classList.toggle('hidden')
        arrow.classList.toggle('fa-rotate-180')
    })

    close.addEventListener('click', () => {
        sidebar.classList.remove('sidebar--active')
        hamburger.classList.remove('nav__hamburger--hidden')
    })
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

let timer = setInterval(autoPlay,7000);

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

// mapa
const botonAlta = document.querySelector('.btn-primary');
const botonMedia = document.querySelector('.btn-secondary');
const botonBaja = document.querySelector('.btn-success');
const mapButtons = document.querySelectorAll('.btn-block');
const mapText = document.querySelector('.map-text');
const title = document.querySelector('.map__description-title--vertical');
const icon = document.querySelector('.map__description-img')


botonAlta.addEventListener('click', function() {
    for (let i = 0; i < mapButtons.length; i++) {
        mapButtons[i].classList.remove('active');
    }
    botonAlta.classList.add('active');
    title.innerHTML = 'Cuenca alta';
    icon.src = "./graficos/icono_alta_azul.svg";
    mapText.innerHTML = 'Aquí surge el río de escurrimientos superficiales: ojos de agua, charcos y lloraderos. El aire es puro y hay explanadas de pastizales con pinos de la especie <i>P. hartwegii</i>. La huella humana es escasa y el agua, cristalina.'
});

botonMedia.addEventListener('click', function() {
    for (let i = 0; i < mapButtons.length; i++) {
        mapButtons[i].classList.remove('active');
    }
    botonMedia.classList.add('active');
    title.innerHTML = 'Cuenca media';
    icon.src = "./graficos/icono_media_azul.svg";
    mapText.innerHTML = 'El bosque se vuelve más denso: los oyameles crecen por doquier, junto con encinos y hongos. La actividad humana se intensifica y con ella el deterioro de la vegetación y la calidad del agua.';
});

botonBaja.addEventListener('click', function() {
    for (let i = 0; i < mapButtons.length; i++) {
        mapButtons[i].classList.remove('active');
    }
    botonBaja.classList.add('active');
    title.innerHTML = 'Cuenca baja';
    icon.src = "./graficos/icono_baja_azul.svg";
    mapText.innerHTML = 'En la zona urbana, el río se transforma. Al principio todavía corre a cielo abierto; en su descenso se mezcla con agua de desagües y de otros ríos contaminados. Conserva algo de vegetación en sus orillas, pero ya no podemos hablar de bosque. Finalmente es entubado y desaparece bajo de la ciudad.';
});


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


