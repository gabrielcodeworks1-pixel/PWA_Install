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

// Controladores de UI: landing -> login -> registro -> games
window.addEventListener('DOMContentLoaded', function() {
    const landing = document.getElementById('landingPage');
    const login = document.getElementById('loginPage');
    const register = document.getElementById('registerPage');
    const games = document.getElementById('gamesPage');

    const btnEntrar = document.getElementById('btnEntrar');
    const btnRegistrar = document.getElementById('btnRegistrar');
    const backFromLogin = document.getElementById('backFromLogin');
    const backFromRegister = document.getElementById('backFromRegister');

    if(btnEntrar){
        btnEntrar.addEventListener('click', function(){
            if(landing) landing.style.display = 'none';
            if(login) login.style.display = 'block';
        });
    }

    if(btnRegistrar){
        btnRegistrar.addEventListener('click', function(){
            if(landing) landing.style.display = 'none';
            if(register) register.style.display = 'block';
        });
    }

    if(backFromLogin){
        backFromLogin.addEventListener('click', function(e){
            e.preventDefault();
            if(login) login.style.display = 'none';
            if(landing) landing.style.display = 'block';
        });
    }

    if(backFromRegister){
        backFromRegister.addEventListener('click', function(e){
            e.preventDefault();
            if(register) register.style.display = 'none';
            if(landing) landing.style.display = 'block';
        });
    }

    // Login submit
    const form = document.getElementById('formLogin');
    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            const senha = document.getElementById('senha').value;

            // validação: corresponde a algum usuário existente OU credencial fallback
            const found = meuArrayDeUsuarios.find(u => u.nome === nome && u.senha === senha);
            if(found || (nome === 'RM25504' && senha === 'M25504')){
                if(login) login.style.display = 'none';
                if(games) games.style.display = 'block';
            } else {
                alert('Usuário ou senha inválidos!');
            }
        });
    }

    // Registro submit
    const formReg = document.getElementById('formRegister');
    if(formReg){
        formReg.addEventListener('submit', function(e){
            e.preventDefault();
            const nome = document.getElementById('regNome').value.trim();
            const senha = document.getElementById('regSenha').value;
            const senhaConf = document.getElementById('regSenhaConfirm').value;

            if(!nome || !senha){
                alert('Preencha nome e senha.');
                return;
            }
            if(senha !== senhaConf){
                alert('As senhas não coincidem.');
                return;
            }

            // checar existência
            const exists = meuArrayDeUsuarios.find(u => u.nome === nome);
            if(exists){
                alert('Usuário já existe. Escolha outro nome.');
                return;
            }

            const novo = new Usuario(nome, senha);
            meuArrayDeUsuarios.push(novo);
            alert('Conta criada com sucesso! Faça login.');
            if(register) register.style.display = 'none';
            if(login) login.style.display = 'block';
        });
    }
});