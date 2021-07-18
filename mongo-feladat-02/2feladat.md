# 2. Feladat:

## 2. Ments el benne 3 „rendező” dokumentumot az insertOne() parancs segítségével:

```js
use videoStore
db.directors.insertOne({_id: 1, name: "Steven Spilberg", birthYear: 1946, movies: []})
db.directors.insertOne({_id: 2, name: "Clint Eastwood", birthYear:1930, movies: []})
db.directors.insertOne({_id: 3, name: "James Cameron", birthYear: 1954, movies: []})
```

## 4. Frissítsd a rendezők dokumentumait:

```js
db.directors.find().forEach(director => {
    const movies = db.movies
        .find({ director: director.name })
        .map(movie => movie._id);
    
    db.directors.update(
        { _id: director._id },
        { $push: { movies: { $each: movies } } }
    )
});
```