// # Consegna:

// ? Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

// # Le caratteristiche minime richieste sono:

// $ 1 - Immagine grande visibile quando attiva
// $ 2 - Lista di Thumbnails in basso
// $ 3 - Anche nelle thumbnails dobbiamo avere una classe active corrispondente all'immagine attiva in quel 
// $     momento(lo stile è a vostra discrezione)
// $ 4 - Al click sulle freccette l'immagine principale deve cambiare (e la thumbnail corrispondente deve 
// $     avere la classe active con conseguente effetto visivo)
// $ 5 - Implementare il ciclo infinito: se sono sulla prima immagine e clicco prev, devo ricominciare 
// $     dall'ultima. Se sono sull'ultima e clicco next, devo ripartire dalla prima.

// # Bonus:

// @ 1 - al click su una thumb, visualizzare in grande l'immagine corrispondente
// @ 2 - applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente 
// @     (questo richiederà qualcosa che non abbiamo visto)
// @ 3 - quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce 
// @     (questo richiederà degli eventi che non abbiamo visto)

// * Consigli del giorno:

// - regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo 
//   recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
// - il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce 
//   a poche righe;)
// - oltre a Vue, ora abbiamo diversi strumenti in più nelle nostre tasche, che possono tornarci utili 
//   per svolgere l'esercizio in una versione più evoluta ed efficace, soprattutto per quando riguarda 
//   la struttura dei dati.

// ---

Vue.config.devtools = true;

// # USIAMO VUE

const root = new Vue({
    name: 'Vue Slider',
    el: '#root',
    data: {
        images: [
            {
                url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
                title: 'Svezia',
                description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
            },
        
            {
                url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
                title: 'Perù',
                description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
            },
        
            {
                url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
                title: 'Chile',
                description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
            },
            {
                url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
                title: 'Argentina',
                description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
            },
            {
                url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
                title: 'Colombia',
                description:
                    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
            },
        ],
        currentActiveIndex: 0,
        clear:0,
    },
    computed: {
        
    },
    methods: {
        goToNext() {
            if (this.currentActiveIndex === this.images.length - 1) this.currentActiveIndex = 0;
            else this.currentActiveIndex++;
        },
        goToPrevious() {
            if (this.currentActiveIndex === 0) this.currentActiveIndex = this.images.length - 1;
            else this.currentActiveIndex--;
        },

        // # BONUS 1

        changeThroughtThumbImage(index) {
            this.currentActiveIndex = index;
        },
        
        // # BONUS 2

        // Autoplay verso destra
        startIntervallToRight() {
            this.clear = setInterval(() => {
                if (this.currentActiveIndex === this.images.length - 1) this.currentActiveIndex = 0;
                else this.currentActiveIndex++;
            },1000)
        },

        // Autoplay verso sinistra
        startIntervallToLeft() {
            this.clear = setInterval(() => {
                if (this.currentActiveIndex === 0) this.currentActiveIndex = this.images.length - 1;
                else this.currentActiveIndex--;
            },1000)
        },

        // Funzione che fa partire l'autoplay
        startAutoplay() {
            this.startIntervallToRight();
        },

        // Funzione che stoppa l'autoplay
        stopAutoplay() {
            clearInterval(this.clear);
            this.clear = 0;
        },

        // Funzione che inverte l'autoplay
        invertAutoplay() {
            if (this.clear === 0) this.startIntervallToLeft();
            else {
                clearInterval(this.clear);
                this.startIntervallToLeft();
            }
        },
    }
});



// // # MILESTONE 1

// // * Creiamo dinamicamente l'HTML partendo da js :
// // @ Bersagliamo gli elementi nel DOM

// const carousel = document.getElementById('carousel');
// const description = document.getElementById('description');
// const thumbnails = document.getElementById('thumbnails');
// const startButton = document.getElementById('start-button');
// const stopButton = document.getElementById('stop-button');
// const invertButton = document.getElementById('invert-auto');

