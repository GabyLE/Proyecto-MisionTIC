const express = require('express');
const app = express();
const puerto = 3010;

app.get('/', (req, res) => {
    res.send('Servicio de BD Comercializadora en funcionamiento');
});

app.use(express.json());
const cors = require('cors');
app.use(cors());

require("./routes/venta.rutas")(app);

app.listen(puerto, () => {
    console.log(`Servicio de BD Comercializadora eschuchando en http://localhost:${puerto}`);
})