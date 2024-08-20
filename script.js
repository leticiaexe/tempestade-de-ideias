const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "vc acorda com uma mensagem em seu celular, nela estava escrito escolha ou morra , oq vc escolhe?",
        alternativa:[
            "eu escolho",
            "eu morro"
        ]
    },
    {
        enunciado: "vc escolheu a primeira alternativa agora vc deve escolher para nao morrer",
        alternativa:[
            "um dedo do pe",
            "morrer"
        ]
    },
    {
        enunciado: "vc escolheu um dedo do pe, agora tera de secolher novamente para n morrer",
        alternativa:[
            "uma mao",
            "morrer"

        ]
    },
    {
        enunciado: "vc escolheu morrer, mas para sua sorte pode reviver em um lugar",
        alternativa:[
            "ceu",
            "inferno"
        ]
    },
    {
        enunciado: "vc escolheu o ceu",
        alternativa:[
            "vc acordou de um pesadelo",
            "vc acordou de um pesadelo"
        ]
    },
 
];