const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to homepage')
});

const port = 3000

app.listen(port, () => {
    console.log('App is on port 3000');

})

app.get('/products', (req, res) => {
    const products = [
        {
            id: 1,
            label: 'Product One'
        },
        {
            id: 2,
            label: 'Product Two'
        }, {
            id: 3,
            label: 'Product Tree'
        },
    ]
    res.json(products)
});

app.get('/products/:id', (req,res)=>{
    const productId = parseInt(req.params.id);

     const products = [
        {
            id: 1,
            label: 'Product One'
        },
        {
            id: 2,
            label: 'Product Two'
        }, {
            id: 3,
            label: 'Product Tree'
        },
    ];
    const singleProduct = products.find(product=> product.id === productId);

    if(singleProduct){
        res.json(singleProduct)
    }else{
        res.status(404).send('Product not found')
    }
})