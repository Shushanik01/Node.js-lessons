import axios from "axios";
import express from 'express'
const apiUrl = process.env.API_URL;

const app = express();
const port = 3000;

// app.get('/', async (req, res)=>{
//     const {participants} = req.query
//     const apiCall = await axios.get(`${apiUrl}activity/filter?participants=${participants}`);
//     res.send(apiCall.data)
// });



// app.get('/participants', async(req, res)=>{
//     const partiCall = await axios.get(`${apiUrl}participants`);
//     res.send(partiCall.data)
// });

// app.listen(port, ()=>{
//     console.log(`Server is running on port ${port}`);

// });

// const users = [
//     {name: 'userOne', id:1},
//     {name: 'userTwo', id:2},
//     {name: 'userThree', id: 3}
// ];

// const pokemons = [
//     {name: 'Pikachu', skill: 83, type: 'electric'},
//     {name: 'Raichu', skill: 88, type: 'electric'},
//     {name: 'Psuduck', skill: 93, }
// ];

// app.get('/pokemons', (req, res)=>{
//     const {name, skill, type} = req.query;

//     if(!name && !skill && !type){
//         res.json({
//             pokemons: pokemons
//         })
//     }
//     if(name){
//         const searchItem = pokemons.find(pokemon => pokemon.name === name);
//         res.json({
//             pokemon: searchItem
//         })
//     } else{
//         res.status(404).json({
//             message: 'Pokemon not found'
//         })
//     }
//     if(skill){
//         const searchItem = pokemons.filter(pokemon => pokemon.skill >= Number(skill))
//         res.json({
//             pokemons: searchItem
//         })
//     }
//     if(type){
//         const searchItem = pokemons.filter(pokemon => pokemon.type === type)
//         res.json({
//             pokemons: searchItem
//         })
//     }
// });

// app.listen(port);


const pokemons = [
    { id: 1, name: 'Pikachu', skill: 83, type: 'electric', evaluation: 1 },
    { id: 2, name: 'Raichu', skill: 88, type: 'electric', evaluation: 3 },
    { id: 3, name: 'Bulbasaur', skill: 100, type: 'water', evaluation: 2 },
    { id: 4, name: 'Psuduck', skill: 93, type: 'water',  evaluation: 1 },
    { id: 5, name: 'Meowth', skill: 53, type: 'grass',  evaluation: 1 },
    { id: 6, name: 'JigglyPuf', skill: 43, type: 'grass',  evaluation: 1 },
    { id: 7, name: 'Staru', skill: 100, type: 'water',  evaluation: 2 },
];

app.get('/pokemons', (req, res)=>{
    const {id, name, skills, type, evaluation} = req.query;

    if(!id && !name && !skills && !type && !evaluation){
        res.json({
            pokemons: pokemons
        })
    }
    if(id){
        const response = pokemons.find(pokemon => pokemon.id === id);
        res.json({
            pokemon: response
        });
    };
    if(name){
        const response = pokemons.find(pokemon => pokemon.name === name);
        res.json({
            pokemon: response
        })
    };
    if(skills){
        const response = pokemons.filter(pokemon => pokemon.skills >= skills);
        res.json({
            pokemon: response
        })
    };
    if(type){
        const response = pokemons.filter(pokemon => pokemon.type === type);
        res.json({
            pokemon: response
        })
    };
    if(evaluation){
        const resp = pokemons.filter(pokemon => pokemon.evaluation === Number(evaluation));
        res.json({
            pokemon: resp
        })
    };

});

app.put


app.listen(port)