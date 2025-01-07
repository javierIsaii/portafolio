var barraCarga = document.getElementById('barra-de-carga')
var progreso = document.getElementById('progreso');
var progresoCache = document.getElementById('progresoCache');
var menu = document.querySelector(".menu");
var cacheBtn = document.getElementById('cacheBtn');

function delayRedirect(event, link) {
    event.preventDefault();
    var ancho = 0;
    var maxAncho = 100;
    var intervalo = setInterval(aumentarAncho, 1);

    barraCarga.style.opacity = 1;
    barraCarga.style.transition = 'opacity 0.3s ease-in-out';

    if (menu) {
        menu.style.cssText = "backdrop-filter: saturate(180%) blur(20px) brightness(170%); -webkit-backdrop-filter: saturate(180%) blur(20px); background-color: rgba(0, 0, 0, 0.7); background-image: linear-gradient(transparent,transparent); transition: all 0.2s ease-in-out;";
    }

    function aumentarAncho() {
        if (ancho >= maxAncho) {
            clearInterval(intervalo);
            window.location.href = link; // Usa el enlace proporcionado
            setTimeout(function () {
                barraCarga.style.opacity = 0;
                barraCarga.style.transition = 'opacity 0.3s ease-in-out';
                progreso.style.backgroundColor = 'red';
            }, 1000);
            progreso.style.backgroundColor = 'blue';
        } else {
            ancho++;
            progreso.style.width = ancho + '%';
            progreso.style.backgroundColor = 'red';
            progreso.style.transition = 'background-color 0.5s ease-in-out';
        }
    }


}
function delayClearCache(event) {
    event.preventDefault();
    var anchoCache = 0;
    var maxAnchoCache = 100;
    var intervaloCache = setInterval(aumentarAnchoCache, 1);

    barraCarga.style.opacity = 1;
    barraCarga.style.transition = 'opacity 0.3s ease-in-out';
    progreso.style.display = 'none';

    function aumentarAnchoCache() {
        if (anchoCache >= maxAnchoCache) {
            clearInterval(intervaloCache);
            location.reload(true);
            setTimeout(function () {
                barraCarga.style.opacity = 0;
                barraCarga.style.transition = 'opacity 0.3s ease';
            }, 1000);
        } else {
            anchoCache++;
            progresoCache.style.width = anchoCache + '%';
            progresoCache.style.backgroundColor = '#00e917';
            progresoCache.style.transition = 'background-color 0.7s linear';
        }
    }
}