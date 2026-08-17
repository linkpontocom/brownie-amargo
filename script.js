const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia: um chat que responde a todas as dúvidas. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do impacto que a IA pode ter no futuro."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Ficou empolgado com as possibilidades de usar a IA no dia a dia."
            }
        ]
    },
    {
        enunciado: "A professora pede para você fazer um trabalho sobre o uso de IA na sala de aula. Como você produz seu trabalho?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de IA para pesquisar e estruturar as ideias.",
                afirmacao: "Conseguiu utilizar a IA como ferramenta para otimizar suas pesquisas."
            },
            {
                texto: "Escreve o trabalho com base nas suas próprias pesquisas.",
                afirmacao: "Preferiu desenvolver o trabalho utilizando métodos tradicionais."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sobre";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();