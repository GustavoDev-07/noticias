import express from 'express'
import cors from 'cors'
import executarQuery from "./db.js"

const app = express();

app.use(cors())
app.use(express.json());

app.get('/noticias', async (req, res) => {
    let query = `
        SELECT
            titulo,
            conteudo,
            caminhoImagem,
            link
        FROM
            noticias
        ORDER BY 
            id DESC
        LIMIT 10
    `;

    let resultado = await executarQuery(query);
    res.send(resultado[0]);
});

app.post('/noticias', async (req, res) => {

    var query = `
        INSERT INTO noticias(
            titulo,
            conteudo,
            caminhoImagem,
            link
        ) VALUES (
            ?,
            ?,
            ?,
            ? 
        )
    `;

    var noticia = [
        req.body.titulo,
        req.body.conteudo,
        req.body.caminhoImagem,
        req.body.link
    ];


    let resultado = await executarQuery(query, noticia);

    try {

        res.send({
            insertId: resultado[0].insertId
        });
    }
    catch {
        res.send({
            insertId: null
        });
    }
})

// app.get('/check', async (req, res) => {
//     var status = {
//         status: "Running.."
//     }
//     res.send(status);
// });

// app.post('/check', async (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
//     })

//     app.get('/hello', async (req, res) => {
//     var hello = {
//         hello: "Hello from Teacher!"
//     };
//     res.send(hello);
// });

// app.post('/hello', async (req, res) => {
//     try {
//         res.send({
//             hello: `Tares diz olá pra você ${req.body.name}`
//         })
//     }
//     catch{
//         res.send({
//             hello: 'fail'
//         })
//     }
// });

app.listen(3000, () => {
    console.log("Servidor online em http://localhost:3000");
})