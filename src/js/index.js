import '../css/style.scss';

const holiday = require('./holiday.json');
const special = require('./special.json');

const calendar = require('./calendar.js');

const node = document.getElementById('calendar');
if (node) {
    const app = calendar.Elm.Main.init({
        node: node,
        flags: {
            holiday: holiday,
            special: special
        }
    });
}

const btnOpenNav = document.getElementById('btnOpenNav');
if (btnOpenNav) {
    btnOpenNav.addEventListener('click', () => {
        document.getElementById("side-nav").style.width = "100%";
    })
}

const btnCloseNav = document.getElementById('btnCloseNav');
if (btnCloseNav) {
    btnCloseNav.addEventListener('click', () => {
        document.getElementById("side-nav").style.width = "0";
    });
}
