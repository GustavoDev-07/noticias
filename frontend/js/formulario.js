// Mantém a funcionalidade de trocar o tema na página atual
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

// Função responsável por enviar os dados via POST para o Backend
async function cadastrar_noticia(event) {
    // Impede o recarregamento padrão da página ao submeter o formulário
    event.preventDefault();

    // Captura os dados digitados pelo usuário
    const titulo = document.getElementById("titulo").value;
    const conteudo = document.getElementById("conteudo").value;
    const caminhoImagem = document.getElementById("caminhoImagem").value;
    const link = document.getElementById("link").value;

    // Monta o objeto JSON baseado estritamente no req.body esperado pelo server.js
    const payload = {
        titulo: titulo,
        conteudo: conteudo,
        caminhoImagem: caminhoImagem,
        link: link
    };

    try {
        // Realiza a chamada do método POST para o endpoint correto
        const resposta = await fetch('http://127.0.0.1:3000/noticias', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const resultado = await resposta.json();

        // Tratamento da resposta baseado no try/catch do seu backend
        if (resultado.insertId !== null) {
            alert("Notícia cadastrada com sucesso! ID: " + resultado.insertId);
            
            // Limpa todos os campos do formulário para o próximo envio
            document.getElementById("form_noticia").reset();
        } else {
            alert("O servidor processou a requisição, mas falhou ao salvar no banco.");
        }

    } catch (erro) {
        console.error("Erro na comunicação com a API:", erro);
        alert("Não foi possível conectar ao servidor. Certifique-se de que o backend está rodando na porta 3000.");
    }
}