// // @ Funzioni

// const insertImageinCarousel = (image, index) => {

//     const { url, title, description } = image;

//     //Creiamo un element figure
//     const figureElement = document.createElement('figure');
//     figureElement.classList.add('w-100', 'h-100', 'position-relative');
//     figureElement.dataset.number = `image-${index}`;
//     figureElement.id = `image-carousel-${index}`;
//     if (index !== 0) figureElement.classList.add('d-none');
//     else {
//         figureElement.classList.add('active');
//         description.inn
//     }

//     //Creiamo un element img
//     const imgElement = document.createElement('img');

//     imgElement.src = url;
//     imgElement.alt = title;

//     const text = document.createElement('div');
//     text.classList.add('description');
//     text.innerHTML = `${title}<br>${description}`;
//     figureElement.appendChild(text);

//     //Agganciamo l'img e il figure
//     figureElement.appendChild(imgElement);
//     carousel.appendChild(figureElement);

// }

// const insertImageinThumbnails = (image, index) => {
//     const { url, title, description } = image;

//     //Creiamo un element figure
//     const figureElement = document.createElement('figure');
//     figureElement.classList.add('w-100', 'h-100');
//     figureElement.dataset.number = `image-${index}`;
//     figureElement.id = `image-thumb-${index}`;
//     if (index !== 0) figureElement.classList.add('not-active-image-thumb');
//     else figureElement.classList.add('active-image-thumb');

//     //Creiamo un element img
//     const imgElement = document.createElement('img');

//     imgElement.src = url;
//     imgElement.alt = title;

//     //Agganciamo l'img e il figure
//     figureElement.appendChild(imgElement);
//     thumbnails.appendChild(figureElement);
// }

// const insertScrollRightAndLeft = () => {
//     carousel.innerHTML += `<button id="left-scroll" class="border-0"><i class="fa-solid fa-caret-left fa-2x"></i></button>
//     <button id="right-scroll" class="border-0"><i class="fa-solid fa-caret-right fa-2x"></i></button>`
// }

// const disabledThumbFigure = (allThumbFigure, figure) => {
//     allThumbFigure.forEach((oldFigure) => {
//         if (oldFigure.classList.contains('active-image-thumb')) {
//             oldFigure.classList.remove('active-image-thumb')
//             oldFigure.classList.add('not-active-image-thumb')
//         }
//     });

//     figure.classList.remove('not-active-image-thumb');
//     figure.classList.add('active-image-thumb');
// }

// const disabledCarouselFigure = (allCarouselFigure) => {
//     allCarouselFigure.forEach((oldFigure) => {
//         if (oldFigure.classList.contains('active')) {
//             oldFigure.classList.remove('active')
//             oldFigure.classList.add('d-none');
//         }
//     });
// }

// // Inseriamo le singole immagini e gli scroll laterali

// images.forEach((image, index) => {
//     insertImageinCarousel(image, index);
//     insertImageinThumbnails(image, index)
// });

// insertScrollRightAndLeft();

// // # Milestone 2 

// // @ Bersagliamo i bottoni ed abilitiamo lo scroll laterale

// const rightButton = document.getElementById('right-scroll');
// const leftButton = document.getElementById('left-scroll');
// const allThumbFigure = document.querySelectorAll('#thumbnails figure');
// const allCarouselFigure = document.querySelectorAll('#carousel figure');

// // @ Definiamo la logica dei bottoni con gli addEventListener

// // * Bottone di destra

// let currentPosition = 0;

// const listOfFigure = document.querySelectorAll('#carousel figure');

// const rightScroll = () => {
//     listOfFigure[currentPosition].classList.remove('active');
//     listOfFigure[currentPosition].classList.add('d-none');
//     allThumbFigure[currentPosition].classList.remove('active-image-thumb');
//     allThumbFigure[currentPosition].classList.add('not-active-image-thumb');

