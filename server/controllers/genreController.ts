import { Request, Response } from "express"
const {Genre} = require('../models/models');

class GenreController {
    async create(req: Request, res: Response): Promise<Record<string, any>> {
        const {name} = req.body;
        const genre = await Genre.create({name});
        return res.json(genre)
    }

    async getAll(req: Request, res: Response): Promise<Record<string, any>> {
        const genres = await Genre.findAll()
        return res.json(genres)
    }

}

module.exports = new GenreController()