C:\Program Files>cd C:\"Program Files\MongoDB\Server\4.4\bin"
C:\Program Files\MongoDB\Server\4.4\bin>mongo.exe
```js
 use videoStore
 db.movies.insert({title: "Indiana Jones and the Kingdom of the Crystal Skull", category: "action", director: "Steven Spilberg"})
 db.movies.insert({title: "Jurassic Park", category: "fantasy", director: "Steven Spilberg"})
 db.mivies.insert({title: "Saving Private Ryan", category: "action", director: "Steven Spilberg"})
 db.movies.insert({title: "Jaws", category: "action", director: "Steven Spilberg"})
 db.movies.insert({title: "American Sniper", category: "action", director: "Clint Eastwood"})
 db.movies.insert({title: "The Mule", category: "action", director: "Clint Eastwood"})
 db.movies.insert({title: "Million Dollar Baby", category: "romantic", director:"Clint Eastwood"})
 db.movies.insert({title: "Titanic", category:"romantic", director:"James Cameron"})
 db.movies({title: "Avatar", category:"romantic", director: "James Cameron"})
 db.movies.insert({title: "Terminator 2: Judgment Day", category: "action", director: "James Cameron"})

```
```js
db.movies.updateMany(
    {},
    { $set: {"ratings": []} }
);
```