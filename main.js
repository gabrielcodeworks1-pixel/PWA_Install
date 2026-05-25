import Pessoa from "./model/Pessoa.js";
import Aluno from "./model/Aluno.js";
import Usuario from "./Usuario.js";

//-- Usuarios --
let meuArrayDeUsuarios = [];
let u1 = new Usuario("Linux Torvals", "9876");
let u2 = new Usuario("Oda", "0123");
let u3 = new Usuario("1155 ET", "1234");

meuArrayDeUsuarios[0] = u1;
meuArrayDeUsuarios[1] = u2;
meuArrayDeUsuarios[2] = u3;

let pAlan = new Pessoa("Alan", 41);
let aAlan = new Aluno("Alan", 41, "Ciencia da Computação")

// -- Service Worker --
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./meuserviceworker.js')
            .then(function(registration) {
                console.log('Service Worker registered: ', registration);
            })
            .catch(function(error) {
                console.log('Service Worker registration failed: ', error);
            });
    });
} else {
    console.log('Service Workers are not supported in this browser.');
}

// Login
document.getElementById("formLogin").addEventListener("submit", function(e){
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

// validação do login
if(nome === "RM25504" && senha === "M25504"){
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("gamesPage").style.display = "block";
} else {
    alert("Usuário ou senha inválidos!");
        }
    }
);