const express = require("express");
const {dbCONN} = require("./database/db")
const cors = require("cors");
const dns = require("dns");

// Forzar DNS
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Crear Servidor
const app = express();

dbCONN();

app.use(cors());

app.use(express.json());

app.use('', require("./routes/inventario"))

/*
app.get("/", (req, res) =>{
    //res.send("Hello Worlds");
    res.status(404).json({
        success: false,
        msg: "Not Found"
    })
}); */

app.listen(process.env.PORT, () =>{
    console.log("Server is running on port", process.env.PORT);
});