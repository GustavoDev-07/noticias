DROP DATABASE IF EXISTS noticiario;
CREATE DATABASE IF NOT EXISTS noticiario;
USE noticiario;
CREATE TABLE noticias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(250) NOT NULL,
    conteudo TEXT NOT NULL,
    caminhoImagem VARCHAR(250),
    link VARCHAR(250)
);
INSERT INTO noticias (
    titulo,
    conteudo,
    caminhoImagem,
    link
) VALUES (
    'Estratégias em um Novo Paradigma Globalizado',
    'Podemos já vislumbrar o modo pelo qual a estruturação de redes de cooperação intersetorial estende o alcance e a importância do sistema de participação geral. Do mesmo modo, a execução dos pontos do programa possibilita uma melhor visão global dos relacionamentos verticais entre as hierarquias. Considerando as lições aprendidas, a competitividade nas transações comerciais apresenta tendências no sentido de aprovar a manutenção dos métodos utilizados na avaliação de resultados. Do ponto de vista estrutural, a necessidade de renovação processual converge para práticas mais resolutivas dos processos que moldam a realidade institucional',
    '../img/sla.png',
    '../html/noticia.html'
);
SELECT
    titulo,
    conteudo,
    caminhoImagem,
    link
FROM
    noticias;