const express = require ('express')
const handlebars = require('express-handlebars')
const bodyParser = require ('body-parser')
// const mongoose = require ('mongoose')
const app = express()
const admin = require("./routes/admin") //trago o arquivo da pasta routes (admin.js) para uma constante que eu defini
const path = require('path')

//config
    //body parser
        app.use(express.urlencoded({extended:true}))
        app.use(express.json())
    //handlebars
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //Moongose


    //PUBLIC
        app.use(express.static(path.join(__dirname, 'public')))
        


//rotas
app.get('/', (req,res) =>{ //pagina principal/home
    res.send('<h1>APENAS UM TESTE DE PAGINA PRINCIPAL</h1>')
}) 

app.use('/admin', admin) //aqui eu defino o prefixo da pagina, junto a sua definição (mais utilizado para sites que irão utilizar mais de uma pagina)





//outros
const PORT = 3000
app.listen(PORT, ()=>{  console.log('Servidor Online rodando na porta http://localhost:3000') })