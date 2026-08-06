/* ==========================================================
   VALES V - v0.2
   Datos de la aplicación
========================================================== */

const APP_DATA = {

    categorias: [

        {
            id: "hogar",

            titulo: "Tareas del hogar",

            subtitulo: "Porque compartir también es quererse.",

            descripcion: "Sé que he de implicarme más en las tareas del hogar y, aunque intento organizarme mejor y hacerlo por iniciativa propia, estos vales son una forma de comprometerme contigo. Cuando quieras utilizar uno, me tocará hacerlo sin protestar ni buscar excusas... (salvo que de verdad esté incapacitada 😜).",

            icono: "assets/icons/iconos_casa.svg",

            color: "#AEDAE2"
        },

        {
            id: "detallitos",

            titulo: "Detallitos",

            subtitulo: "Pequeñas cosas que alegran el día.",

            descripcion: "Me encanta mimarte y consentirte de vez en cuando, y una de las cosas que más me gustan de ti es cómo sabes disfrutar y agradecer los pequeños detalles. Así que... decide qué te apetece y cuándo quieres canjearlo. ❤️",

            icono: "assets/icons/iconos_detalles.svg",

            color: "#F4D577"

        },

        {
            id: "emocional",

            titulo: "Cuidemos esto",

            subtitulo: "Para seguir construyendo un nosotros.",

            descripcion: "A veces me cuesta gestionar mis emociones o mantener la atención, y sé que para ti también puede ser difícil lidiar con ello. Estos vales son una pequeña ayuda para recordarnos que estamos en el mismo equipo y afrontar juntos esos momentos complicados.",

            icono: "assets/icons/iconos_relacion.svg",

            color: "#FFBCD8"

        },

    ],



    vales: [

        /* ==================================================
           HOGAR
        ================================================== */

        {
            id:"hogar_1",
            categoria:"hogar",
            titulo:"🧼 LIMPIEZA A FONDO: BAÑO",
            descripcion:"Incluye WC, ducha, desagüe, mampara, espejo, lavabo, cajones, suelo... ¡Todo, limpieza a fondo!",
            sellos:1
        },

        {
            id:"hogar_2",
            categoria:"hogar",
            titulo:"🧼 LIMPIEZA A FONDO: COCINA",
            descripcion:"Incluye encimeras, armarios, interior de cajones y nevera, suelo…… ¡Todo, limpieza a fondo!.",
            sellos:1
        },

        {
            id:"hogar_3",
            categoria:"hogar",
            titulo:"🚽 LIMPIEZA SENCILLA BAÑO",
            descripcion:"Incluye WC, lavabo, espejo y suelo.",
            sellos:2
        },

        {
            id:"hogar_4",
            categoria:"hogar",
            titulo:"🚿 LIMPIEZA DUCHA",
            descripcion:"Incluye desatascar el desagüe, limpiar los grifos, esquinas y mampara.",
            sellos:2
        },

        {
            id:"hogar_5",
            categoria:"hogar",
            titulo:"🥣 CACHARROS COCINA",
            descripcion:"Fregar ollas, sartenes, etc. Si aplica, ncluye poner el lavavajillas y sacarlo.",
            sellos:2
        },

        {
            id:"hogar_6",
            categoria:"hogar",
            titulo:"🤦🏻‍♀️ ¡POR LOS PELOS!",
            descripcion:"Busco los pelos que haya dejado en esta habitación y los recojo todos.",
            sellos:5
        },

        {
            id:"hogar_7",
            categoria:"hogar",
            titulo:"🧦 LA COLADA",
            descripcion:"Incluye poner una lavadora, tenderla, destenderla, y doblar la ropa.",
            sellos:2
        },

        {
            id:"hogar_8",
            categoria:"hogar",
            titulo:"👕 A PLANCHAR",
            descripcion:"Plancho tu ropa con cariño y esmero para que no quede ni una arruga, y tu puedas hacer otras cosas.",
            sellos:1
        },

        {
            id:"hogar_9",
            categoria:"hogar",
            titulo:"✨ SUELOS BRILLANTES",
            descripcion:"Paso la aspiradora por todo el piso y friego los suelos. ¡Incluido el balcón!",
            sellos:2
        },

        {
            id:"hogar_10",
            categoria:"hogar",
            titulo:"🍝 TUPPERS PARA DOS",
            descripcion:"Te preparo al menos 2 tuppers / platos de lo que tú quieras, para que no tengas que cocinarte entre semana.",
            sellos:5
        },



        /* ==================================================
           DETALLITOS
        ================================================== */

        {
            id:"detalle_1",
            categoria:"detallitos",
            titulo:"👩🏻‍🍳 RESTAURANTE EN CASA",
            descripcion:"Preparo la comida que quieras, pongo la mesa en plan bonito, y luego dejo la cocina perfectamente recogida.",
            sellos:1
        },

        {
            id:"detalle_2",
            categoria:"detallitos",
            titulo:"😋 ¡QUÉ GOLOSO!",
            descripcion:"Te compro una bolsa de chuches o snacks a elegir (solo para ti, pero puedo comprarme otra para mí para que picoteemos juntos)",
            sellos:5
        },

        {
            id:"detalle_3",
            categoria:"detallitos",
            titulo:"🍿 CINE EN CASA",
            descripcion:"Vemos la película que tú quieras en casa (incluye descargarla si es necesario)",
            sellos:5
        },

        {
            id:"detalle_4",
            categoria:"detallitos",
            titulo:"🍿 CINE EN... ¡EL CINE!",
            descripcion:"Te invito al cine a ver la película que tú quieras. Incluye chuches y bebida.",
            sellos:1
        },

        {
            id:"detalle_5",
            categoria:"detallitos",
            titulo:"👑 EL DÍA V",
            descripcion:"Durante las próximas 24 horas, mandas tú al 100%. Un poder total, que espero que no te corrompa totalmente.",
            sellos:1
        },

        {
            id:"detalle_6",
            categoria:"detallitos",
            titulo:"🎮 TARDE DE JUEGOS PARA DOS",
            descripcion:"Incluye juegos de mesa, en la Nintendo Switch, la Wii, Play, PC, móviles, TV… ¡Lo que quieras!",
            sellos:5
        },

        {
            id:"detalle_7",
            categoria:"detallitos",
            titulo:"🏖️ VAMOS A LA PLAYA, UO-UOOH",
            descripcion:"Paseo por la playa y te invito a un refresco o helado.",
            sellos:2
        },

        {
            id:"detalle_8",
            categoria:"detallitos",
            titulo:"👫🏻 TOURISTS GO HOME",
            descripcion:"Vamos al centro y no me puedo quejar de la gente.<br><b>Condición:</b> si me agobio, puedo ponerme los auriculares, apretarte la mano, o reclamarte un besito.",
            sellos:5
        },

        {
            id:"detalle_9",
            categoria:"detallitos",
            titulo:"🍔 MENÚ INFANTIL",
            descripcion:"Te invito a comer donde elijas: Popeyes, KFC, Burger King, McDonalds…<br><b>Condición:</b> 48h hasta la siguiente comida basura. Válido también para el extranjero.",
            sellos:2
        },

        {
            id:"detalle_10",
            categoria:"detallitos",
            titulo:"🎨 TU ARTISTA DE CONFIANZA",
            descripcion:"Invierto mi tiempo libre en crear las imágenes que quieras o necesites: dibujos, gráficos, retoques, diseños...",
            sellos:5
        },



        /* ==================================================
           CUIDEMOS ESTO
        ================================================== */

        {
            id:"emocional_1",
            categoria:"emocional",
            titulo:"🛑 STOP!!",
            descripcion:"Cuando una conversación se esté volviendo demasiado intensa, puedes usar este vale. Se deja el tema aparcado durante 48 horas y ambos nos comprometemos a retomarlo con la cabeza más fría.",
            sellos:5
        },

        {
            id:"emocional_2",
            categoria:"emocional",
            titulo:"😠 ¿ME ESTÁS ESCUCHANDO?",
            descripcion:"He de resumir lo que me estabas contando para demostrar que te he entendido, y dedicar 10 minutos a interesarme por ese tema contigo.<br><b>Penalización:</b> 20 abdominales por el despiste.",
            sellos:5
        },

        {
            id:"emocional_3",
            categoria:"emocional",
            titulo:"😩 Estás muy negativ@,¡ME MINAS LA MORAL!",
            descripcion:"Durante los próximos 30 minutos, prohibido ser pesimista. Solo podemos decir cosas positivas o pensar soluciones.",
            sellos:5
        },

        {
            id:"emocional_4",
            categoria:"emocional",
            titulo:"🫱🏻‍🫲🏼 SOMOS UN EQUIPO",
            descripcion:"Durante los próximos 15 minutos está prohibido intentar ganar la discusión. El único objetivo es encontrar una solución que nos deje tranquilos a los dos.",
            sellos:5
        },

        {
            id:"emocional_5",
            categoria:"emocional",
            titulo:"🔁 PONTE EN MI LUGAR",
            descripcion:"Durante 10 minutos intentamos defender el punto de vista del otro como si fuera el nuestro.",
            sellos:5
        },

        {
            id:"emocional_6",
            categoria:"emocional",
            titulo:"🔊 ¡BAJA EL VOLUMEN!",
            descripcion:"Durante los próximos 10 minutos solo podemos hablar en voz baja.<br><b>Penalización si se incumple:</b> darle 4 besitos al otro.",
            sellos:2
        },

        {
            id:"emocional_7",
            categoria:"emocional",
            titulo:"💡 LLUVIA DE IDEAS",
            descripcion:"Durante diez minutos está prohibido quejarse. Solo se pueden proponer soluciones.",
            sellos:5
        },

        {
            id:"emocional_8",
            categoria:"emocional",
            titulo:"🙇🏻‍♀️ SIN PEROS",
            descripcion:"Una disculpa sincera que no puede ir seguida de un “pero”, sino de un abrazo.",
            sellos:2
        },

        {
            id:"emocional_9",
            categoria:"emocional",
            titulo:"❤️‍🩹 LO BUENO DE TI",
            descripcion:"Antes de continuar, cada uno ha de decir algo que admire o agradezca del otro.",
            sellos:5
        },

        {
            id:"emocional_10",
            categoria:"emocional",
            titulo:"🤫 SOLO ESCUCHAR",
            descripcion:"Durante los siguientes 20 minutos no quiero consejos ni soluciones. Solo necesito desahogarme y sentirme comprendido y apoyado.",
            sellos:5
        },

    ]

};