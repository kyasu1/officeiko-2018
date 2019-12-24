import '../css/style.scss';

import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

hljs.initHighlightingOnLoad();

// Calendar
// const holiday = require('./holiday.json');
// const special = require('./special.json');

// const calendar = require('../elm-calendar/src/CompanyHoliday.elm');

// const node = document.getElementById('calendar');
// if (node) {
//     const app = calendar.Elm.Main.init({
//         node: node,
//         flags: {
//             holiday: holiday,
//             special: special
//         }
//     });
// }

// Contact Form
const contact = require('../elm-contact-form/src/Main.elm');
const nodeContact = document.getElementById('elm-contact-form');

if (nodeContact) {
  const app = contact.Elm.Main.init({
    node: nodeContact,
    flags: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  })

  function resizeImage(src) {
    return new Promise((resolve, reject) => {
      const width = 800
      const height = 800
      const image = new Image()

      image.onload = () => {
        const elem = document.createElement('canvas')
        const scaleFactor = width / image.width
        elem.width = width
        elem.height = image.height * scaleFactor

        const ctx = elem.getContext('2d')
        ctx.drawImage(image, 0, 0, width, image.height * scaleFactor)

        const result = ctx.canvas.toDataURL('image/jpeg', 0.85)
        resolve(result)
      }
      image.onerror = (e) => {
        console.log('onerror: ', e)
        reject(e)
      }
      image.src = src
    })
  }

  app.ports.resize.subscribe(data => {
    Promise.all(data.map(resizeImage))
    .then(resized => {
      app.ports.resizedImages.send(resized)
    })
  })
}

// Mobile menu toggle button

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
