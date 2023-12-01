// Import package express
const express = require('express');
const server = express();

//masih ambil data dari folder data bukan database
const fs = require('fs');

//import cors 
const cors  = require('cors')


//define port
const PORT = 3001;

//pakai cors agar bisa share resource antar backend dan frontend
server.use(cors());


//handle request di main routes ("/")
server.get("/", function (request, response) {
    //langsung kirim response aja tanpa membaca detail requestnya
    response.send("Akan membalikan sebuah response");
});

//dari rute ini harapannya bisa mengirimkan data menu ke yang meminta request data menu
server.get("/menu", (req, res) => {
    //nanti proses logicnya itu ambil data dulu dari database, lalu dikirim melalui response, saat ini kita masih pake data dari json dulu/fake data
    
    //ambil data json dari /data/menu.json
    fs.readFile('./data/menu.json', (error, data) => {
        if (error) res.send("Gagal dalam pembacaan data");
        const menu = JSON.parse(data);
        res.status(200).send(menu);
    });
});

//menangkap semua request/permintaan ke rute yang tidak dikenal
server.all("*", (req, res) => {
    res.status(404).send("404 not found");
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);

});
