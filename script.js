const paises = [
    ["África do Sul", "A África do Sul é um país situado na extremidade sul do continente africano e marcado por vários ecossistemas diferentes."],
    ["San Marino", "San Marino é uma micronação montanhosa cercada pela região centro-norte da Itália."],
    ["Suíça", "A Suíça é um país montanhoso da Europa Central com um grande número de lagos, vilas e picos elevados dos Alpes."],
    ["Noruega", "A Noruega é um país escandinavo que abrange montanhas, geleiras e fiordes litorâneos profundos."],
    ["Croácia", "A Croácia é um país da Europa Oriental com uma longa costa no Mar Adriático."],
    ["Madagascar", "Madagascar é um grande país insular situado perto da costa sudeste da África."],
    ["Índia", "A Índia é um extenso país do Sul da Ásia com geografia diversificada, incluindo desde os picos do Himalaia até a costa do Oceano Índico, e uma história que remonta a cinco milênios."],
    ["Marrocos", "Marrocos, um país do Norte da África banhado pelo Oceano Atlântico e pelo Mar Mediterrâneo, distingue-se pelas influências das culturas berbere, árabe e europeia."],
    ["Vaticano", "A Cidade do Vaticano, uma cidade-estado cercada por Roma, Itália, é a sede da Igreja Católica Romana."],
    ["Sri Lanka", "O Sri Lanka (anteriormente conhecido como Ceilão) é um país insular ao sul da Índia, situado no Oceano Índico."]
];

const numVezesSorteado = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const btnMensagem = document.querySelector("#btnMensagem");
const boxMensagem = document.querySelector("#boxMensagem");

const h1Mensagem = document.querySelector("#h1Mensagem");
const pMensagem = document.querySelector("#pMensagem");
const h2Mensagem = document.querySelector("#h2Mensagem");

console.log(h1Mensagem);

function sortear() {
    let numSorteio = Math.floor(Math.random() * 10);

    numVezesSorteado[numSorteio] += 1;

    h1Mensagem.innerHTML = paises[numSorteio][0];
    pMensagem.innerHTML = paises[numSorteio][1];
    h2Mensagem.innerHTML = `Vezes sorteado: ${numVezesSorteado[numSorteio]}`;

    console.log(numVezesSorteado);
}