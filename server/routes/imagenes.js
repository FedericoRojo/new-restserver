const express = require('express');
const fs = require('fs');
const path = require('path');
const { verificarTokenImage } = require('../middlewares/autenticacion')

const app = express();

app.get('/image/:tipo/:img', verificarTokenImage, (req, res) => {

    let tipo = req.params.tipo;
    let img  = req.params.img;

    let imagePath = path.resolve(__dirname, `../uploads/${tipo}/${img}`);
  
    if (fs.existsSync(imagePath)) {
        res.sendFile(imagePath)
    }else{
        let noImagePath = path.resolve(__dirname, `../assets/no-image.jpg`)
        res.sendFile(noImagePath);
    }


});



module.exports = app;
