// Express variables
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Database variables (MongoDB + Mongoose)
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/recipesBook');

const Recipe = require('./models/Recipe.js');
const User = require('./models/User.js');

// Middlewares
app.use(express.json());
app.use(cors());

// Get requests
app.get('/', async (req, res) => {
    try {
        res.setHeader('Content-Type', 'application/json');

        const recipes = await Recipe.find().sort({ createdAt: 'desc' }).limit(3);

        res.json(recipes);
    } catch (error) {
        res.send(error.message);
    }
});

app.get('/recipes', async (req, res, next) => {
    try {
        res.setHeader('Content-Type', 'application/json');
        const recipes = await Recipe.find().sort({ createdAt: 'desc' });
        res.json(recipes);
    } catch (error) {
        res.send(error.message);
    }
});

app.get('/recipe', async (req, res, next) => {
    const ID = req.query.id;
    try {
        res.setHeader('Content-Type', 'application/json');

        const record = await Recipe.findOne({ _id: ID });

        res.send(record);
    } catch (error) {
        res.send(error.message);
    }
});

// Post requests
app.post('/recipes/add', async (req, res, next) => {
    try {
        const record = Object.assign({}, req.body, { author: 'testAuthor' });

        const dbRecord = new Recipe(record);

        await dbRecord.save();

        res.send({ "message": "Your recipe has been successfully added!" });
    } catch (error) {
        res.send(error.messsage);
    }
});

// Put requests
app.put('/recipes/edit', async (req, res, next) => {
    try {
        const id = { '_id': req.body.id };
        const update = Object.assign({}, {'title': req.body.title, 'description': req.body.description});

        await Recipe.findOneAndUpdate(id, update);

        res.send({message: 'Your recipe was updated successfully!'});
    } catch (error) {
        res.send(error.message);
    }
});

// Delete requests
app.delete('/recipes/delete', async(req, res, next) => {
    const id = req.query.id;

    try {
        await Recipe.deleteOne({'_id': id});

        res.send({message: 'Your recipe was deleted!'});
    } catch (error) {
        res.send(error.message);
    }
});

// app.post('/users/login', (req, res, next) => {
    // res.json(userData);
// });

// Server launch
app.listen(port, 'localhost', () => {
    console.log(`Listening on port: ${port}`);
});