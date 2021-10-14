const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');
const { response } = require('express');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
let Pedidos=models.Pedidos;

app.get('/createe',async (req,res)=>{
    let create=await Pedidos.create({
        name:"josé",
        descricao:"Mesa-1, Deseja 1-suco de laranja e um macarrção ao molho branco",
        data_lancamento: new Date(),
        data_conclusao: new Date(),
        createdAt: new Date(),
        updatedAt: new Date() 
    });
    res.send('Pedido lançado com sucesso !');
});

app.get('/update', async (req,res)=>{
    let update=await Pedidos.findByPk(1).then((response)=>{
        response.name='Victor';
        response.descricao='testei-mesa22';
        response.save();
    });
});

app.get('/delate', async (req,res)=>{
    Pedidos.destroy({
        where:{id:2}
    });
});

let port=process.env.port || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor rodou');
})