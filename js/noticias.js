function alterar_tema() {
    var body = document.body;

    if (body.classList.contains("escuro")) {
        body.classList.remove("escuro");
        body.classList.add("claro");
    }
    else {
        body.classList.remove("claro");
        body.classList.add("escuro");
    }
}

function abrirLightbox(element) {
    var lightbox = document.getElementById("lightbox");
    var lightbox_img = document.getElementById("lightbox-img");

    lightbox_img.src = element.src;
    lightbox.style.display = "flex";
}

function fecharLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function exibir_noticias(){
    const section = document.getElementById("noticias")

    var noticias = [
        {
            imagem: "../img/sla.png",
            titulo: "Estratégias em um Novo Paradigma Globalizado",
            descricao: "Podemos já vislumbrar o modo pelo qual a estruturação de redes de cooperação intersetorial estende o alcance e a importância do sistema de participação geral. Do mesmo modo, a execução dos pontos do programa possibilita uma melhor visão global dos relacionamentos verticais entre as hierarquias. Considerando as lições aprendidas, a competitividade nas transações comerciais apresenta tendências no sentido de aprovar a manutenção dos métodos utilizados na avaliação de resultados. Do ponto de vista estrutural, a necessidade de renovação processual converge para práticas mais resolutivas dos processos que moldam a realidade institucional.",
            link: "https://lerolero.bgnweb.com.br/"
        },
        {
            imagem: "../img/glob.png",
            titulo: "Estratégias em um Novo Paradigma Globalizado",
            descricao: "Por outro lado, o julgamento imparcial das eventualidades agrega valor ao estabelecimento do processo de comunicação como um todo. À medida que avançamos, a integração das tecnologias emergentes assume importantes posições no estabelecimento das direções preferenciais no sentido do progresso. Acima de tudo, é fundamental ressaltar que a constante divulgação das informações causa impacto indireto na reavaliação das condições inegavelmente apropriadas. Desta maneira, a gestão eficiente dos recursos estratégicos ainda não demonstrou convincentemente que vai participar na mudança de todos os recursos funcionais envolvidos.",
            link: "https://lerolero.bgnweb.com.br/"
        },
        {
            imagem: "../img/johnny.png",
            titulo: "Johnny",
            descricao: "Acima de tudo, é fundamental ressaltar que a consolidação de novos paradigmas operacionais incorpora valores fundamentais à transformação das condições inegavelmente apropriadas. Sob essa perspectiva, a adoção de políticas descentralizadoras auxilia a preparação e a composição das condições financeiras e administrativas exigidas. Por intermédio de análises qualificadas, o desenvolvimento contínuo de distintas formas de atuação reforça a necessidade de ajustes dinâmicos dos processos que moldam a realidade institucional. Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a expansão dos mercados mundiais agrega valor ao estabelecimento da fluidez dos cenários contemporâneos.",
            link: "https://lerolero.bgnweb.com.br/"
        },
                {
            imagem: "../img/bambe.png",
            titulo: "Bambe",
            descricao: "A partir de reflexões estratégicas, a contínua expansão de nossa atividade estende o alcance e a importância das diversas correntes de pensamento. Todavia, a utilização racional de ativos intangíveis causa impacto indireto na reavaliação da inteligência coletiva mobilizada. É claro que o comprometimento entre as equipes incorpora valores fundamentais à transformação dos conhecimentos estratégicos para atingir a excelência. Do ponto de vista estrutural, o acompanhamento das preferências de consumo assume importantes posições no estabelecimento dos contextos operacionais cada vez mais complexos. O empenho em analisar o desafiador cenário globalizado maximiza as possibilidades por conta da lógica predominante nas decisões estratégicas.",
            link: "https://lerolero.bgnweb.com.br/"
        }
    ];
    var html = "";
    noticias.forEach(noticia => {
        html += `
            <article class="noticia">
                <img src="${noticia.imagem}" onclick="abrirLightbox(this)" alt="${noticia.titulo}">
                <h2>${noticia.titulo}</h2>
                <p>${noticia.descricao}</p>
                <a href="${noticia.link}">Leia mais...</a>
            </article>
        `;
    });

    section.innerHTML = html;
}