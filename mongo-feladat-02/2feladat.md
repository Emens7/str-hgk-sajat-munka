# 2. Feladat:

## 2. Ments el benne 3 „rendező” dokumentumot az insertOne() parancs segítségével:

```js
use videoStore
db.directors.insertOne({_id: 1, name: "Steven Spilberg", birthYear: 1946, movies: []})
db.directors.insertOne({_id: 2, name: "Clint Eastwood", birthYear:1930, movies: []})
db.directors.insertOne({_id: 3, name: "James Cameron", birthYear: 1954, movies: []})
```

```js
db.directors.insert(
    [
        {_id: 1, name: "Steven Spilberg", birthYear: 1946, movies: []},
        {_id: 2, name: "Clint Eastwood", birthYear:1930, movies: []},
        {_id: 3, name: "James Cameron", birthYear: 1954, movies: []}
    ]
)
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

## 5. Ha frissítetted a rendezőket, ellenőrzés gyanánt kérdezd le a dokumentumokat a „directors” listából (használd a pretty() metódust a szebb megjelenítéshez)! Ehhez hasonló eredményt kell látnod:

```js
db.directors.find().pretty()

```
## 6. Ha elkészültél a rendezői listával, frissítsd a movies listát („táblázatot”): távolítsd el a director mezőt ($unset operátor segítségével). Ezentúl a rendezőn keresztül fogjuk elérni a hozzájuk tartozó filmeket.

```js
db.movies.updateMany(
    { },
    {
        $unset: { director: ""}
    }
)
```
## 7. Kérdezd le az egy bizonyos év előtt készült filmeket, majd az egy bizonyos év után készült filmeket! ($gt, $gte, $lt, $lte)

```js
db.movies.find({releaseYear: {$lt: 2000}})
```

```js
db.movies.find({releaseYear: {$gt: 2010}})
```

## 8.Kérdezz le két év között készült filmeket! (Próbáld ki $and operátorral is!)

```js
db.movies.find({
    $and: [
        {
           releaseYear: {$lt: 2021} 
        },
        {
            releaseYear: {$gt: 1997}
        }
    ]
})
```

## 9. Kérdezz le két év közötti filmeket, amelyek egy bizonyos kategóriával rendelkeznek!

```js
db.movies.find({
    category: "ROMANTIC",

    $and: [
        {
            releaseYear: {$lt: 2021}
        },
        {
            releaseYear: {$gt: 1990}
        }
    ]
})
```

## 10. Kérdezd le a filmeket, amelyeknek a kategóriája NEM FANTASY ($ne)!

```js
db.movies.find({
    category: {$ne: "FANTASY"}
})
```