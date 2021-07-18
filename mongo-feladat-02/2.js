db.directors.find().forEach(director => {
    const movies = db.movies
        .find({ director: director.name })
        .map(movie => movie._id);
    
    db.directors.update(
        { _id: director._id },
        { $push: { movies: { $each: movies } } }
    )
});