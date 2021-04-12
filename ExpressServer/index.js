let express = require('./src/express')
const app = express()

app.get('/', (req, res) => {
    res.writeHead(200)
    res.write('olá');
    res.end();
});


app.listen(3000, () => console.log('o app está rodando na porta 3000'))

// foi feito testes
