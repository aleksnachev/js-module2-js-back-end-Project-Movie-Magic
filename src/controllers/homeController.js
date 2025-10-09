import { Router } from "express";
import movieService from "../services/movieService.js";

const homeController = Router()

homeController.get('/', async (req,res) => {
    const movies = await movieService.getAll()

    res.render('home', {movies})
})

homeController.get('/about', (req,res) => {
    res.render('about', {pageTitle: 'About Us'})
})

export default homeController