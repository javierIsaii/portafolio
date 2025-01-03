document.body.classList.add('no-scroll');
var logo = document.querySelector('.icono');
var loader = document.querySelector('.loader');
var splashScreen = document.getElementById('splash-screen');
var aviso = document.getElementById('error-message')
var nota = document.querySelector('.nota');
var timeoutId;
var pageLoaded = false;
var barraCarga = document.getElementById('barra-de-carga')
var progreso = document.getElementById('progreso');

document.addEventListener('DOMContentLoaded', function () {
  let maxLoadTime = 3000;
  let timeoutId = setTimeout(function () {
    aviso.style.opacity = 1;
    aviso.style.transition = 'opacity 0.4s ease-in-out';
  }, maxLoadTime);
});

window.addEventListener('load', function () {
  logo.style.opacity = 1;
  loader.style.opacity = 1;
  nota.style.opacity = 1;
  setTimeout(function () {
    logo.style.opacity = 0;
    logo.style.transition = "opacity 0.2s";
    nota.style.opacity = 0;
    nota.style.transition = "opacity 0.2s";
  }, 1600);
  setTimeout(function () {
    splashScreen.style.opacity = 0;
    clearTimeout(timeoutId);
    pageLoaded = true;
    setTimeout(function () {
      splashScreen.style.display = 'none';
    }, 1000);
  }, 2000); // Duración del splash

  setTimeout(function () {
    document.body.classList.remove('no-scroll'); //Delay scroll
  }, 3200);
});

//Barra de carga de la pagina
document.addEventListener('DOMContentLoaded', function () {
  var ancho = 0;
  var maxAncho = 70; // Ancho máximo antes de la carga completa
  var intervalo = setInterval(aumentarAncho, 10);

  barraCarga.style.opacity = 1;
  barraCarga.style.transition = 'opacity 0.3s ease-in-out';

  function aumentarAncho() {
    if (ancho >= maxAncho) {
      clearInterval(intervalo);
    } else {
      ancho++;
      progreso.style.width = ancho + '%';
      progreso.style.backgroundColor = 'red';
      progreso.style.transition = 'background-color 2s ease-in-out';
      loader.style.opacity = 1;
      loader.style.transition = "opacity 0.2s";
    }
  }

  window.addEventListener('load', function () {
    progreso.style.width = '100%';

    setTimeout(function () {
      barraCarga.style.opacity = 0;
      barraCarga.style.transition = 'opacity 0.3s ease-in-out';
    }, 2000);
    setTimeout(function () {
      loader.style.opacity = 0;
      loader.style.transition = "opacity 0.2s";
      aviso.style.opacity = 0;
      aviso.style.transition = 'opacity 0.3s ease-in-out';
    }, 1500);
    maxAncho = 100;
  });
});


