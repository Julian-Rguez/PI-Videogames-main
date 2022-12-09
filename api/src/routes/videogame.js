require("dotenv").config();
const { Router } = require('express');
const axios = require('axios');
const { API_KEY } = process.env;
const { Videogame, Genre } = require('../db.js')

const router = Router();


// Obtengo el detalle de un videogame en particular por ID
router.get('/:id', async function (req, res) {
    const { id } = req.params;

    try { 
        if (id.includes("-")) {
            const gameDB = await Videogame.findOne({ where: {id},
                include: {model: Genre, attributes: ['name'],
                through: {attributes: []}}})
                let data = gameDB
                const information = {
                    id: data.id,
                    name: data.name,
                    image: data.image,
                    rating: data.rating,
                    description: data.description,
                    released: data.released,
                    platforms: data.platforms,
                    createdAt: data.createdAt,
                    updateAt: data.updatedAt,
                    genres: data.genres.map(p => p.name).join(', ')
                }
                return res.json(information)
        } else {
            const gameAPI = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
                    
                let data = gameAPI.data;
                const information = {
                    name: data.name,
                    image: data.background_image,
                    genres: data.genres && data.genres.map((p) =>
                        p.name).filter(p => p != null).join(', '),
                    description: data.description_raw,
                    released: data.released,
                    rating: data.rating,
                    platforms: data.platforms && data.platforms.map((p) =>
                        p.platform.name).filter(p => p != null).join(', ')
                }
                return res.json(information)
        }
    } catch (err) {
        res.status(404).json({ error: "ID not found" })
    }
})

module.exports = router;