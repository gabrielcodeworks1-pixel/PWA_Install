import Pessoa from "./model/Pessoa.js";
import Aluno from "./model/Aluno.js";
import Usuario from "./model/Usuario.js";

let meuArrayDeUsuarios = [];
let u1 = new Usuario("Linux Torvals", "1546");
let u2 = new Usuario("Oda", "1156");
let u3 = new Usuario("1155 ET", "1234");

meuArrayDeUsuarios[0] = u1;
meuArrayDeUsuarios[1] = u2;
meuArrayDeUsuarios[2] = u3;

let pAlan = new Pessoa("Alan", 41);
let aAlan = new Aluno("Alan", 41, "Ciencia da Computação")

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./meuserviceworker.js')
        .then(function(registration) {
            console.log('Service Worker registered: ', registration);
        })
        .catch(function(error) {
            console.log('Service Worker registration failed: ', error);
        });
} else {
    console.log('Service Workers are not supported in this browser.');
}

console.log(pAlan);