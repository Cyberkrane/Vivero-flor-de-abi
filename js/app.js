const altura = document.body.scrollHeight - window.innerHeight;
// const fondo = document.getElementById('fondo');

window.onscroll = () => {
    const anchoFondo = (window.pageYOffset / altura) * 700;
    if (anchoFondo <= 100) {
        fondo.style.width = anchoFondo + '%';
    }
}

var cactus = [{
        id: 101,
        img: './img/cactus/cs1.jpeg',
        nombre: 'Suculenta_1',
        descripcion: 'Suculenta 1',
        descripcion2: 'en maceta plastica nº6',
        old: '', // precio viejo
        precio: 59
    },
    {
        id: 102,
        img: './img/cactus/cs2.jpeg',
        nombre: 'Suculenta_2',
        descripcion: 'Suculenta 2',
        descripcion2: 'en maceta plastica nº6',
        old: '', // precio viejo
        precio: 59
    },
    {
        id: 103,
        img: './img/cactus/cs3.jpeg',
        nombre: 'Suculenta_3',
        descripcion: 'Suculenta 3',
        descripcion2: 'en maceta plastica nº6',
        old: '', // precio viejo
        precio: 59
    },
    {
        id: 104,
        img: './img/cactus/cs4.jpeg',
        nombre: 'Cactus_1',
        descripcion: 'Cactus 1',
        descripcion2: 'en maceta plastica nº6',
        old: '', // precio viejo
        precio: 59
    },
    {
        id: 105,
        img: './img/cactus/cs5.jpeg',
        nombre: 'Cactus_2',
        descripcion: 'Cactus 2',
        descripcion2: 'en maceta plastica nº6',
        old: '', // precio viejo
        precio: 59
    },
    {
        id: 106,
        img: './img/cactus/cs6.jpeg',
        nombre: 'Cactus_3',
        descripcion: 'Cactus 3',
        descripcion2: 'en maceta plastica nº6',
        old: '', // precio viejo
        precio: 59
    },
    {
        id: 107,
        img: './img/cactus/cs7.jpeg',
        nombre: 'Cactus_4',
        descripcion: 'Cactus 4',
        descripcion2: 'en maceta plastica nº6',
        old: '', // precio viejo
        precio: 59
    },
    {
        id: 108,
        img: './img/cactus/cs8.jpeg',
        nombre: 'Cactus_5',
        descripcion: 'Cactus 5',
        descripcion2: 'en maceta plastica nº6',
        old: '', // precio viejo
        precio: 59,

    },

    {
        id: 109,
        img: './img/cactus/cs9.jpeg',
        nombre: 'Cactus_6',
        descripcion: 'Cactus 6',
        descripcion2: 'en maceta plastica nº6',
        old: '', // precio viejo
        precio: 59,
    },

    {
        id: 110,
        img: './img/cactus/cs10.jpeg',
        nombre: 'Cactus_7',
        descripcion: 'Cactus 7',
        descripcion2: 'en maceta plastica nº6',
        old: '', // precio viejo
        precio: 59
    },

    {
        id: 111,
        img: './img/cactus/cs11.jpeg',
        nombre: 'Cactus_8',
        descripcion: 'Cactus 8',
        descripcion2: 'en maceta plastica nº6',
        old: '', // precio viejo
        precio: 59,

    },
    {
        id: 112,
        img: './img/cactus/cs12.jpeg',
        nombre: 'Suculenta_4',
        descripcion: 'Suculenta 4',
        descripcion2: 'en maceta plastica nº6',
        old: '', // precio viejo
        precio: 59,

    },
    // {
    //     id: 113,
    //     img: './img/cactus/css.jpeg',
    //     nombre: '',
    //     descripcion: 'lorem ipsum bla bla bla',
    //     descripcion2: 'lorem ipsum bla bla bla',
    //     old: '', // precio viejo
    //     precio: 99,

    // },

];

