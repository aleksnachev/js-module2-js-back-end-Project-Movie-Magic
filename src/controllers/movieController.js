import { Router } from "express";

const movieController = Router()

movieController.get('/movies/create', (req,res) => {
    res.send('Movie created')
})

export default movieController