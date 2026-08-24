const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um importante colaborador do movimento ecossocialista e percebe que sua cidade produz toneladas de lixo todos os dias. Qual será sua primeira atitude?",
        alternativas: [
            {
                texto: "Criar cooperativas de reciclagem administradas pelos trabalhadores.",
                afirmacao: "Você criou cooperativas de reciclagem e ajudou a gerar empregos, melhorar a coleta seletiva e dar mais autonomia aos trabalhadores."
            },
            {
                texto: "Contratar grandes empresas para cuidar da reciclagem.",
                afirmacao: "Você contratou grandes empresas para acelerar a reciclagem, mas parte dos lucros e das decisões ficou concentrada nas mãos dessas empresas."
            }
        ]
    },

    {
        enunciado: "Uma grande fábrica da cidade está poluindo um rio, mas emprega milhares de pessoas. O que você decide fazer?",
        alternativas: [
            {
                texto: "Exigir que a fábrica faça uma transição para uma produção sustentável.",
                afirmacao: "Você conseguiu proteger o rio sem abandonar os trabalhadores, mas a fábrica precisou investir muito dinheiro para mudar sua forma de produção."
            },
            {
                texto: "Defender o fechamento imediato da fábrica.",
                afirmacao: "Você conseguiu interromper rapidamente a poluição do rio, mas milhares de trabalhadores ficaram preocupados com a possibilidade de perder seus empregos."
            }
        ]
    },

    {
        enunciado: "A população ainda não está acostumada a separar o lixo. Como você pretende incentivar a reciclagem?",
        alternativas: [
            {
                texto: "Criar campanhas educativas e recompensas para quem reciclar.",
                afirmacao: "Você criou campanhas ambientais e mostrou à população que pequenas atitudes poderiam ajudar na preservação do planeta."
            },
            {
                texto: "Criar uma lei obrigando todos a separar os resíduos.",
                afirmacao: "A quantidade de materiais reciclados aumentou rapidamente, mas algumas pessoas começaram a reclamar que o governo estava interferindo demais em suas escolhas."
            }
        ]
    },

    {
        enunciado: "Seu movimento ecossocialista cresceu e agora você precisa decidir como lidar com empresas que poluem muito. O que você faz?",
        alternativas: [
            {
                texto: "Aumentar os impostos para empresas altamente poluentes.",
                afirmacao: "Você fez as empresas poluentes pagarem mais e utilizou os recursos arrecadados para financiar projetos ambientais e sociais."
            },
            {
                texto: "Dar benefícios fiscais para empresas que se tornarem sustentáveis.",
                afirmacao: "Você incentivou as empresas a adotarem práticas sustentáveis, mas o governo passou a arrecadar menos impostos."
            }
        ]
    },

    {
        enunciado: "Uma fábrica de produtos descartáveis será transformada em uma fábrica de produtos reutilizáveis. Os trabalhadores não conhecem as novas tecnologias. Qual será sua decisão?",
        alternativas: [
            {
                texto: "Oferecer cursos gratuitos para capacitar os trabalhadores.",
                afirmacao: "Você investiu na capacitação dos trabalhadores, permitindo que eles mantivessem seus empregos e aprendessem novas funções."
            },
            {
                texto: "Contratar profissionais que já possuem experiência.",
                afirmacao: "A fábrica conseguiu iniciar rapidamente sua nova produção, mas muitos trabalhadores antigos perderam seus empregos."
            }
        ]
    },

    {
        enunciado: "Depois de anos de trabalho, você se tornou um dos principais líderes do movimento ecossocialista. Agora precisa escolher como transformar a economia do país. O que você faz?",
        alternativas: [
            {
                texto: "Fazer uma transformação gradual e sustentável.",
                afirmacao: "Você decidiu fazer uma transição gradual, permitindo que trabalhadores, empresas e comunidades se adaptassem às novas práticas ambientais."
            },
            {
                texto: "Fazer uma transformação rápida e profunda.",
                afirmacao: "Você acelerou a transformação ecológica do país, conseguindo resultados ambientais mais rápidos, mas enfrentando forte resistência de empresas e parte da população."
            }
        ]
    },

    {
        enunciado: "O país está mais limpo, a reciclagem aumentou e milhares de trabalhadores participam de cooperativas. Porém, o crescimento econômico está pressionando novamente os recursos naturais. Qual será sua última decisão?",
        alternativas: [
            {
                texto: "Priorizar a preservação ambiental.",
                afirmacao: "Você colocou a preservação do planeta acima do crescimento econômico e ajudou a construir uma sociedade mais sustentável, com maior valorização dos recursos naturais."
            },
            {
                texto: "Permitir o crescimento econômico com metas ambientais.",
                afirmacao: "Você permitiu que a economia continuasse crescendo, mas obrigou as empresas a cumprir metas ambientais para diminuir os impactos sobre a natureza."
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;

    historiaFinal += afirmacao + " ";

    atual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua história no ecossocialismo";

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.textContent = "";
}

mostraPergunta();