var plantas = [{
        id: 201,
        img: './img/plantas/Crisantemo.jpeg',
        nombre: 'Crisantemo',
        descripcion: 'Crisantemo',
        descripcion2: '',
        old: '', // precio viejo
        precio: 79
    },
    {
        id: 202,
        img: './img/plantas/Conejitos.jpeg',
        nombre: 'Conejitos',
        descripcion: 'Conejitos',
        descripcion2: '',
        old: '', // precio viejo
        precio: 39
    },

    {
        id: 203,
        img: './img/plantas/Crotton_amarillo.jpeg',
        nombre: 'Crotton_amarillo',
        descripcion: 'Crotton amarillo',
        descripcion2: '',
        old: '', // precio viejo
        precio: 439
    },
    {
        id: 204,
        img: './img/plantas/Crotton mona lisa chico.jpeg',
        nombre: 'Crotton_mona',
        descripcion: 'Crotton mona lisa chico',
        descripcion2: '',
        old: '', // precio viejo
        precio: 249
    },
    {
        id: 205,
        img: './img/plantas/dolar grande.jpeg',
        nombre: 'dolar_grande',
        descripcion: 'dolar grande',
        descripcion2: '',
        old: '', // precio viejo
        precio: 289
    },
    {
        id: 206,
        img: './img/plantas/Ficus benjamina.jpeg',
        nombre: 'Ficus_benjamina',
        descripcion: 'Ficus benjamina',
        descripcion2: '',
        old: '', // precio viejo
        precio: 589
    },
    {
        id: 207,
        img: './img/plantas/Gazania.jpeg',
        nombre: 'Gazania',
        descripcion: 'Gazania',
        descripcion2: 'enamorada del sol',
        old: '', // precio viejo
        precio: 79
    },
    {
        id: 208,
        img: './img/plantas/Geranio malbon.jpeg',
        nombre: 'Geranio_malbon',
        descripcion: 'Geranio malbon',
        descripcion2: '',
        old: '', // precio viejo
        precio: 89
    },
    {
        id: 210,
        img: './img/plantas/Helecho americano grande.jpg',
        nombre: 'Helecho_americano_grande',
        descripcion: 'Helecho americano grande',
        descripcion2: '',
        old: '', // precio viejo
        precio: 389
    },
    {
        id: 211,
        img: './img/plantas/Helecho asplenium.jpeg',
        nombre: 'Helecho_asplenium',
        descripcion: 'Helecho asplenium',
        descripcion2: '',
        old: '', // precio viejo
        precio: 389
    },
    {
        id: 212,
        img: './img/plantas/Mamtillo blanco.jpeg',
        nombre: 'Mantillo_blanco',
        descripcion: 'Mantillo blanco',
        descripcion2: '',
        old: '', // precio viejo
        precio: 39
    },
    {
        id: 213,
        img: './img/plantas/Mini pensamiento.jpeg',
        nombre: 'Mini_pensamiento',
        descripcion: 'Mini pensamiento',
        descripcion2: '',
        old: '', // precio viejo
        precio: 39
    },
    {
        id: 214,
        img: './img/plantas/palo de agua.jpeg',
        nombre: 'palo_de_agua',
        descripcion: 'palo de agua',
        descripcion2: '',
        old: '', // precio viejo
        precio: 289
    },
    {
        id: 215,
        img: './img/plantas/Pensamiento.jpeg',
        nombre: 'Pensamiento',
        descripcion: 'Pensamiento',
        descripcion2: '',
        old: '', // precio viejo
        precio: 39
    },
    {
        id: 216,
        img: './img/plantas/Petunia.jpeg',
        nombre: 'Petunia',
        descripcion: 'Petunia',
        descripcion2: '',
        old: '', // precio viejo
        precio: 39
    },
    {
        id: 217,
        img: './img/plantas/Sansiveria enana.jpeg',
        nombre: 'Sansiveria_enana',
        descripcion: 'Sansiveria enana',
        descripcion2: '',
        old: '', // precio viejo
        precio: 249
    },
    {
        id: 218,
        img: './img/plantas/Santa rita.jpeg',
        nombre: 'Santa_rita',
        descripcion: 'Santa Rita',
        descripcion2: '',
        old: '', // precio viejo
        precio: 389
    },
    {
        id: 219,
        img: './img/plantas/Santa teresita.jpeg',
        nombre: 'Santa_teresita',
        descripcion: 'Santa Teresita',
        descripcion2: '',
        old: '', // precio viejo
        precio: 249
    },
    {
        id: 220,
        img: './img/plantas/Syngonium grande.jpeg',
        nombre: 'Syngonium_grande',
        descripcion: 'Syngonium grande',
        descripcion2: '',
        old: '', // precio viejo
        precio: 289
    },
    {
        id: 221,
        img: './img/plantas/Violeta de los alpes.jpeg',
        nombre: 'Violeta_de_los_alpes',
        descripcion: 'Violeta de los Alpes',
        descripcion2: '',
        old: '', // precio viejo
        precio: 389
    },
    {
        id: 222,
        img: './img/plantas/Coleos.jpeg',
        nombre: 'Coleos',
        descripcion: 'Coleos',
        descripcion2: '',
        old: '', // precio viejo
        precio: 69
    },

    {
        id: 223,
        img: './img/plantas/nazarero enano.jpg',
        nombre: 'nazarero_enano',
        descripcion: 'Nazarero Enano',
        descripcion2: '',
        old: '', // precio viejo
        precio: 289
    },
    {
        id: 224,
        img: './img/plantas/calathea ornata.jpg',
        nombre: 'calathea_ornata',
        descripcion: 'Calathea Ornata',
        descripcion2: '',
        old: ' ', // precio viejo
        precio: 389
    },
    {
        id: 225,
        img: './img/plantas/crotton fideo.jpg',
        nombre: 'crotton_fideo',
        descripcion: 'Crotton Fideo',
        descripcion2: ' ',
        old: ' ', // precio viejo
        precio: 289
    },
    {
        id: 226,
        img: './img/plantas/Palmito grande.jpg',
        nombre: 'Palmitogrande',
        descripcion: 'Palmito grande',
        descripcion2: ' ',
        old: ' ', // precio viejo
        precio: 489
    },
    {
        id: 227,
        img: './img/plantas/pino lemon.jpg',
        nombre: 'pino_lemon',
        descripcion: 'Pino Lemon',
        descripcion2: ' ',
        old: ' ', // precio viejo
        precio: 219
    },
    {
        id: 228,
        img: './img/plantas/palo de agua chico.jpg',
        nombre: 'palo_de_agua_chico',
        descripcion: 'palo de agua chico',
        descripcion2: ' ',
        old: ' ', // precio viejo
        precio: 239
    },
    {
        id: 229,
        img: './img/plantas/palo de agua grande.jpg',
        nombre: 'palo_de_agua_grande',
        descripcion: 'palo de agua grande',
        descripcion2: ' ',
        old: ' ', // precio viejo
        precio: 439
    },

    {
        id: 231,
        img: './img/plantas/Peperomia.jpg',
        nombre: 'Peperomia',
        descripcion: 'Peperomia',
        descripcion2: ' ',
        old: ' ', // precio viejo
        precio: 119
    },

    {
        id: 232,
        img: './img/plantas/Aphelandra.jpg',
        nombre: 'Aphelandra',
        descripcion: 'Aphelandra',
        descripcion2: ' ',
        old: ' ', // precio viejo
        precio: 359
    },

    {
        id: 233,
        img: './img/plantas/Calathea erchovena.jpg',
        nombre: 'Calatheaerchovena',
        descripcion: 'Calathea Erchovena',
        descripcion2: ' ',
        old: ' ', // precio viejo
        precio: 179
    },

    {
        id: 234,
        img: './img/plantas/Monstera andansonii.jpg',
        nombre: 'Monsteraandansonii',
        descripcion: 'Monstera Andansonii',
        descripcion2: ' ',
        old: ' ', // precio viejo
        precio: 289
    },

    {
        id: 235,
        img: './img/plantas/Mosntera deliciosa.jpg',
        nombre: 'Mosnteradeliciosa',
        descripcion: 'Mosntera Deliciosa',
        descripcion2: ' ',
        old: ' ', // precio viejo
        precio: 579
    },

    {
        id: 236,
        img: './img/plantas/Saniveria grisasea.jpg',
        nombre: 'Saniveriagrisasea',
        descripcion: 'Saniveria Grisasea',
        descripcion2: ' ',
        old: ' ', // precio viejo
        precio: 189
    },


]
var macetasD = [{
        id: 301,
        img: './img/macetas/macetasD/m1.jpg',
        nombre: 'maceta1',
        descripcion: 'maceta 1',
        descripcion2: '',
        old: '', // precio viejo
        precio: 89
    },

    {
        id: 302,
        img: './img/macetas/macetasD/m2.jpg',
        nombre: 'maceta2',
        descripcion: 'maceta 2',
        descripcion2: '',
        old: '', // precio viejo
        precio: 139
    },

    {
        id: 303,
        img: './img/macetas/macetasD/m3.jpg',
        nombre: 'maceta3',
        descripcion: 'maceta 3',
        descripcion2: '',
        old: '', // precio viejo
        precio: 139
    },
    {
        id: 304,
        img: './img/macetas/macetasD/m4.jpg',
        nombre: 'maceta4',
        descripcion: 'maceta 4',
        descripcion2: '',
        old: '', // precio viejo
        precio: 89
    },
    {
        id: 305,
        img: './img/macetas/macetasD/m5.jpg',
        nombre: 'maceta5',
        descripcion: 'maceta 5',
        descripcion2: '',
        old: '', // precio viejo
        precio: 'consultar stock'
    },
    {
        id: 306,
        img: './img/macetas/macetasD/m6.jpg',
        nombre: 'maceta6',
        descripcion: 'maceta 6',
        descripcion2: '',
        old: '', // precio viejo
        precio: 'consultar stock'
    },
    {
        id: 307,
        img: './img/macetas/macetasD/m7.jpg',
        nombre: 'maceta7',
        descripcion: 'maceta 7',
        descripcion2: '',
        old: '', // precio viejo
        precio: 'consultar stock'
    },
    {
        id: 308,
        img: './img/macetas/macetasD/m8.jpg',
        nombre: 'maceta8',
        descripcion: 'maceta 8',
        descripcion2: '',
        old: '', // precio viejo
        precio: 89
    },
    {
        id: 309,
        img: './img/macetas/macetasD/m9.jpg',
        nombre: 'maceta9',
        descripcion: 'maceta 9',
        descripcion2: '',
        old: '', // precio viejo
        precio: 'consultar stock'
    },
    {
        id: 310,
        img: './img/macetas/macetasD/m10.jpg',
        nombre: 'maceta10',
        descripcion: 'maceta 10',
        descripcion2: '',
        old: '', // precio viejo
        precio: 'consultar stock'
    },
    {
        id: 311,
        img: './img/macetas/macetasD/m11.jpg',
        nombre: 'maceta11',
        descripcion: 'maceta 11',
        descripcion2: '',
        old: '', // precio viejo
        precio: 89
    },

];
var macetasP = [{
        id: 401,
        img: './img/macetas/macetasP/Numero 6.jpg',
        nombre: 'Macetas_plasticas6',
        descripcion: 'Macetas nº6',
        descripcion2: '6cm de diametro',
        old: '', // precio viejo
        precio: 9
    },
    {
        id: 402,
        img: './img/macetas/macetasP/Numero 8.jpeg',
        nombre: 'Macetas_plasticas8',
        descripcion: 'Macetas nº8',
        descripcion2: '8cm de diametro',
        old: '', // precio viejo
        precio: 14
    },
    {
        id: 403,
        img: './img/macetas/macetasP/Numero 10.jpeg',
        nombre: 'maceta10',
        descripcion: 'Macetas nº10',
        descripcion2: '10cm de diametro',
        old: '', // precio viejo
        precio: 24
    },
    {
        id: 404,
        img: './img/macetas/macetasP/Numero 12.jpeg',
        nombre: 'maceta12',
        descripcion: 'Macetas nº12 v1',
        descripcion2: '12cm de diametro',
        old: '', // precio viejo
        precio: 29
    },
    {
        id: 405,
        img: './img/macetas/macetasP/Numero 12.jpg',
        nombre: 'maceta121',
        descripcion: 'Macetas nº12 v2',
        descripcion2: '12cm de diametro',
        old: '', // precio viejo
        precio: 29
    },
    {
        id: 406,
        img: './img/macetas/macetasP/Maceta cuadrada acrilico brillante numero 13.jpeg',
        nombre: 'macetacuadrada',
        descripcion: 'Macetas nº13',
        descripcion2: 'Maceta cuadrada acrilico brillante 13 x 13cm',
        old: '', // precio viejo
        precio: 389
    },
    {
        id: 407,
        img: './img/macetas/macetasP/m14.jpeg',
        nombre: 'MacetasP14',
        descripcion: 'Macetas nº 14',
        descripcion2: '14cm de diametro',
        old: '', // precio viejo
        precio: 39
    },
    {
        id: 408,
        img: './img/macetas/macetasP/Numero 15.jpeg',
        nombre: 'maceta15',
        descripcion: 'Macetas nº15',
        descripcion2: '15cm de diametro',
        old: '', // precio viejo
        precio: 39
    },
    {
        id: 409,
        img: './img/macetas/macetasP/m14.jpeg',
        nombre: 'MacetasP14',
        descripcion: 'Macetas nº 16',
        descripcion2: '16cm de diametro',
        old: '', // precio viejo
        precio: 49
    },
    {
        id: 410,
        img: './img/macetas/macetasP/m14.jpeg',
        nombre: 'MacetasP14',
        descripcion: 'Macetas nº 18',
        descripcion2: '18cm de diametro',
        old: '', // precio viejo
        precio: 59
    },
    {
        id: 411,
        img: './img/macetas/macetasP/m14.jpeg',
        nombre: 'MacetasP14',
        descripcion: 'Macetas nº 20',
        descripcion2: '20cm de diametro',
        old: '', // precio viejo
        precio: 69
    },
    {
        id: 412,
        img: './img/macetas/macetasP/Bowl numero 18 mate.jpeg',
        nombre: 'maceta1',
        descripcion: 'Bowl nº18',
        descripcion2: '18cm de diametro  colores mate',
        old: '', // precio viejo
        precio: 39
    },


];
var macetasB = [{
    id: 501,
    img: './img/macetas/macetasB/m15.jpg',
    nombre: 'Macetas_de_barro',
    descripcion: 'Macetas de barro',
    descripcion2: 'numero 40 altura 50cm',
    old: '', // precio viejo
    precio: '789'
}];
var insumos = [{
        id: 601,
        img: './img/insumos/semillas.jpg',
        nombre: 'semillas',
        descripcion: 'semillas',
        descripcion2: '',
        old: '', // precio viejo
        precio: 29
    },
    {
        id: 602,
        img: './img/insumos/ganchos.jpg',
        nombre: 'ganchos',
        descripcion: 'ganchos',
        descripcion2: '',
        old: '', // precio viejo
        precio: 14
    },



    {
        id: 606,
        img: './img/insumos/tierra.jpg',
        nombre: 'tierra_negra',
        descripcion: 'tierra negra con sustrato',
        descripcion2: 'bolsa de 10 kgrs',
        old: '', // precio viejo
        precio: 89
    },


];


//////////////////////////
/// mostrar catalogo /////
//////////////////////////

function mostrarCat(arreglo) {
    var kit = '';
    for (var i = 0; i < arreglo.length; i++) {
        kit += '<div class="col-sm-4 col-md-4 col-lg-3 contPro">' +
            '<div class="row producto">' +
            '<div class="col-12">' + '<h5 class="py-1">' + arreglo[i].descripcion + '</h5>' + '</div>' +
            '<div class="col-12 p-0">' +
            '<img src="' + arreglo[i].img + '" alt="' + arreglo[i].nombre + '" class="ml-0">' +
            ' </div>' +
            '<div class="col-12 infopro">' +
            '<p>' + arreglo[i].descripcion2 + '</p>' +
            '<h3>' + '$' + arreglo[i].precio + '<small><ins><sup>99</sup></ins></small>' + '</h3>' +
            '<a href="https://api.whatsapp.com/send?phone=5493547594038&text=Hola%21%20quiero%20comprar%20uno%20de%20loss%20productos%21que%20vi%20en%20tu%20pagina%20web.">' +
            '<button type="button" class="btn btn-primary my-2">' +
            'comprar ' +
            '</button>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
    document.getElementById('catalogo').innerHTML = kit;
};
mostrarCat(cactus);