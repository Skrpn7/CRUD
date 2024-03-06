const express = require('express')
const app = express()
const Product = require('./models/product.model.js')
const productroute = require('./routes/product.route.js');
const mongoose = require('mongoose');


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//routes

app.use('/api/products',productroute)


//connesction with database
mongoose.connect('mongodb+srv://somesh7:iMRJrBXmzaSe1dX4@cluster0.n7hp31g.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected! To the database')
        app.listen(3000, () => {
            console.log("Server Has started at port 3000")
        })

    });

app.get('/', (req, res) => {
    res.send('Hello World')
})









// app.post('/api/products', async (req, res) => {
//     try {
//         const product = await Product.create(req.body);
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// })

// //get all products
// app.get('/api/products', async (req, res) => {
//     try {
//         const product = await Product.find({});
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });



////By id
// app.get('/api/products/:id', async (req, res) => {
//     try {
//         const { id } = req.params;

//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(500).json({ message: error.message })
//     }
// })


//update

// app.put('/api/products/:id', async (req, res) => {
//     try {
//         const product = await Product.findByIdAndUpdate(req.params.id, req.body);

//         if (!product) {
//             return res.status(404).send("Product Not Found");
//         }

//         const updatedproduct = await Product.findById(req.params.id);
//         res.status(200).json(updatedproduct);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// })

//delete

// app.delete('/api/products/:id', async(req, res) => {
//     try {
//         const product = await Product.findByIdAndDelete(req.params.id)
//         if(!product){
//             return res.status(404).send("Product Not Found");
//         }
//         res.status(200).json({message:"Product Deleted Successfully"});
//     } catch (error) {
//         res.status(500).json({message:error.message});
//     }
// })