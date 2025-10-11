import Movie from "../models/Movie.js";

export default{
    async getAll(filter = {}) {
        let query = Movie.find()

        if (filter.title){
            query = query.find({title:{$regex: filter.title, $options:'i'}})
        }

        if (filter.genre){
            query = query.find({genre: {$regex: new RegExp(`^${filter.genre}$`), $options: 'i'}})
        }

        if (filter.year){
            query = query.where('year').equals(filter.year)
        }


        return query
    },
    getOne(movieId){
        return Movie.findById(movieId)
    },
    create(movieData){
        
        movieData.rating = Number(movieData.rating)
        // const movie = new Movie(movieData)
        // return movie.save()
        return Movie.create(movieData)
    }
}