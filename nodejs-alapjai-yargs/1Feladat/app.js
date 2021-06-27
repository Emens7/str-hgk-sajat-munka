const yargs = require('yargs');
const { id, producer, title } = require('./options');
const MoviesApi = require('./movie.api');
const MoviesService = require('./movie.service');

const { locale } = require('yargs');

const moviesApi = MoviesApi('./database/movie.json', 'movies');

const {
    getAllMovies,
    findMovieById,
    createMovie,
    editMovie,
    removeMovie
} = MoviesService(moviesApi);


yargs
    .version('1.0.0')
    .usage('Usage: <command> [options')
    .command({
        command: 'get',
        describe: 'Get all movies',
        handler: () => console.log(getAllMovies())
    })

    .command({
        command: 'find',
        describe: 'Find a movie by id',
        builder: { id },
        handler: (args) => console.log(findMovieById(args.id))
        
    })

    .command({
        command: 'create',
        describe: 'Create new movie',
        builder: { producer, title},
        handler: (args) => {
            console.log(createMovie(args))
        }
    })

    .command({
        command: 'edit',
        describe: 'Edit a movie',
        builder: { id, producer, title },
        handler: (args) => {
            console.log(editMovie(args))
        }
    })

    .command({
        command: 'remove',
        describe: 'Remove a movie by ID',
        builder: { id },
        handler: (args => {
            removeMovie(args.id)
            console.log('deleted')
        })
    })

    locale('en')
    .strict()
    .help()
    .parse()