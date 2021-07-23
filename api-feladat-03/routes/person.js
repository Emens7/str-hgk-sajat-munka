const service = require('../service/person.service');
const express = require('express');
const createError = require('http-errors');

const personRouter = new express.Router();

personRouter.get('/', async (req, res) => {
    const persons = await service.getAll(req.params);

    res.json(persons)
});



personRouter.get('/:id/vaccinated', async (req, res, next) => {
    const isVaccinated = await service.isVaccinated(parseInt(req.params.id));

    if(!isVaccinated) {
        return next(new createError.NotFound(`Ilyen id számú beoltott nem létezik`))
    }

    res.json({
        is_vaccinated: isVaccinated
    });
});

personRouter.post('/', async (req, res, next) => {
    const newPerson = await service.addPerson({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        vaccine: req.body.vaccine
    });

    if(!first_name || !last_name || !vaccine) {
        return next(new createError.BadRequest(`Hiányzik valamelyik adat.`))
    }

    res.json(newPerson);
});

personRouter.put('/:id', async (req, res, next) => {
    const data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        vaccine: req.body.vaccine
    };

    if(!first_name || !last_name || !vaccine) {
        return next(new createError.BadRequest(`Hiányzik valamelyik adat.`))
    }

    const updatedPerson = await service.update(parseInt(req.params.id), data);
    res.json(updatedPerson);
})

personRouter.delete('/:id', async (req, res, next) => {
    const del = await service.del(parseInt(req.params.id));

    if(!del) {
        return next(new createError.NotFound(`A személy nem létezik az adatbázisban.`))
    }

    res.json(del);
})

personRouter.get('/count', async (req, res, next) => {
    const count = await service.countVaccinated();

    if(!count) {
    return next
        ( new createError.NotFound(`Nincs adat`))
    }

    res.json({
        'number_of_vaccinated': count
    });
});

personRouter.get('/vaccinated', async (req, res, next) => {
    const vaccinated = await service.getVaccineted();

    if(!vaccinated) {
        return next(new createError.NotFound(`Nincs beoltott adat`))
    }

    res.json(vaccinated);
});

personRouter.get('/:id', async (req, res, next) => {
    const person = await service.personId(parseInt(req.params.id));

    if(!person) {
        return next(new createError.NotFound(`Az id nem létezik`))
    }

    res.json(person)
});

module.exports = personRouter;