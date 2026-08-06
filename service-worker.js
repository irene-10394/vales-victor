const CACHE_NAME = "vales-v-2";

const ARCHIVOS = [

    "./",
    "./index.html",

    "./manifest.json",

    "./css/style.css",

    "./js/data.js",
    "./js/ui.js",
    "./js/app.js",

    "./assets/logo/Logo.svg",

    "./assets/icono-192.png",
    "./assets/icono-512.png",

    "./assets/sello/SELLO V&I.png",

    "./assets/icons/iconos_casa.svg",
    "./assets/icons/iconos_detalles.svg",
    "./assets/icons/iconos_relacion.svg"

];



self.addEventListener("install", event => {

    event.waitUntil(

        caches.open(CACHE_NAME)

            .then(cache => cache.addAll(ARCHIVOS))

    );

    self.skipWaiting();

});



self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys().then(keys =>

            Promise.all(

                keys.map(key => {

                    if(key !== CACHE_NAME){

                        return caches.delete(key);

                    }

                })

            )

        )

    );



    clients.claim();

});



self.addEventListener("fetch", event => {

    event.respondWith(

        caches.match(event.request)

            .then(response => {

                return response || fetch(event.request);

            })

    );

});