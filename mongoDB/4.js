db.movies.updateMany(
    {},
    { $set: {"ratings": []} }
);

db.movies.update(
    { _id: ObjectId("60d9edb1e93bf398bbb6d5f6") },
    {  $push: {"ratings": { $each: [4, 5, 4] } } }
)

db.movies.update(
    { _id: ObjectId("60d9f1d6e93bf398bbb6d5fc")},
    { $push: {"ratings": { $each: [5, 5, 3] } } }
)

db.movies.update(
    { _id: ObjectId("60d9ed23e93bf398bbb6d5f5")},
    { $push: { "ratings": { $each: [ 3, 3, 4]}}}
)

db.movies.updateMany(
    {},
    { $set: {"releaseYear": 2000} }
)