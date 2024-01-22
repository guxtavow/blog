const express = require('express');
const router = express.Router() //defino a varivel da rota

//PAGINA PRINCIPAL PARA ADMS
router.get('/', (req,res)=>{
    res.render("admin/index")
})//quando quero definir a variavel em outro arquivo, preciso chamalo da mesma forma que chamo no arquivo principal do node

//PAGINA DE POSTS
router.get('/posts', (req,res)=>{
    res.send("<h1>Página dos posts</h1>")
})

//PAGINA DE CATEGORIAS
router.get('/categorias',(req,res)=>{
    res.render('admin/categorias')
})

router.get('/categorias/add',(req,res)=>{
    res.render('admin/addcategorias')
})



module.exports = router//exporto a varivel para ser chamada no arquivo principal