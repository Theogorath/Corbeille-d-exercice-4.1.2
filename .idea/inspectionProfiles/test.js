var dayB = document.getElementById('bouton_jour'),
    nightB = document.getElementById('bouton_nuit'),
    body = document.getElementById('WAZA')
    image = document.getElementById('top_gun');

dayB.onclick = function () {
    dawn();
};

nightB.onclick = function () {
    twilight();
};

function twilight() {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    image.src = "Images/Nuit.png";
    dayB.style.backgroundColor = 'white';
    dayB.style.color = 'black';
    nightB.style.backgroundColor = 'white';
    nightB.style.color = 'black';
};

function dawn() {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    image.src = "Images/Jour.png";
    dayB.style.backgroundColor = 'black';
    dayB.style.color = 'white';
    nightB.style.backgroundColor = 'black';
    nightB.style.color = 'white';
};
