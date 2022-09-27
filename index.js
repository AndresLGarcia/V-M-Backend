const express = require("express");
const routes = require("./app/routes");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3300;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.use(routes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = app;
