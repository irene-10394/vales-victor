/* ==========================================================
   VALES V
   Lógica principal de la aplicación
========================================================== */


/* ==========================================================
   Referencias
========================================================== */

const app = document.getElementById("app");

let selloPendiente = null;
let popupAbierto = false;


/* ==========================================================
   Memoria de sellos
========================================================== */


window.sellosMarcados = JSON.parse(
    localStorage.getItem("sellosMarcados")
) || [];


let sellosMarcados = window.sellosMarcados;



function guardarSellos(){

    localStorage.setItem(
        "sellosMarcados",
        JSON.stringify(sellosMarcados)
    );

}



/* ==========================================================
   Estado de la aplicación
========================================================== */

const estado = {

    pantalla:"inicio",

    categoriaActual:null

};



/* ==========================================================
   Renderizado
========================================================== */

function render(){


    switch(estado.pantalla){


        case "inicio":


            app.innerHTML = crearInicio();


            break;



        case "categoria":


            app.innerHTML = crearCategoria(
                estado.categoriaActual
            );


            break;


    }


    registrarEventos();


}





/* ==========================================================
   Eventos
========================================================== */

function registrarEventos(){



    // ----------------------------------
    // Botones categorías
    // ----------------------------------

    const botones = document.querySelectorAll(
        ".boton-categoria"
    );


    botones.forEach(boton=>{


        boton.addEventListener(
            "click",
            ()=>{


                estado.pantalla="categoria";


                estado.categoriaActual =
                    boton.dataset.id;


                render();


            }
        );


    });






    // ----------------------------------
    // Botón volver
    // ----------------------------------

    const volver =
        document.querySelector(".boton-volver");



    if(volver){


        volver.addEventListener(
            "click",
            ()=>{


                estado.pantalla="inicio";


                estado.categoriaActual=null;


                render();


            }
        );


    }







    // ----------------------------------
    // Sellos
    // ----------------------------------

    const sellos =
        document.querySelectorAll(
            ".sello-vacio"
        );



    sellos.forEach(sello=>{


        let temporizador;


        let pulsacionLarga=false;





        // -----------------------------
        // Pulsación corta
        // Estampar
        // -----------------------------

        sello.addEventListener(
            "click",
            ()=>{

                if(pulsacionLarga){

                    pulsacionLarga=false;
                    return;

                }

                if(sello.classList.contains("sellado")){
                return;
                }

                selloPendiente = sello;

                if(!popupAbierto){

                    document.body.insertAdjacentHTML(
                        "beforeend",
                        crearPopupConfirmacion(
                            sello.dataset.vale
                        )
                    );

                    console.log("Intentando abrir popup");

                    popupAbierto = true;

                    registrarEventosPopup();

                }

        }
);
















        sello.addEventListener(
            "mouseup",
            ()=>{


                clearTimeout(
                    temporizador
                );


            }
        );







        sello.addEventListener(
            "mouseleave",
            ()=>{


                clearTimeout(
                    temporizador
                );


            }
        );



    });



}

/* ==========================================================
   POPUP
========================================================== */

function registrarEventosPopup(){

    const cancelar =
        document.getElementById("popupCancelar");

    const confirmar =
        document.getElementById("popupConfirmar");

    const popup =
        document.querySelector(".popup-overlay");



    cancelar.addEventListener("click",()=>{

        popup.remove();

        popupAbierto=false;

        selloPendiente=null;

    });




    confirmar.addEventListener("click",()=>{

        if(!selloPendiente) return;



        selloPendiente.classList.add("sellado");



        const id =
            selloPendiente.dataset.id;



        if(!sellosMarcados.includes(id)){

            sellosMarcados.push(id);

            guardarSellos();

        }



        if(navigator.vibrate){

            navigator.vibrate(30);

        }



        popup.remove();

        popupAbierto=false;

        selloPendiente=null;

    });

}

/* ==========================================================
   Inicio
========================================================== */

render();