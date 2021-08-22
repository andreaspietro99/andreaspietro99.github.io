var iSlide = 0;
var captions = new Array(
    "Facciata della casa prima dell'ultima ristrutturazione",
    "Facciata della casa dopo l'ultima ristrutturazione",
    "Andreas da piccolo sul trattore guidato dal nonno Giovanni",
    "Noccioleto dall'interno",
    "Nocciolo secolare",
    "Nocciole distese nel cortile ad asciugare al sole",
    "Andreas al lavoro nei campi",
    "Andreas sul trattore che rientra a casa dopo il lavoro",
    "Loredana e Andreas",
    "La casa vista da lontano con alle spalle il paese di Serravalle Langhe"
);

function prev() {
    iSlide = (iSlide - 1);
    if (iSlide < 0) iSlide = 9;
    showSlide(iSlide);
}

function next() {
    iSlide = (iSlide + 1) % 10;
    showSlide(iSlide);
}

function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[n].style.display = "block";
    var captionWrapper = document.getElementById("slide-caption");
    document.getElementById('slide-caption').innerHTML = captions[n];
}