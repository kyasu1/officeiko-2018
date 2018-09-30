import '../css/style.scss';
const calendar = require('./calendar.js');

const node = document.getElementById('calendar');
if (node) {
    const fakeUTC = Date.now() - (-9 * 60) * 60000;
    const app = calendar.Elm.Main.init({
        node: node,
        flags: {
            today: fakeUTC,
            holiday: "{{ print $calendar }}"
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
