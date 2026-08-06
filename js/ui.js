/* ==========================================================
   VALES V - v0.2
   Interfaz de usuario
========================================================== */


/* ==========================================================
   PORTADA
========================================================== */

function crearInicio() {

    let html = `

    <div class="pantalla">

        <img
            class="logo"
            src="assets/logo/Logo.svg"
            alt="Vales V">

        <div class="lista-categorias">

    `;

    APP_DATA.categorias.forEach(categoria => {

        html += `

        <button
            class="boton-categoria"
            data-id="${categoria.id}"
            style="background:${categoria.color};">

            <img
                src="${categoria.icono}"
                alt="${categoria.titulo}">

            <div>

                <h2>${categoria.titulo}</h2>

                <p>${categoria.subtitulo}</p>

            </div>

        </button>

        `;

    });

    html += `

        </div>

    </div>

    `;

    return html;

}


/* ==========================================================
   CATEGORÍA
========================================================== */

function crearCategoria(id) {

    const categoria = APP_DATA.categorias.find(c => c.id === id);

    const vales = APP_DATA.vales.filter(v => v.categoria === id);

    let html = `

    <div
        class="pantalla"
        style="background:${categoria.color}; min-height:100vh;">

        <button class="boton-volver">

            ← 

        </button>

        <div class="cabecera-categoria">

            <img
                class="icono-categoria"
                src="${categoria.icono}"
                alt="${categoria.titulo}">

            <div>

                <h1>${categoria.titulo}</h1>

                <h2>${categoria.subtitulo}</h2>

                <p class="descripcion-categoria">

                    ${categoria.descripcion}

                </p>

            </div>

        </div>

    `;

    vales.forEach(vale => {

    html += crearTarjetaVale(vale, categoria);

});

    html += `

    </div>

    `;

    return html;

}

/* ==========================================================
   TARJETA
========================================================== */

function crearTarjetaVale(vale, categoria){


    let sellos = "";



    for(let i = 1; i <= vale.sellos; i++){


        const idSello = `${vale.id}_${i}`;


        const estaSellado =
            window.sellosMarcados.includes(idSello)
            ? "sellado"
            : "";



        sellos += `

            <div
                class="sello-vacio ${estaSellado}"
                data-id="${idSello}"
                data-numero="${i}"
                data-vale="${vale.titulo}"
                style="color:${categoria.color};">


                <span>${i}</span>


                <div class="sello">

                    <img 
                    src="assets/sello/SELLO V&I.png"
                    alt="Sello">

                </div>


            </div>

        `;


    }




    return `

        <div class="tarjeta">


            <h2>

                ${vale.titulo}

            </h2>



            ${
                vale.descripcion != ""

                ?

                `<p style="margin-top:8px;margin-bottom:20px;">

                    ${vale.descripcion}

                </p>`

                :

                `<div style="height:20px;"></div>`

            }




            <div class="lista-sellos">

                ${sellos}

            </div>



        </div>

    `;


}

/* ==========================================================
   POPUP CONFIRMACIÓN
========================================================== */

function crearPopupConfirmacion(tituloVale){

    return `

    <div class="popup-overlay">

        <div class="popup">

            <h2>

                ¿Quieres usar este vale?

            </h2>

            <p class="popup-titulo-vale">

                ${tituloVale}

            </p>

            <div class="popup-botones">

                <button
                    class="popup-boton popup-cancelar"
                    id="popupCancelar">

                    ✕

                </button>

                <button
                    class="popup-boton popup-confirmar"
                    id="popupConfirmar">

                    ✓

                </button>

            </div>

        </div>

    </div>

    `;

}