//     if (currentPosition === listOfFigure.length - 1) currentPosition = 0;
//     else currentPosition++;

//     listOfFigure[currentPosition].classList.remove('d-none');
//     listOfFigure[currentPosition].classList.add('active');
//     allThumbFigure[currentPosition].classList.remove('not-active-image-thumb');
//     allThumbFigure[currentPosition].classList.add('active-image-thumb');
// }

// const leftScroll = () => {
//     listOfFigure[currentPosition].classList.remove('active');
//     listOfFigure[currentPosition].classList.add('d-none');
//     allThumbFigure[currentPosition].classList.remove('active-image-thumb');
//     allThumbFigure[currentPosition].classList.add('not-active-image-thumb');

//     if (currentPosition === 0) currentPosition = listOfFigure.length - 1;
//     else currentPosition--;

//     listOfFigure[currentPosition].classList.remove('d-none');
//     listOfFigure[currentPosition].classList.add('active');
//     allThumbFigure[currentPosition].classList.remove('not-active-image-thumb');
//     allThumbFigure[currentPosition].classList.add('active-image-thumb');
// }

// rightButton.addEventListener('click', () => {
//     rightScroll();
// });

// // * Bottone di sinistra

// leftButton.addEventListener('click', () => {
//     leftScroll();
// });

// // # BONUS 1

// allThumbFigure.forEach((figure, index) => {
//     figure.addEventListener('click', () => {

//         // // Disabilito la figure nel thumbnails che è in active
//         // disabledThumbFigure(allThumbFigure, figure);

//         // //******************* */

//         // // Disabilito la figure nel carousel che è in active
//         // disabledCarouselFigure(allCarouselFigure);

//         // const newVisual = document.getElementById(`image-carousel-${index}`)

//         // newVisual.classList.remove('d-none');
//         // newVisual.classList.add('active');

//         // currentPosition = index;

//         // $ SOLUZIONE MIGLIORE E MAGGIORMENTE PULITA

//         listOfFigure[currentPosition].classList.remove('active');
//         listOfFigure[currentPosition].classList.add('d-none');
//         allThumbFigure[currentPosition].classList.remove('active-image-thumb');
//         allThumbFigure[currentPosition].classList.add('not-active-image-thumb');

//         currentPosition = index;

//         listOfFigure[currentPosition].classList.remove('d-none');
//         listOfFigure[currentPosition].classList.add('active');
//         allThumbFigure[currentPosition].classList.remove('not-active-image-thumb');
//         allThumbFigure[currentPosition].classList.add('active-image-thumb');
//     })
// });

// // # BONUS 2

// // const timerInterval = setInterval(() => {
// //     listOfFigure[currentPosition].classList.remove('active');
// //     listOfFigure[currentPosition].classList.add('d-none');

// //     if (currentPosition === listOfFigure.length - 1) currentPosition = 0;
// //     else currentPosition++;

// //     listOfFigure[currentPosition].classList.remove('d-none');
// //     listOfFigure[currentPosition].classList.add('active');
// // }, 3000);

// // # BONUS 3

// let timerInterval;

// const startIntervalRight = () => {
//     timerInterval = setInterval(() => {
//         rightScroll();
//     }, 3000)
// }

// const startIntervalLeft = () => {
//     timerInterval = setInterval(() => {
//         leftScroll();
//     }, 3000)
// }

// // Situazione iniziale

// let rightToLeft = false;
// let leftToRight = true;

// startButton.addEventListener('click', () => {
//     startIntervalRight();
// })

// stopButton.addEventListener('click', () => {
//     clearInterval(timerInterval);

//     rightToLeft = false;
//     leftToRight = true;

// })

// invertButton.addEventListener('click', () => {
//     rightToLeft = !rightToLeft;
//     leftToRight = !leftToRight;

//     clearInterval(timerInterval);

//     if (leftToRight) startIntervalRight();
//     else startIntervalLeft();
// })

