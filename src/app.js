const express = require('express');
const app = express();
const PORT = 7000;

app.use(express.json());

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))

app.get('/', (req, res) => res.send(`Funciona el port: ${PORT}`));